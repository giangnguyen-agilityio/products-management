// Libraries
import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

// Layouts
import Header from '@layouts/Header'
import Footer from '@layouts/Footer'

// Components
import { ErrorBoundary } from '@components/ErrorBoundary'

const MainLayout = (): JSX.Element => {
  return (
    <ErrorBoundary>
      <Box padding={{ base: '22px 10px', md: '22px 50px' }} overflow="hidden">
        <Header />
        <Outlet />
        <Footer />
      </Box>
    </ErrorBoundary>
  )
}

export default MainLayout
