import React, { memo } from 'react'
import { type Book } from '../../types/book'
import Typography from '../Typography/index'
import Button from '../Button/index'
import { HiOutlinePencilSquare } from 'react-icons/hi2'
import { BsTrash3 } from 'react-icons/bs'
import PropTypes from 'prop-types'

import './card.css'

interface CardProps {
  book: Book
  onRent: (id: string) => void
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

const Card = (props: CardProps) => {
  const { book, onRent, onEdit, onDelete } = props

  return (
    <div className="card-wrapper">
      <div className="card-image-wrapper">
        <img src={book.image} alt={book.title} className="card-image" />
      </div>
      <div className="card-info">
        <Typography variant={'h3'} className={'card-title'}>
          {book.title}
        </Typography>
        <div className="card-detail">
          <Typography variant={'p'} className={'card-author'}>
            {book.author}
          </Typography>
          <Typography
            variant={'p'}
            className={'card-price'}
          >{`${book.price.toFixed(2)} $`}</Typography>
        </div>
        <Typography variant={'p'} className={'card-description'}>
          {book.description}
        </Typography>
        <div className="card-controls">
          <Button
            size={'medium'}
            variant="primary"
            className="card-rent-btn"
            ariaLabel="Card rent button"
            onClick={() => {
              onRent(book.bookId)
            }}
          >
            Rent
          </Button>
          <div className="card-button">
            <Button
              size={'medium'}
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
              size={'medium'}
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
    </div>
  )
}

Card.propTypes = {
  book: PropTypes.object.isRequired,
  onRent: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default memo(Card)
