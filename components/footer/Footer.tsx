import { Box, Container, Divider, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaTwitter, FaViber, FaWhatsapp } from 'react-icons/fa'
import { FiInstagram, FiTwitter } from 'react-icons/fi'
import useAppContext from '../../hooks/useAppContext'
import Logo from '../Logo'
import ContactForm from './ContactForm'
import { BsWhatsapp } from 'react-icons/bs'
import { TbBrandTelegram, TbBrandFacebook } from 'react-icons/tb'

const Footer = () => {
  const { initialData } = useAppContext()
  const [hostname, setHostname] = React.useState<string | undefined>('')
  const icons = initialData?.contact?.data?.attributes?.socialNetworks

  const getSocialIcon = (iconName?: string) => {
    let Icon
    switch (iconName) {
      case 'instagram':
        Icon = <FaInstagram />
        break
      case 'facebook':
        Icon = <TbBrandFacebook />
        break
      case 'twitter':
        Icon = <FiTwitter />
        break
      case 'whatsapp':
        Icon = <BsWhatsapp />
        break
      case 'telegram':
        Icon = <TbBrandTelegram />
        break
      case 'viber':
        Icon = <FaViber />
        break
    }
    return Icon
  }

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setHostname(window?.location.hostname)
    }
  }, [])
  return (
    <Container maxW={'container.xl'} mt='auto'>
      <Container maxW={'container.lg'}>
        <ContactForm />
      </Container>
      <Divider />
      <Box
        as='footer'
        py={4}
        display='flex'
        alignItems='center'
        justifyContent={'space-between'}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Logo />
        <Text fontSize={'xs'} sx={{ display: 'flex', order: { base: 3, md: 2 } }}>
          &copy;{new Date().getFullYear()} {'mintransport.com'}. All rights reserved
        </Text>

        <HStack sx={{ display: 'flex', order: { base: 2, md: 3 }, my: { base: 4, md: 0 } }}>
          {icons?.map((item) => (
            <a key={item?.id} href={item?.link} target='_blank' rel='noopener noreferrer'>
              <Box
                sx={{
                  w: '35px',
                  h: '35px',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  // border: '1px solid',
                  // borderColor: 'brand.500',
                  transition: 'all 0.2s ease',
                  bg: 'brand.50',
                  '&:hover': {
                    bg: 'brand.500',
                    transform: 'translateY(-2px)',
                    'svg': {
                      color: '#fff',
                    },
                  },
                  'svg': {
                    color: 'brand.500',
                    fontSize: 18,
                    transition: 'all 0.2s ease',
                  },
                }}
              >
                {getSocialIcon(item?.icon)}
              </Box>
            </a>
          ))}
        </HStack>
      </Box>
    </Container>
  )
}

export default Footer
