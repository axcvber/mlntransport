import { useQuery } from '@apollo/client'
import {
  Box,
  Button,
  chakra,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  useDisclosure,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import useAppContext from '../../hooks/useAppContext'
import useLocale from '../../hooks/useLocale'
import LocaleMenu from './LocaleMenu'

const NavMenu: React.FC<{ stickyNav: boolean }> = ({ stickyNav }) => {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { initialData } = useAppContext()
  const navLinks = initialData?.navbar?.data?.attributes?.navLinks
  console.log('render nav menu')

  const navLinkStyles = {
    position: 'relative',
    userSelect: 'none',
    fontWeight: 500,
    fontSize: 'lg',
    '&::before, &::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '2px',
      // borderRadius: '50%',
      background: stickyNav ? '#fff' : 'brand.500',
      margin: 'auto',
      top: '110%',
      left: 0,
      pointerEvents: 'none',
      opacity: 0,
      transformOrigin: '50% 0%',
      transform: 'translate3d(0, 3px, 0)',
      transitionProperty: 'transform, opacity',
      transitionDuration: '0.3s',
      transitionTimingFunction: 'cubic-bezier(0.2, 1, 0.8, 1)',
    },
    '&:hover, &.active': {
      color: stickyNav ? '#fff' : 'brand.500',
      '&::before, &::after': {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
        transitionTimingFunction: 'cubic-bezier(0.2, 0, 0.3, 1)',
      },
    },
  }

  return (
    <List
      columnGap={5}
      mx={4}
      py={4}
      display={'flex'}
      alignItems={'center'}
      flexWrap='wrap'
      // bg='red'
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
                  // outline={0}
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
