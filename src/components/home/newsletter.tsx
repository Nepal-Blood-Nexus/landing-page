import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'

const HomeNewsLetter: FC = () => {
  return (
    // <div
    //   style={{
    //     // use relative position for the parent div
    //     position: "relative",
    //     width: "100vw",
    //     height: "100vh",
    //   }}
    // >
    //   <Image
    //     src="/images/work.png"
    //     layout='fill'
    //     alt={"Background Image"}
    //   />
    
     <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
      
      <Container>
        
        <Box
        
          sx={{
            backgroundColor: 'secondary.main',
            borderRadius: 10,
            py: { xs: 4, md: 10 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
          }}
        >
          {/* <Image src="/images/work.png" width={650} height={678} quality={97} alt="Feature img" /> */}
          <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
            Subscribe to Our News Letter
          </Typography>
          <Typography sx={{ mb: 6 }}>Subscribe to our newsletter to get our events information.</Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: 560 },
              mx: 'auto',
            }}
          >
            <InputBase
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: '100%',
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
              }}
              placeholder="Enter your Email Address"
            />
            <Box>
              <StyledButton disableHoverEffect size="large">
                Subscribe
              </StyledButton>
            </Box>
          </Box>
        </Box>
      </Container>
     </Box>
    // </div>
  );
}

export default HomeNewsLetter
