import { Suspense, lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { ENDPOINT, NOTIFICATIONS } from '@constants'
import EmptyProduct from '@components/common/EmptyProduct'
import Loading from '@components/common/Loading'
import ProductProvider from '@stores/products/ProductProvider'
import MainLayout from '@layouts/MainLayout'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '@themes/fonts.tsx'
import customThemeConfig from '@themes/custom-theme'

// Importing the pages
const HomePage = lazy(() => import('@pages/HomePage'))
const ProductDetailPage = lazy(() => import('@pages/ProductDetailPage'))

// Router configuration
export const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: (
      <ChakraProvider theme={customThemeConfig}>
        <Fonts />
        <Suspense fallback={<Loading />}>
          <ProductProvider>
            <MainLayout />
          </ProductProvider>
        </Suspense>
      </ChakraProvider>
    ),
    errorElement: <EmptyProduct errorMessage={NOTIFICATIONS.API_ERROR} />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ENDPOINT.PRODUCTS,
        children: [
          {
            path: ':id',
            element: (
              <Suspense fallback={<Loading />}>
                <ProductDetailPage />
              </Suspense>
            ),
            errorElement: (
              <EmptyProduct errorMessage={NOTIFICATIONS.API_ERROR} />
            ),
          },
        ],
      },
    ],
  },
]
