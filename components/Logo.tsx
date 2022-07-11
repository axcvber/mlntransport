import { Box, useBreakpointValue } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import useAppContext from '../hooks/useAppContext'

interface ILogo {
  isSticky?: boolean
}

const Logo: React.FC<ILogo> = ({ isSticky }) => {
  const { initialData } = useAppContext()
  const isMobile = useBreakpointValue({ base: true, md: false })
  const global = initialData?.global?.data?.attributes
  const logoUrl = isSticky ? global?.lightLogo.data?.attributes?.url : global?.darkLogo.data?.attributes?.url

  return (
    <Link href='/' passHref>
      <Box
        as='a'
        display={'inline-flex'}
        sx={{
          transition: 'all 0.2s ease',
          width: isSticky || isMobile ? '100px' : '130px',
          height: '100%',
        }}
      >
        <Image
          priority
          objectFit='contain'
          objectPosition={'left'}
          width={250}
          height={120}
          src={logoUrl || ''}
          alt='logo'
        />
      </Box>
    </Link>
  )
}

export default Logo
