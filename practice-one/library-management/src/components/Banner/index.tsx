import React, { useState, useCallback, useMemo } from 'react'
import { FaArrowRight, FaArrowLeft, FaRegHandPointRight } from 'react-icons/fa'
import EmptyProductList from '../EmptyProductList/index'
import Pagination from '../Pagination/index'
import Typography from '../Typography/index'
import Button from '../Button/index'
import './banner.css'
import { type Book } from '../../types/book'

interface BannerProps {
  bookList: Book[]
}

const Banner = ({ bookList }: BannerProps) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePreviousBtnClick = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? bookList.length - 1 : prevIndex - 1
    )
  }, [bookList])

  const handleNextBtnClick = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === bookList.length - 1 ? 0 : prevIndex + 1
    )
  }, [bookList])

  const handleRentBtnClick = useCallback((id: string) => {
    window.alert(`${id} was rented`)
  }, [])

  const currentBook = useMemo(
    () => bookList[activeIndex],
    [bookList, activeIndex]
  )

  return (
    <div className="banner-wrapper">
      {bookList.length > 0
        ? (
        <div className="banner">
          <div className="banner-info">
            <Typography variant="h2" className="book-title">
              {currentBook.title}
            </Typography>
            <Typography variant="h3" className="book-author">
              {currentBook.author}
            </Typography>
            <Typography variant="h3" className="book-price">
              {`${currentBook.price.toFixed(2)} $`}
            </Typography>
            <Typography variant="p" className="book-description">
              {currentBook.description}
            </Typography>
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
            <Pagination list={bookList} activeIndex={activeIndex} />
          </div>
          <div className="banner-image-wrapper">
            <img
              className="banner-image"
              src={currentBook.image}
              alt={currentBook.alt}
            />
          </div>
          <div className="banner-controls">
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
          )
        : (
        <EmptyProductList
          errorMessage={
            'There seems that an error occurred while displaying the information'
          }
        />
          )}

      <div className="introduction">
        <Typography variant="p" className="introduction-text">
          {
            'Welcome to Giang Nguyen\'s Library Management Website! Discover an exceptional library experience designed to manage books, members, and hassle-free book rentals. Our user-friendly features ensure a seamless and enjoyable journey as you explore our vast collection.'
          }
        </Typography>
      </div>
    </div>
  )
}

export default Banner
