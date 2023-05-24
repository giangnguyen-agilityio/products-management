import { type Book } from '../../types/book'
import './pagination.css'

interface PaginationProps {
  list: Book[]
  activeIndex: number
}

const Pagination = (props: PaginationProps) => {
  const { list, activeIndex } = props
  return (
    <div className="pagination">
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
