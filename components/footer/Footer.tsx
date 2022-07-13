import { Box, Container, Divider, Text } from '@chakra-ui/react'
import React from 'react'
import ContactForm from './ContactForm'

const Footer = () => {
  const [hostname, setHostname] = React.useState<string | undefined>('')

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setHostname(window?.location.hostname)
    }
  }, [])
  return (
    <Container maxW={'container.xl'} mt='auto' pt={50}>
      <Container maxW={{ base: 'full', md: 'container.lg' }} px={{ base: 0, md: 'inherit' }}>
        <ContactForm />
      </Container>
      <Divider />
      <Box
        as='footer'
        py={4}
        display='flex'
        alignItems='center'
        justifyContent={'center'}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Text fontSize={'xs'}>
          &copy;{new Date().getFullYear()} {hostname}. All Rights Reserved
        </Text>
      </Box>
    </Container>
  )
}

export default Footer
