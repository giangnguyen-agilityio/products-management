import React, {memo} from 'react'

// Importing the Typography, and Button components
import Typography from '@components/Typography'
import Button from '@components/Button'

// Importing the Icons form the React-icons library
import {HiOutlinePencilSquare} from 'react-icons/hi2'
import {BsTrash3} from 'react-icons/bs'

// Importing the Book type
import {IBook} from '@types'

// Importing the CSS file for styling
import './card.css'

// Define the props for the Card component
interface CardProps {
  book: IBook
  onRent: (id: string) => void
  onEdit: (id: string) => void
  onDelete: (id: string) => void
  isAdmin: boolean
}

// Define the Card component
const Card: React.FC<CardProps> = props => {
  // Destructure the props
  const {book, onRent, onEdit, onDelete, isAdmin} = props

  // Use default values if book properties are empty or null
  const {
    image,
    title = 'This is the book title',
    author = 'The author of the book',
    price = 0,
    description = 'This is the description',
    availableQuantity = 0,
    totalQuantity = 0,
  } = book

  // Render the Card component
  return (
    <li className="card-wrapper">
      {/* Display the card image */}
      <div className="card-image-wrapper">
        {image && <img src={image} alt={title} className="card-image" />}
      </div>

      {/* Display the card info */}
      <div className="card-info">
        {/* Book title */}
        <Typography variant="h3" className="card-title">
          {title}
        </Typography>

        {/* Book details (author and price) */}
        <div className="card-detail">
          <Typography variant="p" className="card-author">
            {author}
          </Typography>
          <Typography variant="p" className="card-price">
            {price.toFixed(2)}
          </Typography>
        </div>

        {/* Book quantity */}
        <div className="card-detail">
          <Typography variant="p" className="card-total-quantity">
            Available quantity:
          </Typography>
          <Typography variant="p" className="card-available-quantity">
            {availableQuantity}/
            <span className="card-total-quantity">{totalQuantity}</span>
          </Typography>
        </div>

        {/* Book description */}
        <Typography variant="p" className="card-description">
          {description}
        </Typography>

        {/* Card controls */}
        <div className="card-controls">
          {/* Rent button */}
          {!isAdmin && (
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
          )}

          {/* Edit and Delete buttons */}
          {isAdmin && (
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
          )}
        </div>
      </div>
    </li>
  )
}

export default memo(Card)
