import { FormLabel, HStack } from '@chakra-ui/react'
import React, { ReactElement } from 'react'

interface ILabel {
  name: string
  label: string
  icon: ReactElement
}

const Label: React.FC<ILabel> = ({ name, label, icon }) => {
  return (
    <FormLabel htmlFor={name} color={'gray.700'} fontSize='sm'>
      <HStack
        alignItems={'center'}
        direction='row'
        sx={{
          'svg': {
            fontSize: 18,
          },
        }}
      >
        {icon}
        <span>{label}</span>
      </HStack>
    </FormLabel>
  )
}

export default Label
