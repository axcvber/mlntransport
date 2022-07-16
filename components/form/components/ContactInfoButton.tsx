import { Button } from '@chakra-ui/react'
import React, { ReactElement } from 'react'

interface IContactInfoButton {
  label: string
  link: string
  icon: ReactElement
}

const ContactInfoButton: React.FC<IContactInfoButton> = ({ label, link, icon }) => {
  return (
    <Button
      as='a'
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      size='sm'
      variant={'ghost'}
      colorScheme='brand'
      whiteSpace={'break-spaces'}
      textAlign='left'
      wordBreak='break-word'
      fontWeight={400}
      _hover={{
        bg: 'brand.300',
      }}
      h='auto'
      minH='40px'
      color={'#fff'}
      leftIcon={icon}
      py={'10px'}
      sx={{
        'svg': {
          fontSize: 20,
        },
      }}
    >
      {label}
    </Button>
  )
}

export default ContactInfoButton
