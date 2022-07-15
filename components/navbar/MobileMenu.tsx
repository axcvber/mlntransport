import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  HStack,
  IconButton,
  List,
  ListItem,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FiX } from 'react-icons/fi'
import useAppContext from '../../hooks/useAppContext'
import dynamic from 'next/dynamic'

const LocaleMenu = dynamic(() => import('./LocaleMenu'))

interface IMobileMenu {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu: React.FC<IMobileMenu> = ({ isOpen, onClose }) => {
  const router = useRouter()
  const { initialData } = useAppContext()
  const navLinks = initialData?.navbar?.data?.attributes?.navLinks

  return (
    <Drawer isOpen={isOpen} placement='right' isFullHeight onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg='brand.500' color='#fff'>
        <HStack justifyContent={'space-between'} px={6} py={4}>
          <IconButton
            borderColor={'#fff'}
            aria-label='Close menu'
            icon={<FiX fontSize={22} />}
            variant='outline'
            onClick={onClose}
          />
          <LocaleMenu withBorder />
        </HStack>
        <DrawerBody>
          <List spacing={3} fontSize='lg'>
            {navLinks &&
              navLinks.map((item) => {
                if (item?.__typename === 'ComponentMenuLink') {
                  return (
                    <ListItem key={item.id} onClick={onClose}>
                      <Link href={item?.page?.data?.attributes?.slug || '/'} passHref>
                        <Box
                          sx={{
                            display: 'block',
                            py: 1,
                            position: 'relative',
                          }}
                          as='a'
                          _before={{
                            content: '""',
                            display: router.asPath === item?.page?.data?.attributes?.slug ? 'block' : 'none',
                            width: '2px',
                            h: '20px',
                            bg: '#fff',
                            position: 'absolute',
                            top: '50%',
                            left: '-10px',
                            transform: 'translateY(-50%)',
                          }}
                        >
                          {item.title}
                        </Box>
                      </Link>
                    </ListItem>
                  )
                } else if (item?.__typename === 'ComponentMenuDropdown') {
                  return (
                    <Accordion key={item.id} allowMultiple>
                      <AccordionItem border={'none'}>
                        <AccordionButton p={0} bg='transparent !important'>
                          <Box flex='1' textAlign='left' fontSize='lg'>
                            {item.label}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pt={4} pb={0} px={0}>
                          <List spacing={3}>
                            {item.Link.map((item) => (
                              <ListItem key={item?.id}>
                                <Link href={item?.page?.data?.attributes?.slug || '/'} passHref>
                                  <a style={{ width: '100%', height: '100%', display: 'block' }}>{item?.title}</a>
                                </Link>
                              </ListItem>
                            ))}
                          </List>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  )
                }
              })}
          </List>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default MobileMenu
