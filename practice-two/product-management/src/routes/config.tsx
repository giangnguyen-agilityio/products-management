import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { ENDPOINT, NOTIFICATIONS } from '@constants'
import EmptyProduct from '@components/common/EmptyProduct'

// Importing the pages
const HomePage = lazy(() => import('@pages/HomePage'))
const MainLayout = lazy(() => import('@layouts/MainLayout'))
const ProductDetailPage = lazy(() => import('@pages/ProductDetailPage'))

// Router configuration
export const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
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
            element: <ProductDetailPage />,
            errorElement: (
              <EmptyProduct errorMessage={NOTIFICATIONS.API_ERROR} />
            ),
          },
        ],
      },
    ],
  },
]
