import { Box } from '@chakra-ui/react'
import React from 'react'
import useAppContext from '../hooks/useAppContext'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoLocationSharp, IoMail } from 'react-icons/io5'

const ContactsWidget = () => {
  const { initialData } = useAppContext()
  const contacts = initialData?.contact?.data?.attributes
  const widgetItems = [
    {
      icon: <FaPhoneAlt />,
      link: `tel:${contacts?.phoneNumbers[0]?.phone}`,
      withRotate: true,
    },
    {
      icon: <IoMail />,
      link: `mailto:${contacts?.email}`,
    },
    {
      icon: <IoLocationSharp />,
      link: contacts?.address?.googleMapLink,
    },
  ]

  return (
    <Box
      as='aside'
      sx={{
        position: 'fixed',
        top: '45%',
        right: 3,
        zIndex: 999,
      }}
    >
      <ul>
        {widgetItems.map((item, inx: number) => {
          return (
            item.link && (
              <li key={inx}>
                <a href={item.link} target='_blank' rel='noopener noreferrer'>
                  <Box
                    sx={{
                      border: '2px solid #fff',
                      my: 3,
                      boxShadow: '-1px 0px 19px 2px rgba(241,124,87,0.61)',
                      borderRadius: '50%',
                      bg: 'brand.400',
                      p: 2.5,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      'svg': {
                        fontSize: 22,
                        color: '#fff',
                        transition: 'all 0.2s ease',
                      },
                      '&:hover': {
                        transform: 'scale(1.2)',
                        'svg': {
                          transform: item.withRotate ? 'rotate(25deg)' : 'none',
                        },
                      },
                    }}
                  >
                    {item.icon}
                  </Box>
                </a>
              </li>
            )
          )
        })}
      </ul>
    </Box>
  )
}

export default ContactsWidget
