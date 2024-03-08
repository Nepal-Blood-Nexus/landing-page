import React, { FC } from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import { StyledButton } from '@/components/styled-button'


const AuthNavigation: FC = () => {
  
  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      <StyledButton disableHoverEffect={true} variant="outlined">
        Sign In
      </StyledButton>
      <StyledButton disableHoverEffect={true}>Sign Up</StyledButton>
    </Box>
  )
}
export default function Page() {
  return <Link href="@/components/register/form">
   <Box sx={{ '& button:first-child': { mr: 2 } }}>
    <StyledButton disableHoverEffect={true} variant="outlined">
      Sign In
    </StyledButton>
    <StyledButton disableHoverEffect={true}>Sign Up</StyledButton>
   </Box>
</Link>
}
// export default AuthNavigation
