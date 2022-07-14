import { Box, chakra, Heading, Text, useDimensions } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useRef } from 'react'
import ReactMarkdown from 'react-markdown'

const Markdown = ({ content }: any) => {
  const RMarkdown = chakra(ReactMarkdown)
  const elementRef = useRef<any>()
  const dimension = useDimensions(elementRef, true)
  return (
    <RMarkdown
      sx={{
        // px: 4,
        '*': {
          mb: 3,
          color: 'gray.600',
        },
        'h1,h2,h3,h4,h5,h6': {
          color: 'brand.300',
        },
      }}
      components={{
        // img: ({ node, ...props }) => {
        //   if (props.src) {
        //     return (
        //       <Box ref={elementRef} sx={{ width: '100%' }} mb={0}>
        //         <Image
        //           sizes={dimension ? `${Math.round(dimension.borderBox.width)}px` : '100vw'}
        //           priority
        //           layout='responsive'
        //           objectFit='contain'
        //           width={1600}
        //           height={1000}
        //           // placeholder='blur'
        //           // blurDataURL={props.src}
        //           src={props.src}
        //           alt={props.alt}
        //         />
        //       </Box>
        //     )
        //   } else {
        //     return null
        //   }
        // },
        p: ({ node, children }) => {
          if (node.children[0].tagName === 'img') {
            const image: any = node.children[0]
            console.log('image', image)

            const metastring = image.properties.alt
            const alt = metastring?.replace(/ *\{[^)]*\} */g, '')
            const metaWidth = metastring.match(/{([^}]+)x/)
            const metaHeight = metastring.match(/x([^}]+)}/)
            const width = metaWidth ? metaWidth[1] : '768'
            const height = metaHeight ? metaHeight[1] : '432'

            return (
              <Box sx={{ width: '100%' }} mb={0}>
                <Image
                  placeholder='blur'
                  blurDataURL={image.properties.src}
                  src={image.properties.src}
                  width={1500}
                  height={800}
                  objectFit='contain'
                  layout='responsive'
                  alt={alt}
                  priority
                  sizes={'100vw'}
                  // sizes={dimension ? `${Math.round(dimension.borderBox.width)}px` : '100vw'}
                />
              </Box>
            )
          }
          // Return default child if it's not an image
          return <p>{children}</p>
        },
        // p: ({ node, ...props }) => <Text lineHeight={1.8}>{props.children}</Text>,
        a: ({ node, ...props }) => (
          <StyledLink {...props} target='_blank' rel='noreferrer'>
            {props.children}
          </StyledLink>
        ),
        ul: ({ node, ...props }) => <StyledList>{props.children}</StyledList>,
        ol: ({ node, ...props }) => <StyledOl>{props.children}</StyledOl>,
        strong: ({ node, ...props }) => (
          <Text as='strong' mb={0} color='gray.800' fontWeight={600} display='inline-block'>
            {props.children}
          </Text>
        ),
        h1: ({ node, ...props }) => (
          <Heading as='h1' size='4xl'>
            {props.children}
          </Heading>
        ),
        h2: ({ node, ...props }) => (
          <Heading as='h2' size='3xl'>
            {props.children}
          </Heading>
        ),
        h3: ({ node, ...props }) => (
          <Heading as='h2' size='2xl'>
            {props.children}
          </Heading>
        ),
        h4: ({ node, ...props }) => (
          <Heading as='h2' size='xl'>
            {props.children}
          </Heading>
        ),
        h5: ({ node, ...props }) => (
          <Heading as='h3' size='lg'>
            {props.children}
          </Heading>
        ),
        h6: ({ node, ...props }) => (
          <Heading as='h4' size='md'>
            {props.children}
          </Heading>
        ),
        blockquote: ({ node, ...props }) => <StyledBlockquote>{props.children}</StyledBlockquote>,
      }}
    >
      {content}
    </RMarkdown>
  )
}

const StyledBlockquote = chakra('blockquote', {
  baseStyle: {
    borderLeft: '3px solid',
    borderColor: 'brand.300',
    my: 2,
    padding: '10px 10px 10px 20px',
    bg: 'gray.50',
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
    boxShadow: 3,
    lineHeight: 1.5,
    letterSpacing: 0.3,
    fontFamily: `'Open Sans', sans-serif`,
    'p': {
      mb: 0,
    },
  },
})

const StyledLink = chakra('a', {
  baseStyle: {
    color: 'brand.300 !important',
    position: 'relative',
    fontWeight: 500,

    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-3px',
      left: 0,
      right: 0,
      width: '100%',
      height: '2px',
      transform: 'scaleX(0)',
      transition: 'transform 0.3s',
      background: 'brand.300',
    },
    '&:hover': {
      '&:after': {
        transform: 'scaleX(1)',
      },
    },
  },
})

const StyledOl = chakra('ol', {
  baseStyle: {
    counterReset: 'item',

    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    // paddingLeft: '10px',
    'li': {
      counterIncrement: 'item',
      fontWeight: 500,
      my: 1.5,
      color: 'gray.700',
      '&:last-child': {
        marginBottom: 0,
      },
      '&:before': {
        boxShadow: 'lg',
        marginRight: '10px',
        content: 'counter(item)',
        bg: 'brand.300',
        borderRadius: '100%',
        color: 'white',
        fontSize: 20,
        fontWeight: 500,
        w: '40px',
        h: '40px',
        textAlign: 'center',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  },
})

const StyledList = chakra('ul', {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    // paddingLeft: '10px',
    'li': {
      position: 'relative',
      color: 'gray.700',
      fontWeight: 500,
      paddingLeft: '20px',
      my: 1.5,
      '&:last-child': {
        marginBottom: 0,
      },
      '&:before': {
        content: '""',
        width: '8px',
        height: '8px',
        bg: 'brand.300',
        fontWeight: 'bold',
        display: 'flex',
        // borderRadius: '50px',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: 0,
      },
    },
  },
})

export default Markdown
