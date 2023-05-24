import React, { useMemo, useState } from 'react'
import EmptyProductList from '../EmptyProductList/index'
import Pagination from '../Pagination/index'
import Typography from '../Typography'
import Card from '../Card'
import Button from '../Button'
import { AiOutlineFileAdd } from 'react-icons/ai'
import { type Book } from '../../types/book'
import './cardList.css'

interface CardListProps {
  bookList: Book[]
}

const CardList = (props: CardListProps) => {
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

  const totalPages = useMemo(
    () => Math.ceil(bookList.length / itemsPerPage),
    [bookList.length]
  )

  const getBooksAndPaginationRange = () => {
    const endPageIndex = currentPage * itemsPerPage
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage + 1
    const currentBooks = bookList.slice(0, endPageIndex)
    const paginationRange = bookList.slice(startIndex, endIndex)
    return { currentBooks, paginationRange }
  }

  const { currentBooks, paginationRange } = useMemo(
    () => getBooksAndPaginationRange(),
    [bookList, currentPage]
  )

  const handleShowMore = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  return (
    <>
      {bookList.length > 0
        ? (
        <>
          <Typography variant="h2" className="card-section-title">
            popular books
          </Typography>
          <div className="card-section-controls">
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
          {currentPage < totalPages && (
            <>
              <Pagination
                list={paginationRange}
                activeIndex={currentPage - 1}
              />
              <div className="card-section-controls">
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
        </>
          )
        : (
        <EmptyProductList errorMessage="We couldn't find any books at the moment" />
          )}
    </>
  )
}

export default CardList
