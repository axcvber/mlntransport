import { Button, chakra, FormControl, FormErrorMessage, List, ListItem, useOutsideClick } from '@chakra-ui/react'
import { AnimatePresence, isValidMotionProp, motion } from 'framer-motion'
import React from 'react'
import { Controller, UseFormSetValue } from 'react-hook-form'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { InputProps } from '../../interfaces/form.interfaces'
import { IContactFormInputs } from '../footer/ContactForm'
import Label from './Label'

interface ISelect extends InputProps {
  options: any
  placeholder: string
  setValue: UseFormSetValue<IContactFormInputs>
  isSubmitSuccessful: boolean
}

const Select: React.FC<ISelect> = ({
  options,
  name,
  placeholder,
  control,
  label,
  icon,
  setValue,
  isSubmitSuccessful,
}) => {
  const [isOpen, setOpen] = React.useState<boolean>(false)
  const [selectedService, setSelectedService] = React.useState<string | null>(null)
  const selectRef = React.useRef(null)
  useOutsideClick({
    ref: selectRef,
    handler: () => setOpen(false),
  })

  React.useEffect(() => {
    if (selectedService) {
      setValue('service', selectedService, { shouldValidate: true, shouldDirty: true })
    }
  }, [selectedService, setValue])

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      setSelectedService(null)
    }
  }, [isSubmitSuccessful, setSelectedService])

  const onSelectOption = (title: string) => {
    setSelectedService(title)
    setOpen(false)
  }

  return (
    <Controller
      defaultValue={''}
      control={control}
      name={name}
      render={({ fieldState: { error } }) => (
        <FormControl isInvalid={!!error?.message}>
          <Label name={name} label={label} icon={icon} />

          <CustomSelect ref={selectRef}>
            <Button
              w='100%'
              rightIcon={isOpen ? <FiChevronUp /> : <FiChevronDown />}
              color={selectedService ? 'gray.800' : 'gray.400'}
              justifyContent={'space-between'}
              fontWeight={400}
              whiteSpace={'break-spaces'}
              textAlign='left'
              wordBreak='break-word'
              h='auto'
              minH='40px'
              py={'5px'}
              onClick={() => {
                setOpen((prev) => !prev)
              }}
            >
              {options.find((item: any) => item.attributes.title === selectedService)?.attributes.title || placeholder}
            </Button>

            <AnimatePresence exitBeforeEnter>
              {isOpen && (
                <SelectDropdown
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 10 }}
                  exit={{ opacity: 0, y: 0 }}
                  // @ts-ignore
                  transition={{ type: 'spring', duration: 0.4, velocity: 2 }}
                >
                  <List>
                    {options.map((item: any) => (
                      <ListItem
                        key={item.id}
                        onClick={() => onSelectOption(item.attributes.title)}
                        sx={{
                          cursor: 'pointer',
                          py: 2,
                          px: 5,
                          bg: selectedService === item.attributes.title ? 'brand.500' : 'transparent',
                          color: selectedService === item.attributes.title ? '#fff' : 'inherit',
                        }}
                        _hover={{
                          bg: selectedService === item.attributes.title ? 'brand.500' : 'gray.100',
                          color: selectedService === item.attributes.title ? '#fff' : 'inherit',
                        }}
                      >
                        {item.attributes.title}
                      </ListItem>
                    ))}
                  </List>
                </SelectDropdown>
              )}
            </AnimatePresence>
          </CustomSelect>
          <FormErrorMessage>{error?.message && error?.message}</FormErrorMessage>
        </FormControl>
      )}
    />
  )
}

const SelectDropdown = chakra(motion.ul, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
  baseStyle: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    boxShadow: '1px 2px 10px rgb(0 0 0 / 35%)',
    backgroundColor: '#fff',
    zIndex: 9,
    maxHeight: '200px',
    overflowY: 'auto',
    borderRadius: '5px',
    userSelect: 'none',
  },
})

const CustomSelect = chakra('div', {
  baseStyle: {
    width: '100%',
    position: 'relative',
  },
})

export default Select
