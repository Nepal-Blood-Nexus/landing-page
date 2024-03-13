import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { setCookie } from 'nookies';

const API_BASE_URL = 'https://nbn-server.onrender.com/api/auth/'; // Replace with your actual API base URL

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
):Promise<any>{
  try {
    const { phone, password } = req.body;

    // Call your external API for sign-in
    const signInResponse = await axios.post(`${API_BASE_URL}/signin`, {
      phone,
      password,
    });

    // Extract the token from the response
    const { token } = signInResponse.data;

    // Set the token in a cookie (you may need to adjust the expiration, path, etc.)
    setCookie({ res }, 'authToken', token, {
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
    });

    res.status(200).json({ success: true });
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      res.status(401).json({ error: 'Invalid credentials.' });
    } else {
      res.status(500).json({ error: 'Something went wrong.' });
    }
  }
}
