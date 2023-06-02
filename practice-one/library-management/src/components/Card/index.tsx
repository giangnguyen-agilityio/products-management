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

  // Render the book image if available
  const renderBookImage =
    book.image != null ? (
      <img src={book.image} alt={book.title} className="card-image" />
    ) : null

  // Render the book title
  const renderBookTitle =
    book.title !== '' ? book.title : 'This is the book title'

  // Render the book author
  const renderBookAuthor =
    book.author !== '' ? book.author : 'The author of the book'

  // Render the book price
  const renderBookPrice = book.price !== undefined ? book.price.toFixed(2) : 0

  // Render the book description
  const renderBookDescription =
    book.description !== '' ? book.description : 'This is the description'

  // Render the available and total quantity of the book
  const renderBookAvailableQuantity =
    book.availableQuantity !== undefined ? book.availableQuantity : 0
  const renderBookTotalQuantity =
    book.totalQuantity !== undefined ? book.totalQuantity : 0

  // Render the Card component
  return (
    <li className="card-wrapper">
      {/* Display the card image */}
      <div className="card-image-wrapper">{renderBookImage}</div>

      {/* Display the card info */}
      <div className="card-info">
        {/* Book title */}
        <Typography variant="h3" className="card-title">
          {renderBookTitle}
        </Typography>

        {/* Book details (author and price) */}
        <div className="card-detail">
          <Typography variant="p" className="card-author">
            {renderBookAuthor}
          </Typography>
          <Typography variant="p" className="card-price">
            {renderBookPrice}
          </Typography>
        </div>

        {/* Book quantity */}
        <div className="card-detail">
          <Typography variant="p" className="card-total-quantity">
            Available quantity:
          </Typography>
          <Typography variant="p" className="card-available-quantity">
            {renderBookAvailableQuantity}/
            <span className="card-total-quantity">
              {renderBookTotalQuantity}
            </span>
          </Typography>
        </div>

        {/* Book description */}
        <Typography variant="p" className="card-description">
          {renderBookDescription}
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
              onRent(book.id)
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
                onEdit(book.id)
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
                onDelete(book.id)
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
