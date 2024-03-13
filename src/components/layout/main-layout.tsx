import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

interface Props {
  children: ReactNode
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Box component="main" className='grid grid-rows-[auto_1fr_auto] min-h-screen h-full'>
      <Header />
      {children}
      <Footer />
    </Box>
  )
}

export default MainLayout
