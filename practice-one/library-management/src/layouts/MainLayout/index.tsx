import React, {Suspense, useEffect, useRef, useState} from 'react'
import {Outlet, useNavigate} from 'react-router-dom'

// Importing the layouts
import Header from '@layouts/Header'
import LoadingPage from '@pages/LoadingPage'
import Footer from '@layouts/Footer'

// Importing the Book provider
import BookProvider from '@stores/books/BookProvider'

// Importing the custom hooks
import useDelay from '@hooks/useDelay'

// Importing the helper functions
import {getItemInLocalStorage, clearLocalStorage} from '@helpers'

const MainLayout = (): JSX.Element => {
  const isLoading = useDelay(2000)
  const [isLogin, setIsLogin] = useState(false)
  const memberId: string = getItemInLocalStorage('memberId')
  const navigate = useNavigate()

  useEffect(() => {
    if (memberId) {
      setIsLogin(!!memberId)
      return
    }
    navigate('/login')
  }, [memberId])

  const handleSignIn = (): void => {
    navigate('/login')
  }

  const handleLogout = (): void => {
    clearLocalStorage()
    navigate('/login')
    setIsLogin(false)
  }
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Header
            isLogin={isLogin}
            onSignIn={handleSignIn}
            onLogout={handleLogout}
          />
          <main className="main-content">
            {isLoading ? (
              <LoadingPage />
            ) : (
              <BookProvider>
                <Suspense>
                  <Outlet />
                </Suspense>
              </BookProvider>
            )}
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default MainLayout
