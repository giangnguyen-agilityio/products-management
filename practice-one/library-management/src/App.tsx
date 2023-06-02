import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'
import React from 'react'
import ProductList from './components/ProductList'
import Loading from './components/LoadingIndicator'
import Typography from './components/Typography'
import useDelay from './hooks/useDelay'

const App = (): JSX.Element => {
  const isLoading = useDelay(2000)
  return (
    <div className="wrapper">
      <div className="container">
        <Header isLogin={true} />
        <main className="main-content">
          {isLoading ? (
            <div className="page-loading">
              <Loading isLoading={true} />
              <Typography variant={'h2'}>The website is loading ...</Typography>
            </div>
          ) : (
            <>
              <Banner />
              <ProductList />
            </>
          )}
        </main>
        <Footer />
      </div>
    </div>
  )
}
export default App
