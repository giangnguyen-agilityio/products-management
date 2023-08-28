// Libraries
import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

// Layouts
import Header from '@layouts/Header'
import Footer from '@layouts/Footer'

// Components
import { ErrorBoundary } from '@components/ErrorBoundary'
import ProductProvider from '@context/ProductContext/ProductProvider'

const MainLayout = (): JSX.Element => {
  return (
    <ErrorBoundary>
      <ProductProvider>
        <Box padding={{ base: '22px 10px', md: '22px 50px' }} overflow="hidden">
          <Header />
          <Outlet />
          <Footer />
        </Box>
      </ProductProvider>
    </ErrorBoundary>
  )
}

export default MainLayout
