import React, {Suspense, useEffect, useState} from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
import Header from '@layouts/Header'
import LoadingPage from '@pages/LoadingPage'
import Footer from '@layouts/Footer'
import BookProvider from '@stores/books/BookProvider'
import {getItemInLocalStorage, clearLocalStorage} from '@helpers'

const MainLayout = (): JSX.Element => {
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
            <BookProvider>
              <Suspense fallback={<LoadingPage />}>
                <Outlet />
              </Suspense>
            </BookProvider>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default MainLayout
