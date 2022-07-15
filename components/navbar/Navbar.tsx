import { Box, Button, Container, IconButton, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Logo from '../Logo'
import { FiMenu } from 'react-icons/fi'
import useLocale from '../../hooks/useLocale'
import MobileMenu from './MobileMenu'
import NavMenu from './NavMenu'
import Progress from '../Progress'
import RSLink from '../RSLink.tsx'
import { RiContactsBook2Fill } from 'react-icons/ri'

interface INavbar {
  isRouteChanging: boolean
  loadingKey: number
}

const Navbar: React.FC<INavbar> = ({ isRouteChanging, loadingKey }) => {
  const t = useLocale()
  const [stickyNav, setStickyNav] = useState<boolean>(false)
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false)
  console.log('render navbar')

  const scrollHandler = () => {
    if (window.pageYOffset > 0) {
      setStickyNav(true)
    } else {
      setStickyNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <React.Fragment>
      <Progress isRouteChanging={isRouteChanging} key={loadingKey} stickyNav={stickyNav} />
      <Box
        as='header'
        sx={{
          position: 'fixed',
          transition: 'all 0.2s ease',
          zIndex: 999,
          top: 0,
          left: 0,
          w: '100%',
          h: stickyNav ? '70px' : '100px',
          bg: stickyNav ? 'brand.500' : 'transparent',
          color: stickyNav ? '#fff' : 'inherit',
          boxShadow: stickyNav ? 'lg' : 'none',
        }}
      >
        <Container maxW='container.xl' h='100%' display='flex' justifyContent={'space-between'} alignItems={'center'}>
          <Logo isSticky={stickyNav} />

          <NavMenu stickyNav={stickyNav} />

          <Stack direction={'row'}>
            <RSLink to='form'>
              <Button
                ml={{ base: 2, sm: 0 }}
                leftIcon={<RiContactsBook2Fill fontSize={22} />}
                bg={stickyNav ? '#fff' : 'brand.500'}
                colorScheme={stickyNav ? 'gray' : 'brand'}
                color={stickyNav ? 'gray.800' : '#fff'}
                _hover={{ bg: stickyNav ? 'gray.50' : 'brand.600' }}
              >
                {t.button.contactUs}
              </Button>
            </RSLink>

            <Box display={{ base: 'block', lg: 'none' }}>
              <IconButton
                variant={'outline'}
                aria-label='Open Menu'
                colorScheme={stickyNav ? 'gray' : 'brand'}
                borderColor={stickyNav ? '#fff' : 'brand.500'}
                onClick={() => setOpenMenu(true)}
                icon={<FiMenu fontSize={20} />}
              />
              <MobileMenu isOpen={isOpenMenu} onClose={() => setOpenMenu(false)} />
            </Box>
          </Stack>
        </Container>
      </Box>
    </React.Fragment>
  )
}

export default Navbar
