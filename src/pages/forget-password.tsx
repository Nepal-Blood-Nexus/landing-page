// import { MainLayout } from '@/components/layout'
import { StyledButton } from '@/components/styled-button'
import { NextPageWithLayout } from '@/interfaces/layout'
import { Box, InputBase, Typography } from '@mui/material'
import Image from 'next/image'
import image from '../../public/images/image.png'
import { Logo } from '@/components/logo'

const ForgetPassword: NextPageWithLayout = () => {
  return (
    <>
      <div
        className=" grid grid-cols-[2fr_1fr] min-h-screen image__container"
        style={{
          display: 'grid',
          gridTemplateColumns: '0.6fr 1fr',
          minHeight: '100vh',
        }}
      >
        <div
          className=" relative"
          style={{
            position: 'relative',
            maxHeight: '100vh',
          }}
        >
          <Image
            src={image}
            alt="unsplash-image"
            layout="fill"
            objectFit="cover"
            className=" px-2 py-2"
            style={{
              padding: '8px',
              objectFit: 'cover',
            }}
          />
        </div>
        <div
          className="flex items-center justify-center"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <form action="">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: { xs: 'column', md: 'column' },
                // justifyContent:{xs:"100%",md:500},
                mx: 'auto',
                justifyContent: 'center',
                gap: '10px',
              }}
            >
              {/* <Typography variant="h1" component={'h1'}>
               Reset Your Password
              </Typography> */}
              <Logo />
              <div
                className=" flex flex-col gap-2"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
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
                {/* <Box
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
                </Box> */}

                <Box sx={{
                  display:"flex",
                  justifyContent:"space-between",
                  alignItems:"center",
                  cursor:"pointer",
                 textDecoration:"underline",
                 textUnderlineOffset:"2px"

                }}>
                  <StyledButton disableHoverEffect size="large">
                    Reset Password
                  </StyledButton>
                  {/* <Typography>Forget Your Password?</Typography> */}
                </Box>
              </div>
            </Box>
          </form>
        </div>
      </div>
    </>
  )
}

// ForgetPassword.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default ForgetPassword
