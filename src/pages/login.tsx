import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import { FormEvent } from 'react'
import { useRouter } from 'next/router'
import { Box, Container, Grid } from '@mui/material'

// import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicHomeFeature = dynamic(() => import('../components/home/feature'))
const DynamicHomePopularCourse = dynamic(() => import('../components/home/popular-courses'))
const DynamicHomeTestimonial = dynamic(() => import('../components/home/testimonial'))
const DynamicHomeOurMentors = dynamic(() => import('../components/home/mentors'))
const DynamicHomeNewsLetter = dynamic(() => import('../components/home/newsletter'))




const Login: NextPageWithLayout = () => {

    const router = useRouter()



    async function handleSubmit(event: FormEvent<HTMLFormElement>):Promise<void> {
        event.preventDefault()
     
        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
     
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        })
     
        if (response.ok) {
          router.push('/profile')
        } else {
          // Handle errors
        }
      }

      

  return (
    <>
     <Box id="feature" sx={{ py: { xs: 10, md: 14 }, backgroundColor: 'background.paper' }}>
      <Container>
        <Grid item spacing={3} alignSelf={"center"}>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
  <div className="mb-6">
    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Email"
      required
      className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
    />
  </div>
  <div className="mb-6">
    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
      Password
    </label>
    <input
      type="password"
      id="password"
      name="password"
      placeholder="Password"
      required
      className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
    />
  </div>
  <button
    type="submit"
    className="w-full bg-blue-500 text-white p-3 rounded-md focus:outline-none hover:bg-blue-700"
  >
    Login
  </button>
</form>
        </Grid>
        </Container>
        </Box>
    
    

      <DynamicHomePopularCourse  />
      <DynamicHomeFeature />
      <DynamicHomeTestimonial />
      <DynamicHomeOurMentors />
      <DynamicHomeNewsLetter />
    </>
  )
}

Login.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Login
