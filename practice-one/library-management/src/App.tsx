import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'
import React, { useContext } from 'react'
import ProductList from './components/ProductList'
import Context from './store/Context'
import Loading from './components/LoadingIndicator'
import Typography from './components/Typography'
import useDelay from './hooks/useDelay'

const App = (): JSX.Element => {
  const [state] = useContext(Context)
  const isLoading = useDelay(2000)
  const { book: books } = state

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
              <Banner bookList={books} />
              <ProductList bookList={books} />
            </>
          )}
        </main>
        <Footer />
      </div>
    </div>
  )
}
export default App
