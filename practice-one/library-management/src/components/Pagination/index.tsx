import React from 'react'

// Importing the Book type from '../../types/book'
import { type Book } from '../../types/book'

// Importing the CSS file for styling
import './pagination.css'

// Define the props for the Pagination component
interface PaginationProps {
  list: Book[] // An array of books
  activeIndex: number // The index of the active item
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const { list, activeIndex } = props

  return (
    <div className="pagination">
      {/* Render each pagination item */}
      {list.map((_, index) => (
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
  )
}

export default Pagination
