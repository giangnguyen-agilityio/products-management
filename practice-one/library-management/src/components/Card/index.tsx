import React, {memo} from 'react'
import Typography from '@components/commons/Typography'
import Button from '@components/commons/Button'
import {HiOutlinePencilSquare} from 'react-icons/hi2'
import {BsTrash3} from 'react-icons/bs'
import {IBook} from '@types'
import './card.css'

interface CardProps {
  book: IBook | null
  onRent: (id: string) => void
  onEdit: (id: string) => void
  onDelete: (id: string) => void
  isAdmin: boolean
}

const Card: React.FC<CardProps> = props => {
  // Destructure the props
  const {book, onRent, onEdit, onDelete, isAdmin} = props

  const handleRentBook = () => {
    onRent(book!.id)
  }

  const handleEditBook = () => {
    onEdit(book!.id)
  }

  const handleDeleteBook = () => {
    onDelete(book!.id)
  }

  return (
    <li className="card-wrapper">
      {/* Display the card image */}
      <div className="card-image-wrapper">
        {book?.image && (
          <img src={book?.image} alt={book?.title} className="card-image" />
        )}
      </div>

      {/* Display the card info */}
      <div className="card-info">
        {/* Book title */}
        <Typography variant="h3" className="card-title">
          {book?.title || 'This is the book title'}
        </Typography>

        {/* Book details (author and price) */}
        <div className="card-detail">
          <Typography variant="p" className="card-author">
            {book?.author || 'This is the book author'}
          </Typography>
          <Typography variant="p" className="card-price">
            {book?.price ? book.price.toFixed(2) : 0}
          </Typography>
        </div>

        {/* Book quantity */}
        <div className="card-detail">
          <Typography variant="p" className="card-total-quantity">
            Available quantity:
          </Typography>
          <Typography variant="p" className="card-available-quantity">
            {book?.availableQuantity ? book.availableQuantity : 0}/
            <span className="card-total-quantity">
              {book?.totalQuantity ? book.totalQuantity : 0}
            </span>
          </Typography>
        </div>

        {/* Book description */}
        <Typography variant="p" className="card-description">
          {book?.description || 'This is the book description'}
        </Typography>

        {/* Card controls */}
        <div className="card-controls">
          {/* Rent button */}
          {!isAdmin && (
            <Button
              className="card-rent-btn"
              ariaLabel="Card rent button"
              onClick={handleRentBook}
            >
              Rent
            </Button>
          )}

          {/* Edit and Delete buttons */}
          {isAdmin && (
            <div className="card-button">
              <Button
                className="edit-btn"
                ariaLabel="Edit button"
                onClick={handleEditBook}
              >
                <HiOutlinePencilSquare size={25} />
              </Button>
              <Button
                className="delete-btn"
                ariaLabel="Delete button"
                onClick={handleDeleteBook}
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
