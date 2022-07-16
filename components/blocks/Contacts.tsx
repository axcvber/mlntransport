import { Box, chakra, Grid, GridItem, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { FaGlobe, FaPhoneAlt } from 'react-icons/fa'
import { IoLocationSharp, IoMail } from 'react-icons/io5'
import { ComponentBlocksContacts } from '../../generated'
import useAppContext from '../../hooks/useAppContext'
import getSocialIcon from '../../utils/getSocialIcon'
import BlockTitle from '../BlockTitle'

const Contacts: React.FC<ComponentBlocksContacts> = ({ title }) => {
  const { initialData } = useAppContext()
  const contacts = initialData?.contact?.data?.attributes
  const icons = initialData?.contact?.data?.attributes?.socialNetworks

  return (
    <>
      {title && <BlockTitle title={title} />}
      <Grid
        templateColumns={{
          base: '1fr',
          sm: `repeat(${contacts?.address ? '2' : '3'}, 1fr)`,
          lg: `repeat(${contacts?.address ? '4' : '3'}, 1fr)`,
        }}
        gap={6}
        w='100%'
      >
        <Card>
          <FaPhoneAlt />
          {contacts &&
            contacts.phoneNumbers.map((item) => (
              <React.Fragment key={item?.id}>
                <Text>{item?.phone}</Text>
              </React.Fragment>
            ))}
        </Card>
        <Card>
          <IoMail />
          <Text>{contacts?.email}</Text>
        </Card>
        {contacts?.address && (
          <Card>
            <IoLocationSharp />
            <Text>{contacts?.address?.address}</Text>
          </Card>
        )}
        <Card>
          <FaGlobe />
          <HStack as='ul'>
            {icons?.map((item) => (
              <li key={item?.id}>
                <a href={item?.link} target='_blank' rel='noopener noreferrer'>
                  <Box
                    sx={{
                      w: '35px',
                      h: '35px',
                      borderRadius: '50%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      bg: 'gray.50',
                      '&:hover': {
                        bg: 'gray.200',
                      },
                      'svg': {
                        fontSize: '18px !important',
                        mb: '0px !important',
                      },
                    }}
                  >
                    {getSocialIcon(item?.icon)}
                  </Box>
                </a>
              </li>
            ))}
          </HStack>
        </Card>
      </Grid>
    </>
  )
}

const Card = chakra(GridItem, {
  baseStyle: {
    border: '1px solid',
    borderColor: 'gray.300',
    boxShadow: '0 0 78px -13px #b7b7b7',
    bg: '#fff',
    h: '200px',
    borderRadius: '10px',
    px: 5,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    'svg': {
      fontSize: 45,
      mb: 5,
    },
  },
})

export default Contacts
