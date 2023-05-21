import React, { useState, useCallback, useMemo } from 'react'
import { FaArrowRight, FaArrowLeft, FaRegHandPointRight } from 'react-icons/fa'
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
      {bookList.length > 0 && (
        <div className="banner">
          <div className="banner-info">
            <Typography
              variant="h2"
              className="book-title"
              children={currentBook.title}
            />
            <Typography
              variant="h3"
              className="book-author"
              children={currentBook.author}
            />
            <Typography
              variant="h3"
              className="book-price"
              children={`${currentBook.price.toFixed(2)} $`}
            />
            <Typography
              variant="p"
              className="book-description"
              children={currentBook.description}
            />
            <Button
              size="large"
              variant="primary"
              className="rent-btn"
              ariaLabel="Rent button"
              onClick={() => { handleRentBtnClick(currentBook.bookId) }}
            >
              Rent this book
              <FaRegHandPointRight />
            </Button>
            <div className="pagination">
              {bookList.map((_, index) => (
                <div
                  key={`pagination-item-${index}`}
                  className={`pagination-item-border ${
                    index === activeIndex ? 'active' : ''
                  }`}
                >
                  <div
                    className={`pagination-item ${
                      index === activeIndex ? 'active' : ''
                    }`}
                  />
                </div>
              ))}
            </div>
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
      )}
      <div className="introduction">
        <Typography
          variant="p"
          className="introduction-text"
          children={'Welcome to Giang Nguyen\'s Library Management Website! Discover an exceptional library experience designed to manage books, members, and hassle-free book rentals. Our user-friendly features ensure a seamless and enjoyable journey as you explore our vast collection.'}
        />
      </div>
    </div>
  )
}

export default Banner
