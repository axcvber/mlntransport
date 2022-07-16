import { Box, Button, List, ListItem, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import useAppContext from '../../hooks/useAppContext'
import LocaleMenu from './LocaleMenu'

const NavMenu: React.FC<{ stickyNav: boolean }> = ({ stickyNav }) => {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { initialData } = useAppContext()
  const navLinks = initialData?.navbar?.data?.attributes?.navLinks

  const navLinkStyles = {
    position: 'relative',
    userSelect: 'none',
    fontWeight: 500,
    fontSize: 'lg',
    '&::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '2px',
      bottom: '-5px',
      left: 0,
      background: stickyNav ? '#fff' : 'brand.500',
      pointerEvents: 'none',
      transform: 'scaleX(0)',
      transformOrigin: 'bottom right',
      transition: 'transform 0.3s',
    },
    '&:hover, &.active': {
      color: stickyNav ? '#fff' : 'brand.500',
      '&::after': {
        transformOrigin: 'bottom left',
        transform: 'scaleX(1)',
      },
    },
  }

  return (
    <List
      columnGap={5}
      mx={4}
      py={4}
      display={{ base: 'none', lg: 'flex' }}
      alignItems={'center'}
      flexWrap='wrap'
      justifyContent={'center'}
    >
      {navLinks &&
        navLinks.map((item) => {
          if (item?.__typename === 'ComponentMenuLink') {
            return (
              <ListItem key={item.id}>
                <Link href={item?.page?.data?.attributes?.slug || '/'} passHref>
                  <Box
                    as='a'
                    sx={navLinkStyles}
                    className={router.asPath === item?.page?.data?.attributes?.slug ? 'active' : ''}
                  >
                    {item.title}
                  </Box>
                </Link>
              </ListItem>
            )
          } else if (item?.__typename === 'ComponentMenuDropdown') {
            return (
              <Menu key={item.id} gutter={0} isOpen={isOpen} closeOnSelect>
                <MenuButton
                  transition={'none'}
                  lineHeight={1}
                  p={0}
                  as={Button}
                  variant='ghost'
                  _hover={{
                    bg: 'transparent',
                  }}
                  _active={{
                    bg: 'transparent',
                  }}
                  rightIcon={<FiChevronDown />}
                  _focus={{
                    boxShadow: 'none',
                  }}
                  aria-label='Dropdown'
                  onMouseEnter={onOpen}
                  onMouseLeave={onClose}
                >
                  {item.label}
                </MenuButton>
                <MenuList color={'gray.700'} as='ul' minW='100px' w='auto' onMouseEnter={onOpen} onMouseLeave={onClose}>
                  {item.Link.map((item) => (
                    <MenuItem
                      as='li'
                      key={item?.id}
                      onClick={onClose}
                      color={router.asPath === item?.page?.data?.attributes?.slug ? '#fff' : 'inherit'}
                      bg={router.asPath === item?.page?.data?.attributes?.slug ? 'brand.500' : 'inherit'}
                      _hover={{
                        bg: router.asPath === item?.page?.data?.attributes?.slug ? 'brand.500' : 'rgba(0,0,0,0.1)',
                      }}
                    >
                      <Link href={item?.page?.data?.attributes?.slug || '/'} passHref>
                        <a style={{ width: '100%', height: '100%', display: 'block' }}>{item?.title}</a>
                      </Link>
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            )
          }
        })}
      <LocaleMenu withBorder={stickyNav} />
    </List>
  )
}

export default NavMenu
