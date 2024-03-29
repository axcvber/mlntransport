import { Box, Button, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import useLocale from '../hooks/useLocale'
import image from '../public/404.png'

const NotFoundPage = () => {
  const t = useLocale()
  const router = useRouter()

  const handleToHome = () => {
    router.push('/')
  }
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: 'calc(100vh - 100px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
        <Image priority layout='responsive' objectFit='contain' width={800} height={500} src={image} alt='404' />
        <Box sx={{ textAlign: 'center' }}>
          <Heading size='2xl'>{t.page404.title}</Heading>
          <Text my={5} fontSize='lg'>
            {t.page404.subtitle}
          </Text>
          <Button colorScheme={'brand'} onClick={handleToHome}>
            {t.page404.btn}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default NotFoundPage
