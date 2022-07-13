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
          py: title.decoration ? 2 : 0,
          px: title.decoration ? 4 : 0,
          '&:before, &:after': {
            content: '""',
            display: title.decoration ? 'block' : 'none',
            position: 'absolute',
            w: '25px',
            h: '25px',
            borderColor: 'brand.500',
          },
        }}
        _before={{
          top: 0,
          left: 0,
          borderTop: '3px solid ',
          borderLeft: '3px solid ',
        }}
        _after={{
          bottom: 0,
          right: 0,
          borderBottom: '3px solid ',
          borderRight: '3px solid ',
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
