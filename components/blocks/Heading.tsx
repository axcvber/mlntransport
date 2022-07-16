import { Box, Button, Heading as ChakraHeading, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { FiCornerRightDown } from 'react-icons/fi'
import { ComponentBlocksHeading } from '../../generated'
import useLocale from '../../hooks/useLocale'
import RSLink from '../RSLink.tsx'

const Heading: React.FC<ComponentBlocksHeading> = ({ headingTitle, headingDescription, background, contactButton }) => {
  const t = useLocale()

  return (
    <Box
      w='100%'
      h='400px'
      position={'relative'}
      borderRadius={10}
      overflow='hidden'
      color='#fff'
      boxShadow='md'
      _after={{
        content: '""',
        display: 'block',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        bg: 'rgba(0,0,0,0.6)',
      }}
    >
      <Box px={6} py={20} h='100%' position={'relative'} zIndex={1}>
        <VStack h='100%' spacing={4} justifyContent={'flex-end'} alignItems='flex-start'>
          <ChakraHeading textTransform={'uppercase'}>{headingTitle}</ChakraHeading>
          {headingDescription && <Text maxW={400}>{headingDescription}</Text>}
          {contactButton && (
            <RSLink to='form'>
              <Button textTransform={'uppercase'} colorScheme={'brand'} rightIcon={<FiCornerRightDown fontSize={22} />}>
                {t.button.submitARequest}
              </Button>
            </RSLink>
          )}
        </VStack>
      </Box>
      <Image
        priority
        src={background.data?.attributes?.url || ''}
        placeholder='blur'
        blurDataURL={background.data?.attributes?.url || ''}
        layout='fill'
        objectFit='cover'
        alt={background.data?.attributes?.alternativeText || ''}
      />
    </Box>
  )
}

export default Heading
