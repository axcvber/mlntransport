import { Box, Button, Container, Hide, IconButton, Show, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Logo from '../Logo'
import { FiMenu } from 'react-icons/fi'
import useLocale from '../../hooks/useLocale'
import MobileMenu from './MobileMenu'
import NavMenu from './NavMenu'
import { Link } from 'react-scroll'
import Progress from '../Progress'

interface INavbar {
  isRouteChanging: boolean
  loadingKey: number
}

const Navbar: React.FC<INavbar> = ({ isRouteChanging, loadingKey }) => {
  const t = useLocale()
  const [stickyNav, setStickyNav] = useState<boolean>(false)
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false)

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
    <>
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
          bg: stickyNav ? 'brand.500' : 'transparent',
          color: stickyNav ? '#fff' : 'inherit',
          boxShadow: stickyNav ? 'lg' : 'none',
        }}
      >
        <Container maxW='container.xl' h='100%' display='flex' justifyContent={'space-between'} alignItems={'center'}>
          <Logo isSticky={stickyNav} />

          <Hide below='md'>
            <NavMenu stickyNav={stickyNav} />
          </Hide>

          <Stack direction={'row'}>
            <Link to='form' smooth={true} ignoreCancelEvents duration={600} offset={-70}>
              <Button
                bg={stickyNav ? '#fff' : 'brand.500'}
                colorScheme={stickyNav ? 'gray' : 'brand'}
                color={stickyNav ? 'gray.800' : '#fff'}
                _hover={{ bg: stickyNav ? 'gray.50' : 'brand.600' }}
              >
                {t.button.contactUs}
              </Button>
            </Link>

            <Show below='md'>
              <IconButton
                variant={'outline'}
                aria-label='Open Menu'
                colorScheme={stickyNav ? 'gray' : 'brand'}
                borderColor={stickyNav ? '#fff' : 'brand.500'}
                onClick={() => setOpenMenu(true)}
                icon={<FiMenu fontSize={20} />}
              />
              <MobileMenu isOpen={isOpenMenu} onClose={() => setOpenMenu(false)} />
            </Show>
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default Navbar
