import { Box } from '@chakra-ui/react'
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
          bg: 'brand.500',
        },
        visibility: topDiv ? 'visible' : 'hidden',
        opacity: topDiv ? 1 : 0,
        position: 'fixed',
        bottom: 30,
        right: 3,
        display: 'flex',
        alightItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
      }}
    >
      <IoIosArrowUp />
    </Box>
  )
}

export default ScrollTop
