import { Box, Container, Text } from '@chakra-ui/react'
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
    <Box
      mt='auto'
      as='footer'
      id='form'
      sx={{
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1,
        '&:before': {
          content: '""',
          display: 'block',
          borderRadius: '-50%',
          position: 'absolute',
          zIndex: -1,
        },
      }}
      _before={{
        width: '100%',
        height: '45%',
        bottom: 0,
        left: 0,
        bg: 'brand.500',
        boxShadow: '0px -2px 15px 3px rgba(0,0,0,0.19)',
      }}
    >
      <Container
        maxW={'container.xl'}
        pt={50}
        sx={{
          zIndex: 1,
          '&:before, &:after': {
            content: '""',
            display: 'block',
            borderRadius: '50%',
            position: 'absolute',
            zIndex: -1,
          },
        }}
        _after={{
          width: '150px',
          height: '150px',
          bottom: '30px',
          right: '30px',
          bg: 'brand.300',
          zIndex: -1,
          opacity: 0.6,
        }}
        _before={{
          width: '300px',
          height: '300px',
          bottom: '-150px',
          right: '-150px',
          bg: 'brand.700',
          opacity: 0.6,
        }}
      >
        <Container maxW={{ base: 'full', md: 'container.lg' }} px={{ base: 0, md: 'inherit' }}>
          <ContactForm />
        </Container>
        <Box
          py={4}
          display='flex'
          alignItems='center'
          justifyContent={'center'}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Text fontSize={'xs'} color='#fff'>
            &copy;{new Date().getFullYear()} {hostname}. All Rights Reserved
          </Text>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
