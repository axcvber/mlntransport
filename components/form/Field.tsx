import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react'
import React from 'react'
import { Controller } from 'react-hook-form'
import { InputProps } from '../../interfaces/form.interfaces'
import Label from './Label'

interface IField extends InputProps {
  type?: React.HTMLInputTypeAttribute
}

const Field: React.FC<IField> = ({ control, name, label, icon, type = 'text' }) => {
  return (
    <Controller
      defaultValue={''}
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormControl isInvalid={!!fieldState.error}>
          <Label name={name} label={label} icon={icon} />
          <Input
            focusBorderColor={'transparent'}
            errorBorderColor={'transparent'}
            _placeholder={{ color: 'gray.400' }}
            _focus={{
              bg: 'gray.100',
            }}
            type={type}
            variant='filled'
            id={name}
            placeholder={label}
            {...field}
          />
          <FormErrorMessage>{fieldState.error && fieldState.error.message}</FormErrorMessage>
        </FormControl>
      )}
    />
  )
}

export default Field
