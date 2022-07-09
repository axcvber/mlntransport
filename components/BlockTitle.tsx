import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const BlockTitle: React.FC<{ title: any }> = ({ title }) => {
  let position
  switch (title.align) {
    case 'left':
      position = 'flex-start'
      break

    case 'center':
      position = 'center'
      break
    case 'right':
      position = 'flex-end'
      break

    default:
      break
  }
  return (
    <Box display={'flex'} flexDirection='column' alignItems={position} mb={5}>
      <Heading
        textAlign={title.align}
        sx={{
          position: 'relative',
          py: 2,
          px: 4,
        }}
        _before={{
          content: '""',
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          w: '25px',
          h: '25px',
          borderTop: '3px solid ',
          borderLeft: '3px solid ',
          borderColor: 'brand.500',
        }}
        _after={{
          content: '""',
          display: 'block',
          position: 'absolute',
          bottom: 0,
          right: 0,
          w: '25px',
          h: '25px',
          borderBottom: '3px solid ',
          borderRight: '3px solid ',
          borderColor: 'brand.500',
        }}
      >
        {title.title}
      </Heading>
      {title.description && (
        <Text maxW='400px' mt={3} textAlign={title.align}>
          {title.description}
        </Text>
      )}
    </Box>
  )
}

export default BlockTitle
