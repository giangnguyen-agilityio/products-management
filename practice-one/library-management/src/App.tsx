import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'
import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { type Book } from './types/book'
import ProductList from './components/ProductList'

const App = (): JSX.Element => {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get<Book[]>('http://localhost:3000/books')
      setBooks(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }, [])

  return (
    <div className="wrapper">
      <div className="container">
        <Header isLogin={true} />
        <main className="main-content">
          <Banner bookList={books} />
          <ProductList bookList={books} />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
