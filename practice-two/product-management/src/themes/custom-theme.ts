import { extendTheme } from '@chakra-ui/react'

const customThemeConfig = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'primary',
      },
    },
  },
  breakpoints: {
    xs: '320px',
    sm: '480px',
    md: '768px',
    lg: '992px',
    xl: '1280px',
  },
  colors: {
    primary: '#532EE7',
    secondary: '#ECB203',
    background: '#FFF',
    textPrimary: '#000',
    textSecondary: '#FFF',
    textTertiary: '#696969',
  },
  sizes: {
    xs: '250px',
  },
  fonts: {
    heading: `Oswald-Regular, sans-serif`,
    body: `OpenSans-Regular, sans-serif`,
  },
})

export default customThemeConfig
