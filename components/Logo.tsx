import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import useAppContext from '../hooks/useAppContext'

interface ILogo {
  isSticky?: boolean
}

const Logo: React.FC<ILogo> = ({ isSticky }) => {
  const { initialData } = useAppContext()
  const global = initialData?.global?.data?.attributes
  const logoUrl = isSticky ? global?.darkLogo.data?.attributes?.url : global?.lightLogo.data?.attributes?.url
  return (
    // <Box display={'flex'} h={'100%'} sx={{ position: 'relative', width: '250px' }}>
    //   <Image layout='fill' objectFit='cover' src='/sitelogo.png' alt='logo' />
    // </Box>

    <Link href='/' passHref>
      <Box
        as='a'
        // display={'flex'}
        sx={{
          position: 'relative',
          transition: 'all 0.3s ease',
          width: isSticky ? '70px' : '100px',
          height: isSticky ? '70px' : '100px',
        }}
      >
        <Image
          priority
          // objectFit='contain'
          // objectPosition={'left'}
          width={90}
          height={90}
          layout='responsive'
          src={logoUrl || ''}
          alt='logo'
        />
      </Box>
    </Link>
  )
}

export default Logo
