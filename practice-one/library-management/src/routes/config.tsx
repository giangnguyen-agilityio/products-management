import React from 'react'
import {type RouteObject} from 'react-router-dom'

// Importing the layouts
import MainLayout from '@layouts/MainLayout'

// Importing the pages
import LoginPage from '@pages/LoginPage'
import BookManagement from '@pages/BookManagement'
import EmptyProductList from '@components/EmptyProductList'
import HireRequestPage from '@pages/HireRequestManagement'

// Importing the providers
import HireRequestsProvider from '@stores/hire-request/HireRequestsProvider'
import MembersProvider from '@stores/members/MemberProvider'
import HireRequestSent from '@pages/HireRequestSentManagement'

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
