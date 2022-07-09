import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Contacts = () => {
  return (
    <Box
      sx={{
        bg: 'gray.500',
        p: 10,
        borderRadius: 10,
      }}
    >
      <Text>Email: asda@das.ru</Text>
      <Text>Phone: +432432143</Text>
      <Text>Phone: +432432143</Text>
    </Box>
  )
}

export default Contacts
