import Header from './components/Header'
import Banner from './components/Banner'
import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { type Book } from './types/book'
import CardList from './components/CardList'

const App = () => {
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
        <Banner bookList={books} />
        <CardList bookList={books} />
      </div>
    </div>
  )
}

export default App
