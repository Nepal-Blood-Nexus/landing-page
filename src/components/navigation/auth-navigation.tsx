import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { StyledButton } from '@/components/styled-button'
import { useRouter } from "next/router"

const AuthNavigation: FC = () => {
  const router = useRouter()
  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      <StyledButton disableHoverEffect={true} variant="outlined" onClick = {() => router.push("/signin")}  >
        Sign In
      </StyledButton>
      <StyledButton disableHoverEffect={true}>Sign Up</StyledButton>
    </Box>
  )
}

export default AuthNavigation
