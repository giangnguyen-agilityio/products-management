import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import customThemeConfig from '@themes/custom-theme'
import { navigationLinks } from '@constants'
import Navigation from '@components/common/Navigation'
import Fonts from '@themes/fonts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={customThemeConfig}>
      <Fonts />
      <Navigation links={navigationLinks} />
    </ChakraProvider>
  </React.StrictMode>
)
