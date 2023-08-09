import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import customThemeConfig from '@themes/custom-theme'

import Header from '@layouts/Header'
import Fonts from '@themes/fonts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={customThemeConfig}>
      <Fonts />
      <Header />
    </ChakraProvider>
  </React.StrictMode>
)
