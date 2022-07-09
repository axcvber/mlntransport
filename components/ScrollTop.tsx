import { Box, IconButton } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import { animateScroll as scroll } from 'react-scroll'

const ScrollTop = () => {
  const [topDiv, setTopDiv] = React.useState(false)

  const handleToTop = () => {
    scroll.scrollToTop({
      duration: 500,
    })
  }

  const scrollHandler = () => {
    if (window.pageYOffset > 1000) {
      setTopDiv(true)
    } else {
      setTopDiv(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])
  return (
    <Box
      onClick={handleToTop}
      sx={{
        visibility: topDiv ? 'visible' : 'hidden',
        opacity: topDiv ? 1 : 0,
        transition: 'all 0.3s ease-in-out',
        position: 'fixed',
        bottom: 30,
        right: 3,
        display: 'flex',
        alightItems: 'center',
        justifyContent: 'center',
        boxShadow: 'lg',
        zIndex: 999,
        border: '2px solid #fff',
        borderRadius: 'lg',
        'svg': {
          display: 'flex',
          height: '100%',
          fontSize: 25,
        },
      }}
    >
      <IconButton colorScheme='brand' aria-label='Scroll Top' icon={<IoIosArrowUp />} />
    </Box>
  )
}

export default ScrollTop
