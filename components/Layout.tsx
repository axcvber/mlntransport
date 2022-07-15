import { Box, Container } from '@chakra-ui/react'
import React, { ReactChild } from 'react'
import dynamic from 'next/dynamic'
// import ContactsWidget from './ContactsWidget'
import Navbar from './navbar/Navbar'
const ScrollTop = dynamic(() => import('./ScrollTop'))
const Footer = dynamic(() => import('./footer/Footer'))
const ContactsWidget = dynamic(() => import('./ContactsWidget'))

interface ILayout {
  children: ReactChild
  isRouteChanging: boolean
  loadingKey: number
}

const Layout: React.FC<ILayout> = ({ children, isRouteChanging, loadingKey }) => {
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
