import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { StyleFunctionProps } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  } as ThemeConfig,
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Ubuntu', sans-serif`,
  },
  colors: {
    brand: {
      50: '#F8E4DE',
      100: '#F7CBBE',
      200: '#f5a389',
      300: '#f49679',
      400: '#f28968',
      500: '#f17c57',
      600: '#d9704e',
      700: '#c16346',
      800: '#a9573d',
      900: '#914a34',
    },
    gray: {
      50: '#ececec',
      100: '#EAEAEA',
      200: '#d3d3d3',
      300: '#bbbbbb',
      400: '#a4a4a4',
      500: '#8c8c8c',
      600: '#757575',
      700: '#5e5e5e',
      800: '#464646',
      900: '#2f2f2f',
    },
  },
  components: {},
  styles: {
    global: (props: StyleFunctionProps) => ({
      '::-webkit-scrollbar': {
        width: '14px',
      },
      '::-webkit-scrollbar-track': {
        backgroundColor: '#fff',
      },
      '::-webkit-scrollbar-thumb': {
        backgroundColor: 'brand.400',
        borderRadius: '8px',
        border: '3px solid #fff',
      },
      '::-webkit-scrollbar-thumb:hover': {
        backgroundColor: 'brand.500',
      },
      'ul, ol': {
        listStyle: 'none',
      },
    }),
  },
})

export default theme
