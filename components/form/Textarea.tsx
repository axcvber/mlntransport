import { FormControl, FormErrorMessage, Textarea as ChakraTextarea } from '@chakra-ui/react'
import React from 'react'
import { Controller } from 'react-hook-form'
import { InputProps } from '../../interfaces/form.interfaces'
import Label from './Label'

const Textarea: React.FC<InputProps> = ({ control, name, label, icon }) => {
  return (
    <Controller
      defaultValue={''}
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormControl isInvalid={!!fieldState.error}>
          <Label name={name} label={label} icon={icon} />
          <ChakraTextarea
            variant='filled'
            id={name}
            fontSize={15}
            {...field}
            borderRadius={5}
            placeholder={label}
            size='sm'
            resize={'none'}
            h='200px'
            focusBorderColor='transparent'
            errorBorderColor={'transparent'}
            _focus={{
              bg: 'gray.100',
            }}
          />

          <FormErrorMessage>{fieldState.error && fieldState.error.message}</FormErrorMessage>
        </FormControl>
      )}
    />
  )
}

export default Textarea
