import { useQuery } from '@apollo/client'
import { Box, Container } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { ReactChild } from 'react'
import { FiGlobe, FiMail, FiPhone } from 'react-icons/fi'
import ContactsWidget from './ContactsWidget'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
import ScrollTop from './ScrollTop'

interface ILayout {
  children: ReactChild
  isRouteChanging: boolean
  loadingKey: number
}

const Layout: React.FC<ILayout> = ({ children, isRouteChanging, loadingKey }) => {
  const router = useRouter()

  return (
    <Box minH={'100vh'} display='flex' flexDirection={'column'} overflowX='hidden'>
      <Navbar isRouteChanging={isRouteChanging} loadingKey={loadingKey} />
      <Container maxW='container.xl' as={'main'} mt={'100px'}>
        {children}
      </Container>
      <Footer />
      <ContactsWidget />
      <ScrollTop />
    </Box>
  )
}

export default Layout
