import { lazy } from 'react'
import { Outlet, RouteObject } from 'react-router-dom'
import { ENDPOINT } from '@constants'

// Importing the pages
const HomePage = lazy(() => import('@pages/HomePage'))
const MainLayout = lazy(() => import('@layouts/MainLayout'))
const ProductDetailPage = lazy(() => import('@pages/ProductDetailPage'))

// Router configuration
export const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ENDPOINT.PRODUCTS,
        element: <Outlet />,
        children: [
          {
            path: ':id',
            element: <ProductDetailPage />,
          },
        ],
      },
    ],
  },
]
