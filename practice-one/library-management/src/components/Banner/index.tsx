import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { FaArrowRight, FaArrowLeft, FaRegHandPointRight } from 'react-icons/fa'
import Typography from '../Typography/index'
import Button from '../Button/index'
import axios from 'axios'
import './banner.css'
import { type Book } from '../../types/book'

const Banner: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [activeIndex, setActiveIndex] = useState<number>(0)

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

  const handlePreviousBtnClick = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? books.length - 1 : prevIndex - 1
    )
  }, [books.length])

  const handleNextBtnClick = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === books.length - 1 ? 0 : prevIndex + 1
    )
  }, [books.length])

  const handleRentBtnClick = useCallback((bookId: string) => {
    window.alert(`${bookId} was rented`)
  }, [])

  const currentBook = useMemo(() => books[activeIndex], [books, activeIndex])

  return (
    <div className="banner-wrapper">
      {books.length > 0 && (
        <>
          <div className="banner">
            <div className="banner-info">
              <Typography
                variant={'h2'}
                className={'book-title'}
                children={currentBook.title}
              />
              <Typography
                variant={'h3'}
                className={'book-author'}
                children={currentBook.author}
              />
              <Typography
                variant={'h3'}
                className={'book-price'}
                children={`${currentBook.price.toFixed(2)} $`}
              />
              <Typography
                variant={'p'}
                className={'book-description'}
                children={currentBook.description}
              />
              <Button
                size={'large'}
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
              <div className="pagination">
                {books.map((_, index) => (
                  <div
                    className={`pagination-item-border ${
                      index === activeIndex ? 'active' : ''
                    }`}
                  >
                    <div
                      key={index}
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
                size={'medium'}
                variant="primary"
                className="previous-btn"
                ariaLabel="Previous button"
                onClick={handlePreviousBtnClick}
                disabled={activeIndex === 0}
              >
                <FaArrowLeft />
              </Button>
              <Button
                size={'medium'}
                variant="primary"
                className="next-btn"
                ariaLabel="Next button"
                onClick={handleNextBtnClick}
                disabled={activeIndex === books.length - 1}
              >
                <FaArrowRight />
              </Button>
            </div>
          </div>
          <div className="introduction">
            <Typography
              variant={'p'}
              className={'introduction-text'}
              children={
                'Welcome to Giang Nguyen\'s Library Management Website! Discover an exceptional library experience designed to manage books, members, and hassle-free book rentals. Our user-friendly features ensure a seamless and enjoyable journey as you explore our vast collection.'
              }
            />
          </div>
        </>
      )}
    </div>
  )
}

export default Banner
