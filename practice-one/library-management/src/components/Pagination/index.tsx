import React from 'react'

// Importing the CSS file for styling
import './pagination.css'

// Define the props for the Pagination component
interface PaginationProps {
  length: number // The length of the list
  activeIndex: number // The index of the active item
}

const Pagination: React.FC<PaginationProps> = props => {
  const {length, activeIndex} = props

  // Generate an array with the desired length
  const paginationItems = Array.from({length}, (_, index) => index)

  return (
    <div className="pagination">
      {/* Render each pagination item */}
      {paginationItems.map(index => (
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
