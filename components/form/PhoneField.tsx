import { chakra, FormControl, FormErrorMessage } from '@chakra-ui/react'
import React from 'react'
import { Controller } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { InputProps } from '../../interfaces/form.interfaces'
import Label from './Label'

const PhoneField: React.FC<InputProps> = ({ control, name, label, icon }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormControl isInvalid={!!fieldState.error}>
          <Label name={name} label={label} icon={icon} />
          <StyledPhoneInput
            inputProps={{
              name: name,
              id: name,
            }}
            defaultErrorMessage={fieldState.error?.message}
            placeholder={label}
            containerClass='container'
            inputClass='input'
            dropdownClass='dropdown'
            {...field}
          />
          <FormErrorMessage>{fieldState.error?.message && fieldState.error?.message}</FormErrorMessage>
        </FormControl>
      )}
    />
  )
}

const StyledPhoneInput = chakra(PhoneInput, {
  baseStyle: {
    w: '100%',
    // h: '40px',
    // color: 'red.500',
    fontFamily: `'Ubuntu', sans-serif`,
    borderRadius: '5px',

    '.flag-dropdown': {
      bg: 'gray.200',
      border: 'none',
      borderRadius: '5px 0 0 5px',

      '.selected-flag': {
        w: '40px',

        '&.open': {
          bg: 'gray.300',
        },
        '&:hover': {
          bg: 'gray.300',
        },
        '&:focus': {
          bg: 'gray.300',
        },
      },

      '.arrow': {
        left: '21px',
      },
    },
    '.input': {
      border: 'none',
      fontSize: '16px',
      w: '100%',
      pr: '10px',
      bg: 'gray.100',
      h: '40px',
      borderRadius: '5px',
      '&::placeholder': {
        color: 'gray.400',
      },
    },
    '.country-list': {
      // bg: 'gray.100',
      borderRadius: '5px',
      textAlign: 'left',
      '.country': {
        '&.highlight': {
          // bg: '#7A7A7A',
        },
        '&:hover': {
          // bg: '#7A7A7A',
        },
      },
    },
  },
})

export default PhoneField
