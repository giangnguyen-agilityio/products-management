import Header from './components/Header'
import Footer from './components/Footer'
import React from 'react'
import useDelay from './hooks/useDelay'
import HireRequestPage from './pages/HireRequestManagement/index'
import HireRequestsProvider from './store/hire-request/HireRequestsProvider'
import BookManagement from './pages/BookManagement/index'
import BookProvider from './store/books/BookProvider'
import LoadingPage from './pages/LoadingPage/index'

const App = (): JSX.Element => {
  const isLoading = useDelay(2000)

  return (
    <div className="wrapper">
      <div className="container">
        <Header isLogin={true} />
        <main className="main-content">
          {isLoading ? (
            <LoadingPage />
          ) : (
            <>
              <BookProvider>
                <BookManagement />
              </BookProvider>
              <HireRequestsProvider>
                <HireRequestPage />
              </HireRequestsProvider>
            </>
          )}
        </main>
        <Footer />
      </div>
    </div>
  )
}
export default App
