import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@layouts/Header'
import Footer from '@layouts/Footer'
import { Box } from '@chakra-ui/react'
import ProductProvider from '@stores/products/ProductProvider'

const MainLayout = (): JSX.Element => {
  return (
    <Box
      className="container"
      padding={{ base: '22px 10px', md: '22px 50px' }}
      overflowY={{ base: 'hidden', xs: 'scroll' }}
    >
      <Header />
      <ProductProvider>
        <Suspense>
          <Outlet />
        </Suspense>
      </ProductProvider>
      <Footer />
    </Box>
  )
}

export default MainLayout
