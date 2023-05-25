import React, { useMemo, useState } from 'react'

// Importing the EmptyProductList, Pagination, Typography, Card and Button components
import EmptyProductList from '../EmptyProductList/index'
import Pagination from '../Pagination/index'
import Typography from '../Typography'
import Card from '../Card'
import Button from '../Button'

// Importing the Icon from the React-icons library
import { AiOutlineFileAdd } from 'react-icons/ai'

// Importing the Book type
import { type Book } from '../../types/book'

// Importing the CSS file for styling
import './cardList.css'

// Define the props for the Card List component
interface CardListProps {
  bookList: Book[]
}

const CardList: React.FC<CardListProps> = (props) => {
  const { bookList } = props
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  // Function to handle renting a book
  const handleRentBook = (id: string): void => {
    window.alert(`${id} was rented`)
  }

  // Function to handle editing a book
  const handleEditBook = (id: string): void => {
    window.alert(`${id} was edited`)
  }

  // Function to handle deleting a book
  const handleDeleteBook = (id: string): void => {
    window.alert(`${id} was deleted`)
  }

  // Calculate the total number of pages
  const totalPages: number = useMemo(
    () => Math.ceil(bookList.length / itemsPerPage),
    [bookList.length]
  )

  // Function to get the current books and pagination range based on the current page
  const getBooksAndPaginationRange = (): {
    currentBooks: Book[]
    paginationRange: Book[]
  } => {
    const endPageIndex = currentPage * itemsPerPage
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage + 1
    const currentBooks = bookList.slice(0, endPageIndex)
    const paginationRange = bookList.slice(startIndex, endIndex)
    return { currentBooks, paginationRange }
  }

  // Get the current books and pagination range using useMemo
  const { currentBooks, paginationRange } = useMemo(
    () => getBooksAndPaginationRange(),
    [bookList, currentPage]
  )

  // Function to handle showing more books
  const handleShowMore = (): void => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  return (
    <>
      {bookList.length > 0 ? (
        <section className="product-list-section">
          {/* The product list title */}
          <Typography variant="h2" className="product-list-title">
            popular books
          </Typography>
          <div className="product-list-controls">
            {/* Add new book button */}
            <Button
              size="large"
              variant="primary"
              className="add-new-btn"
              ariaLabel="Add new book button"
              onClick={handleShowMore}
            >
              Add new book <AiOutlineFileAdd size={30} />
            </Button>
          </div>
          <ul className="product-list">
            {/* Render cards for current books */}
            {currentBooks.map((book) => (
              <Card
                key={`book-${book.bookId}`}
                book={book}
                onRent={handleRentBook}
                onEdit={handleEditBook}
                onDelete={handleDeleteBook}
              />
            ))}
          </ul>
          {currentPage < totalPages && (
            <>
              {/* Pagination */}
              <Pagination
                list={paginationRange}
                activeIndex={currentPage - 1}
              />
              <div className="product-list-controls">
                {/* Show more button */}
                <Button
                  size="large"
                  variant="primary"
                  className="show-more-btn"
                  ariaLabel="Show more button"
                  onClick={handleShowMore}
                >
                  View more products
                </Button>
              </div>
            </>
          )}
        </section>
      ) : (
        <EmptyProductList errorMessage="We couldn't find any books at the moment" />
      )}
    </>
  )
}

export default CardList
