import React, {lazy} from 'react'
import {type RouteObject} from 'react-router-dom'

// Importing the layouts
import MainLayout from '@layouts/MainLayout'

// Importing the providers
import HireRequestsProvider from '@stores/hire-request/HireRequestsProvider'
import MembersProvider from '@stores/members/MemberProvider'

// Importing the pages
const BookManagement = lazy(() => import('@pages/BookManagement'))
const HireRequestPage = lazy(() => import('@pages/HireRequestManagement'))
const HireRequestSent = lazy(() => import('@pages/HireRequestSentManagement'))
const EmptyProductList = lazy(() => import('@components/EmptyProductList'))
const LoginPage = lazy(() => import('@pages/LoginPage'))

// Router configuration
export const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      // Home page
      {
        index: true,
        element: <BookManagement />,
      },
      // Login page
      {
        path: 'login',
        element: (
          <MembersProvider>
            <LoginPage />
          </MembersProvider>
        ),
      },
      // Books page
      {
        path: 'books',
        element: <BookManagement />,
      },
      // Members page
      {
        path: 'members',
        element: (
          <MembersProvider>
            <EmptyProductList errorMessage="This page is currently being updated" />
          </MembersProvider>
        ),
      },
      // Hire Requests page
      {
        path: 'hire_requests',
        element: (
          <HireRequestsProvider>
            <HireRequestPage />
          </HireRequestsProvider>
        ),
      },
      // Hired book request of the user
      {
        path: 'my_hire_request',
        element: (
          <HireRequestsProvider>
            <HireRequestSent />
          </HireRequestsProvider>
        ),
      },
    ],
  },
]
