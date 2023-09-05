// Libraries
import { Suspense, lazy } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { RouteObject } from 'react-router-dom'
import { SWRConfig } from 'swr'

// Constants
import { ENDPOINT, NOTIFICATIONS } from '@constants'

// Layouts
import MainLayout from '@layouts/MainLayout'

// Themes
import Fonts from '@themes/fonts.tsx'
import customThemeConfig from '@themes/custom-theme'

// Utils
import { swrFetcher } from '@utils/api'

// Importing the product providers
import ProductProvider from '@context/ProductContext/ProductProvider'

// Importing the pages
const HomePage = lazy(() => import('@pages/HomePage'))
const ProductDetailPage = lazy(() => import('@pages/ProductDetailPage'))
const EmptyProduct = lazy(() => import('@components/common/EmptyProduct'))
const Loading = lazy(() => import('@components/common/Loading'))

// Router configuration
export const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: (
      <ChakraProvider theme={customThemeConfig}>
        <Fonts />
        <SWRConfig
          value={{
            fetcher: swrFetcher,
          }}
        >
          <Suspense fallback={<Loading />}>
            <MainLayout />
          </Suspense>
        </SWRConfig>
      </ChakraProvider>
    ),
    errorElement: <EmptyProduct errorMessage={NOTIFICATIONS.API_ERROR} />,
    children: [
      {
        index: true,
        element: (
          <ProductProvider>
            <HomePage />,
          </ProductProvider>
        ),
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
