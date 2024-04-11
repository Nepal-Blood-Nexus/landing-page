import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { StyledButton } from '@/components/styled-button'
import Link from 'next/link'

const AuthNavigation: FC = () => {
  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      {/* <StyledButton disableHoverEffect={true} variant="outlined">
        <Link href={"/login"} >Sign In</Link>
        
      </StyledButton>
      <StyledButton disableHoverEffect={true}>Sign Up</StyledButton> */}
    </Box>
  )
}

export default AuthNavigation
