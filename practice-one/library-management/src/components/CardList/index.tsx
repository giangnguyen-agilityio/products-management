import React, { useState } from 'react'
import Typography from '../Typography'
import Card from '../Card'
import Button from '../Button'
import { AiOutlineFileAdd } from 'react-icons/ai'
import { type Book } from '../../types/book'
import './cardList.css'

interface CardListProps {
  bookList: Book[]
}

export default function CardList (props: CardListProps) {
  const { bookList } = props
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  const handleRentBook = (id: string) => {
    window.alert(`${id} was rented`)
  }

  const handleEditBook = (id: string) => {
    window.alert(`${id} was edited`)
  }

  const handleDeleteBook = (id: string) => {
    window.alert(`${id} was deleted`)
  }

  const getCurrentBooks = () => {
    const lastIndex = currentPage * itemsPerPage
    const firstIndex = lastIndex - itemsPerPage
    return bookList.slice(0, lastIndex)
  }

  const currentBooks = getCurrentBooks()

  const handleShowMore = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  return (
    <>
      <Typography variant="h2" className="card-section-title">
        popular books
      </Typography>
      <div className="card-section-controls">
        <Button
          size={'large'}
          variant="primary"
          className="add-new-btn"
          ariaLabel="Add new book button"
          onClick={handleShowMore}
        >
          Add new book <AiOutlineFileAdd size={30} />
        </Button>
      </div>
      <section className="card-section">
        {currentBooks.map((book) => (
          <Card
            key={`book-${book.bookId}`}
            book={book}
            onRent={handleRentBook}
            onEdit={handleEditBook}
            onDelete={handleDeleteBook}
          />
        ))}
      </section>
      <div className="card-section-controls">
        {bookList.length > currentPage * itemsPerPage && (
          <Button
            size={'large'}
            variant="primary"
            className="show-more-btn"
            ariaLabel="Show more button"
            onClick={handleShowMore}
          >
            View more products
          </Button>
        )}
      </div>
    </>
  )
}
