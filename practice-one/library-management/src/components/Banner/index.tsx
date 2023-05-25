import React, { useState, useCallback, useMemo } from 'react'

// Importing the Icon from the React-icons library
import { FaArrowRight, FaArrowLeft, FaRegHandPointRight } from 'react-icons/fa'

// Importing the EmptyProductList component
import EmptyProductList from '../EmptyProductList/index'

// Importing the Pagination, Typography, and Button components
import Pagination from '../Pagination/index'
import Typography from '../Typography/index'
import Button from '../Button/index'

// Importing the Book type
import { type Book } from '../../types/book'

// Importing the CSS file for styling
import './banner.css'

// Define the props for the Banner component
interface BannerProps {
  bookList: Book[]
}

const Banner: React.FC<BannerProps> = (props) => {
  const { bookList } = props

  // State to keep track of the active book index
  const [activeIndex, setActiveIndex] = useState(0)

  // Callback function to handle the previous button click
  const handlePreviousBtnClick = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? bookList.length - 1 : prevIndex - 1
    )
  }, [bookList])

  // Callback function to handle the next button click
  const handleNextBtnClick = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === bookList.length - 1 ? 0 : prevIndex + 1
    )
  }, [bookList])

  // Callback function to handle the rent button click
  const handleRentBtnClick = useCallback((id: string) => {
    window.alert(`${id} was rented`)
  }, [])

  // Get the current book based on the active index
  const currentBook = useMemo(
    () => bookList[activeIndex],
    [bookList, activeIndex]
  )

  return (
    <section className="banner-wrapper">
      {bookList.length > 0 ? (
        <div className="banner">
          <div className="banner-info">
            {/* Display the book title */}
            <Typography variant="h2" className="book-title">
              {currentBook.title}
            </Typography>
            {/* Display the book author */}
            <Typography variant="h3" className="book-author">
              {currentBook.author}
            </Typography>
            {/* Display the book price */}
            <Typography variant="h3" className="book-price">
              {`${currentBook.price.toFixed(2)} $`}
            </Typography>
            {/* Display the book description */}
            <Typography variant="p" className="book-description">
              {currentBook.description}
            </Typography>
            {/* Rent button */}
            <Button
              size="large"
              variant="primary"
              className="rent-btn"
              ariaLabel="Rent button"
              onClick={() => {
                handleRentBtnClick(currentBook.bookId)
              }}
            >
              Rent this book
              <FaRegHandPointRight />
            </Button>
            {/* Pagination */}
            <Pagination list={bookList} activeIndex={activeIndex} />
          </div>
          <div className="banner-image-wrapper">
            {/* Display the book image */}
            <img
              className="banner-image"
              src={currentBook.image}
              alt={currentBook.alt}
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
              disabled={activeIndex === 0}
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
              disabled={activeIndex === bookList.length - 1}
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
