import React from 'react'
import { useNProgress } from '@tanem/react-nprogress'
import { Box } from '@chakra-ui/react'

interface IProgress {
  isRouteChanging: boolean
  stickyNav: boolean
}

const Progress: React.FC<IProgress> = ({ isRouteChanging, stickyNav }) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating: isRouteChanging,
  })
  return (
    <Box
      sx={{
        opacity: isFinished ? 0 : 1,
        pointerevents: 'none',
        transition: `opacity ${animationDuration}ms linear`,
      }}
    >
      <Box
        sx={{
          background: stickyNav ? '#fff' : 'brand.500',
          height: '3px',
          left: 0,
          marginLeft: `${(-1 + progress) * 100}%`,
          position: 'fixed',
          top: 0,
          transition: `margin-left ${animationDuration}ms linear`,
          width: '100%',
          zIndex: 1031,
        }}
      >
        <Box
          sx={{
            boxShadow: stickyNav ? '0 0 10px #fff, 0 0 5px #fff' : '0 0 10px #F17C57, 0 0 5px #F17C57',
            display: 'block',
            height: '100%',
            opacity: 1,
            position: 'absolute',
            right: 0,
            transform: 'rotate(3deg) translate(0px, -4px)',
            width: '100px',
          }}
        />
      </Box>
    </Box>
  )
}

export default Progress
