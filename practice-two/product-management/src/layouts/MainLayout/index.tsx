import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@layouts/Header'
import Footer from '@layouts/Footer'
import { Box } from '@chakra-ui/react'
import ProductProvider from '@stores/products/ProductProvider'
import Loading from '@components/common/Loading'
import { ErrorBoundary } from '@components/ErrorBoundary'
import Hero from '@components/common/Hero'
import { heroSectionContent } from '@constants'
import Contact from '@components/Contact'

const MainLayout = (): JSX.Element => {
  return (
    <ErrorBoundary>
      <Box padding={{ base: '22px 10px', md: '22px 50px' }} overflow="hidden">
        <Header />
        <Hero
          imageUrl={heroSectionContent.imageUrl}
          buttonHref={heroSectionContent.link}
          title={heroSectionContent.title}
          description={heroSectionContent.description}
        />
        <Suspense fallback={<Loading />}>
          <ProductProvider>
            <Outlet />
          </ProductProvider>
        </Suspense>
        <Contact />
        <Footer />
      </Box>
    </ErrorBoundary>
  )
}

export default MainLayout
