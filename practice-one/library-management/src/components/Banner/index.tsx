import React, {useState, useCallback, useContext} from 'react'
import Button from '@components/commons/Button'
import EmptyProductList from '@components/commons/EmptyProductList'
import Pagination from '@components/commons/Pagination'
import Typography from '@components/commons/Typography'
import {FaArrowRight, FaArrowLeft, FaRegHandPointRight} from 'react-icons/fa'
import BookContext from '@stores/books/BookContext'
import {ROLE} from '@constants'
import {IBook} from '@types'
import {getItemInLocalStorage} from '@helpers'
import './banner.css'

interface BannerProps {
  onRent: (id: string) => void
}

const Banner: React.FC<BannerProps> = props => {
  const {onRent} = props

  // Retrieve book state from the BookContext
  const {bookState} = useContext(BookContext)
  const bookList: IBook[] = bookState.books
  const isAdmin: boolean = getItemInLocalStorage('memberRole') === ROLE.ADMIN

  // State hook to keep track of the active book index
  const [activeIndex, setActiveIndex] = useState<number>(0)

  // Callback function to handle the previous button click
  const handlePreviousBtnClick = useCallback(() => {
    if (bookList) {
      setActiveIndex(prevIndex =>
        prevIndex === 0 ? bookList.length - 1 : prevIndex - 1
      )
    }
  }, [bookList])

  // Callback function to handle the next button click
  const handleNextBtnClick = useCallback(() => {
    if (bookList) {
      setActiveIndex(prevIndex =>
        prevIndex === bookList.length - 1 ? 0 : prevIndex + 1
      )
    }
  }, [bookList])

  // Callback function to handle the rent button click
  const handleRentBook = useCallback(
    (id: string) => {
      onRent(id)
    },
    [onRent]
  )

  // Get the current book based on the active index
  const currentBook: IBook = bookList[activeIndex]

  // Render the data of Book
  const renderBookTitle: string = currentBook?.title || 'This is the book title'
  const renderBookAuthor: string =
    currentBook?.author || 'The author of the book'
  const renderBookPrice: string = currentBook?.price.toFixed(2) || '0.00'
  const renderBookDescription: string =
    currentBook?.description || 'This is the description'

  return (
    <section className="banner-wrapper">
      {bookList.length > 0 ? (
        <div className="banner">
          <div className="banner-info">
            {/* Display the book title */}
            <Typography variant="h2" className="book-title">
              {renderBookTitle}
            </Typography>
            {/* Display the book author */}
            <Typography variant="h3" className="book-author">
              {renderBookAuthor}
            </Typography>
            {/* Display the book price */}
            <Typography variant="h3" className="book-price">
              {renderBookPrice} $
            </Typography>
            {/* Display the book description */}
            <Typography variant="p" className="book-description">
              {renderBookDescription}
            </Typography>
            {/* Rent button */}
            {!isAdmin && (
              <Button
                size="large"
                variant="primary"
                className="rent-btn"
                ariaLabel="Rent button"
                onClick={() => {
                  handleRentBook(currentBook?.id)
                }}
              >
                Rent this book
                <FaRegHandPointRight />
              </Button>
            )}
            {/* Pagination */}
            <Pagination length={bookList.length} activeIndex={activeIndex} />
          </div>
          <div className="banner-image-wrapper">
            {/* Display the book image */}
            <img
              className="banner-image"
              src={currentBook?.image ?? undefined}
              alt={currentBook?.alt}
            />
          </div>
          <div className="banner-controls">
            {/* Previous button */}
            <Button
              size="medium"
              variant="primary"
              className="previous-btn"
              ariaLabel="Previous button"
              onClick={handlePreviousBtnClick}
            >
              <FaArrowLeft />
            </Button>
            {/* Next button */}
            <Button
              size="medium"
              variant="primary"
              className="next-btn"
              ariaLabel="Next button"
              onClick={handleNextBtnClick}
            >
              <FaArrowRight />
            </Button>
          </div>
        </div>
      ) : (
        <EmptyProductList
          errorMessage={
            'There seems that an error occurred while displaying the information'
          }
        />
      )}
      <article className="introduction">
        {/* Introduction text */}
        <Typography variant="p" className="introduction-text">
          {
            'Welcome to Giang Nguyen\'s Library Management Website! Discover an exceptional library experience designed to manage books, members, and hassle-free book rentals. Our user-friendly features ensure a seamless and enjoyable journey as you explore our vast collection.'
          }
        </Typography>
      </article>
    </section>
  )
}

export default Banner
