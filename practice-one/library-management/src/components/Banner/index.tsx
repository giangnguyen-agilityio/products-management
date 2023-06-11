import React, {useState, useCallback, useMemo, useContext} from 'react'

// Importing the Button, EmptyProductList, Pagination and Typography components
import Button from '@components/Button'
import EmptyProductList from '@components/EmptyProductList'
import Pagination from '@components/Pagination'
import Typography from '@components/Typography'

// Importing the Icon from the React-icons library
import {FaArrowRight, FaArrowLeft, FaRegHandPointRight} from 'react-icons/fa'

// Importing the Book context
import BookContext from '@stores/books/BookContext'

// Importing the Book type
import {IBook} from '@types'

// Importing the helper functions
import {getItemInLocalStorage} from '@helpers'

// Importing the CSS file for styling
import './banner.css'

// Define the props for Banner component
interface BannerProps {
  onRent: (id: string) => void
}

const Banner: React.FC<BannerProps> = props => {
  // Destructure props to obtain onRent, toastMessage and toastStatus
  const {onRent} = props

  // Retrieve book state from the BookContext
  const {bookState} = useContext(BookContext)

  // Obtain the array of books from the book state
  const bookList: IBook[] = bookState.books

  // State hook to keep track of the active book index
  const [activeIndex, setActiveIndex] = useState<number>(0)

  // Check if the current user is an admin
  const isAdmin: boolean = getItemInLocalStorage('memberRole') === 'admin'

  // Callback function to handle the previous button click
  const handlePreviousBtnClick = useCallback(() => {
    // Check if bookList exists
    if (bookList) {
      setActiveIndex(prevIndex =>
        prevIndex === 0 ? bookList.length - 1 : prevIndex - 1
      )
    }
  }, [bookList])

  // Callback function to handle the next button click
  const handleNextBtnClick = useCallback(() => {
    // Check if bookList exists
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
