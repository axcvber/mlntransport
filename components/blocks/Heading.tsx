import { Box, Button, Container, Heading as ChakraHeading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Heading = ({ headingTitle, headingDescription, background, contactButton }: any) => {
  return (
    <Box
      w='100%'
      h='400px'
      bgImage={`url('${background?.data.attributes.url}')`}
      bgSize='cover'
      bgPosition='center'
      bgRepeat='no-repeat'
      position={'relative'}
      borderRadius={10}
      overflow='hidden'
      color='#fff'
      zIndex={2}
      boxShadow='md'
      _after={{
        content: '""',
        display: 'block',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        bg: 'rgba(0,0,0,0.5)',
        zIndex: -1,
      }}
    >
      <Box px={5} py={20} h='100%'>
        <VStack h='100%' justifyContent={'flex-end'} alignItems='flex-start'>
          <ChakraHeading textTransform={'uppercase'}>{headingTitle}</ChakraHeading>
          {headingDescription && <Text maxW={300}>{headingDescription}</Text>}
          {contactButton && (
            <Button textTransform={'uppercase'} colorScheme={'brand'}>
              Submit a request
            </Button>
          )}
        </VStack>
      </Box>
    </Box>
  )
}

export default Heading
