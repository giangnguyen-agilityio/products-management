import React, { memo } from 'react'

// Importing the Typography, and Button components
import Typography from '../Typography/index'
import Button from '../Button/index'

// Importing the Icons form the React-icons library
import { HiOutlinePencilSquare } from 'react-icons/hi2'
import { BsTrash3 } from 'react-icons/bs'

// Importing the Book type
import { type Book } from '../../types/book'

// Importing the CSS file for styling
import './card.css'

// Define the props for the Card component
interface CardProps {
  book: Book
  onRent: (id: string) => void
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

// Define the Card component
const Card: React.FC<CardProps> = (props) => {
  // Destructure the props
  const { book, onRent, onEdit, onDelete } = props

  return (
    <li className="card-wrapper">
      {/* Display the card image */}
      <div className="card-image-wrapper">
        <img src={book.image} alt={book.title} className="card-image" />
      </div>

      {/* Display the card info */}
      <div className="card-info">
        {/* Book title */}
        <Typography variant="h3" className="card-title">
          {book.title}
        </Typography>

        {/* Book details (author and price) */}
        <div className="card-detail">
          <Typography variant="p" className="card-author">
            {book.author}
          </Typography>
          <Typography variant="p" className="card-price">{`${book.price.toFixed(
            2
          )} $`}</Typography>
        </div>

        {/* Book description */}
        <Typography variant="p" className="card-description">
          {book.description}
        </Typography>

        {/* Card controls */}
        <div className="card-controls">
          {/* Rent button */}
          <Button
            size="medium"
            variant="primary"
            className="card-rent-btn"
            ariaLabel="Card rent button"
            onClick={() => {
              onRent(book.bookId)
            }}
          >
            Rent
          </Button>

          {/* Edit and Delete buttons */}
          <div className="card-button">
            <Button
              size="medium"
              variant="primary"
              className="edit-btn"
              ariaLabel="Edit button"
              onClick={() => {
                onEdit(book.bookId)
              }}
            >
              <HiOutlinePencilSquare size={25} />
            </Button>
            <Button
              size="medium"
              variant="primary"
              className="delete-btn"
              ariaLabel="Delete button"
              onClick={() => {
                onDelete(book.bookId)
              }}
            >
              <BsTrash3 size={25} />
            </Button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default memo(Card)
