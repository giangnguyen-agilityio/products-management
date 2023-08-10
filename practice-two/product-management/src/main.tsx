import React from 'react'
import ReactDOM from 'react-dom/client'
import { Box, ChakraProvider } from '@chakra-ui/react'
import customThemeConfig from '@themes/custom-theme'
import Header from '@layouts/Header'
import Fonts from '@themes/fonts'
import Footer from '@layouts/Footer'
import Hero from '@components/common/Hero'
import { heroSectionContent } from '@constants'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={customThemeConfig}>
      <Fonts />
      <Box
        className="container"
        padding={{ base: '22px 10px', md: '22px 50px' }}
      >
        <Header />
        <Hero
          imageUrl={heroSectionContent.imageUrl}
          buttonHref={heroSectionContent.link}
          title={heroSectionContent.title}
          description={heroSectionContent.description}
        />
        <Footer />
      </Box>
    </ChakraProvider>
  </React.StrictMode>
)
