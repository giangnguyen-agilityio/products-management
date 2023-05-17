import Header from './components/Header'
import Banner from './components/Banner'
import Card from './components/Card'
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { type Book } from './types/book'

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
        <Banner />
        <section className="card-section">
          {books.map((book) => (
            <>
              <Card
                key={`book-${book.bookId}`}
                book={book}
                onRent={() => {
                  /* Handle rent action */
                }}
                onEdit={() => {
                  /* Handle edit action */
                }}
                onDelete={() => {
                  /* Handle delete action */
                }}
              />
            </>
          ))}
        </section>
      </div>
    </div>
  )
}

export default App
