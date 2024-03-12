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
      sx={{ backgroundColor: 'primary.main', pt: { xs: 6, md: 3 }, color: 'primary.contrastText' }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={5}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 2, md: 3 } }}>
            <Box sx={{  }}>           
              <Image src="/images/nbn.png" width={110} height={118} quality={97}  alt="Feature img" />             
              <Typography component="h2" variant="h2" sx={{ mb: 2 }}>
                Nepal Blood Nexus
              </Typography>
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
               Nepal Blood Nexus is online platfrom for finding blood donors available to donate
              </Typography>
              <FooterSocialLinks />
            </Box>
          </Box>
          </Grid>
          <Grid item xs={12} md={5} alignContent={"center"} alignItems={"center"} alignSelf={"center"}>
            <FooterNavigation />
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{ backgroundColor: '#800E13', py: { xs: 6, md: 2 }, color: 'primary.contrastText' }}
      >
       <Box sx={{ textAlign:'center' }}>
        <Typography sx={{ color: 'white', fontSize: { xs: 30, md: 20 }, }}>
        © 2024 Nepal Blood Nexus. All rights reserved.
        </Typography>
      </Box>
    </Box>
    </Box>
    
  )
}

export default Footer
