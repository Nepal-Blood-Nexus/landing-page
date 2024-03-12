// import { MainLayout } from '@/components/layout'
import { StyledButton } from '@/components/styled-button'
import { NextPageWithLayout } from '@/interfaces/layout'
import { Box, InputBase, Typography } from '@mui/material'
import Image from 'next/image'

const SignIn: NextPageWithLayout = () => {
  return (
    <>
      <div className=" grid grid-cols-[1fr_1fr] min-h-screen">
        <div className=" relative">
          <Image
            src={
              'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            alt="unsplash-image"
            layout="fill"
            className=" px-2 py-2"
          />
        </div>
        <div className='flex items-center justify-center'>
          <form action="" >
            <Box sx={{
                display:"flex",
                alignItems:"center",
                flexDirection: {xs:"column",md:"column"},
                // justifyContent:{xs:"100%",md:500},
                mx:"auto",
                justifyContent:"center",
                gap:"10px"
            }}>

            <Typography variant="h1" component={'h1'}>
              Sign In to NBN
            </Typography>
            <div className=" flex flex-col gap-2">
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
                  {/* <StyledButton disableHoverEffect size="large">
                Subscribe
              </StyledButton> */}
                </Box>
              </Box>
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
                  placeholder="Enter your Password"
                />
                <Box></Box>
              </Box>
              <Box sx={{
                display:"flex",
                width:"100%"
              }}>

              <StyledButton disableHoverEffect size="large">
                Subscribe
              </StyledButton>
              </Box>
            </div>
            </Box>
          </form>
        </div>
      </div>
    </>
  )
}

// SignIn.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default SignIn
