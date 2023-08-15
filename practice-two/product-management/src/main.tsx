import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import customThemeConfig from '@themes/custom-theme'
import Fonts from '@themes/fonts'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={customThemeConfig}>
      <Fonts />
      <RouterProvider router={routes} />
    </ChakraProvider>
  </React.StrictMode>
)
