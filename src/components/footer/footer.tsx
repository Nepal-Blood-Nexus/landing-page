import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: 'primary.main', py: { xs: 6, md: 0 }, color: 'primary.contrastText' }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={5}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 } }}>
            <Box sx={{ position: 'relative' }}>           
              <Image src="/images/nbn.png" width={110} height={118} quality={97}  alt="Feature img" />             
              <Typography component="h2" variant="h2" sx={{ mb: 2 }}>
                Nepal Blood Nexus
              </Typography>
              {/* <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                Coursespace is an online learning platform that has been operating since 2018 until now.
              </Typography> */}
              <FooterSocialLinks />
            </Box>
          </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <FooterNavigation />
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{ backgroundColor: '#800E13', py: { xs: 6, md: 2 }, color: 'primary.contrastText' }}
      >
       <Box sx={{ position: 'relative', textAlign:'center' }}>
        <Typography sx={{ color: 'white', fontSize: { xs: 30, md: 20 }, mb: 0, ml: { xs: 0, md: 0 } }}>
        © 2024 Nepal Blood Nexus. All rights reserved.
        </Typography>
      </Box>
    </Box>
    </Box>
    
  )
}

export default Footer
