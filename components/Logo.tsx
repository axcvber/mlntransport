import { Box } from '@chakra-ui/react'
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
  const logoUrl = isSticky ? global?.lightLogo.data?.attributes?.url : global?.darkLogo.data?.attributes?.url
  return (
    <Link href='/' passHref>
      <Box
        as='a'
        display={'block'}
        sx={{
          position: 'relative',
          transition: 'all 0.2s ease',
          width: { base: isSticky ? '100px' : '120px', md: isSticky ? '110px' : '150px' },
          height: { base: isSticky ? '50px' : '60px', md: isSticky ? '55px' : '70px' },
        }}
      >
        <Image priority layout='fill' objectFit='contain' objectPosition={'left'} src={logoUrl || ''} alt='logo' />
      </Box>
    </Link>
  )
}

export default Logo
