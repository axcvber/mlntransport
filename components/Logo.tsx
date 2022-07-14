import { Box, useDimensions } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import useAppContext from '../hooks/useAppContext'

interface ILogo {
  isSticky?: boolean
}

const Logo: React.FC<ILogo> = ({ isSticky }) => {
  const { initialData } = useAppContext()
  const global = initialData?.global?.data?.attributes
  const logoUrl = isSticky ? global?.lightLogo.data?.attributes?.url : global?.darkLogo.data?.attributes?.url
  const elementRef = useRef<any>()
  const dimension = useDimensions(elementRef, true)
  return (
    <Link href='/' passHref>
      <Box
        ref={elementRef}
        as='a'
        display={'block'}
        sx={{
          position: 'relative',
          transition: 'all 0.2s ease',
          width: { base: isSticky ? '100px' : '120px', md: isSticky ? '110px' : '150px' },
          height: { base: isSticky ? '50px' : '60px', md: isSticky ? '55px' : '70px' },
        }}
      >
        <Image
          sizes={dimension ? `${Math.round(dimension.borderBox.width)}px` : '100vw'}
          priority
          layout='fill'
          objectFit='contain'
          objectPosition={'left'}
          src={logoUrl || ''}
          alt='logo'
        />
      </Box>
    </Link>
  )
}

export default Logo
