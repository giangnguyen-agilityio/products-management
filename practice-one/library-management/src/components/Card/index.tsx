import React, { memo } from 'react'
import { type Book } from '../../types/book'
import Typography from '../Typography/index'
import Button from '../Button/index'
import { HiOutlinePencilSquare } from 'react-icons/hi2'
import { BsTrash3 } from 'react-icons/bs'
import './card.css'

interface CardProps {
  book: Book
  onRent: () => void
  onEdit: () => void
  onDelete: () => void
}

const Card: React.FC<CardProps> = memo(({ book, onRent, onEdit, onDelete }) => {
  const { title, author, price, description, image } = book

  return (
    <div className="card-wrapper">
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-info">
        <Typography variant={'h3'} className={'card-title'} children={title} />
        <div className="card-detail">
          <Typography
            variant={'p'}
            className={'card-author'}
            children={author}
          />
          <Typography
            variant={'p'}
            className={'card-price'}
            children={`${price.toFixed(2)} $`}
          />
        </div>
        <Typography
          variant={'p'}
          className={'card-description'}
          children={description}
        />
        <div className="card-controls">
          <Button
            size={'medium'}
            variant="primary"
            className="card-rent-btn"
            ariaLabel="Card rent button"
            onClick={onRent}
          >
            Rent
          </Button>
          <div className="card-button">
            <Button
              size={'medium'}
              variant="primary"
              className="edit-btn"
              ariaLabel="Edit button"
              onClick={onRent}
            >
              <HiOutlinePencilSquare size={25} />
            </Button>
            <Button
              size={'medium'}
              variant="primary"
              className="delete-btn"
              ariaLabel="Edit button"
              onClick={onRent}
            >
              <BsTrash3 size={25} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Card
