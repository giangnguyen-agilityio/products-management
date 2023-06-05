import React from 'react'

// Importing the Button component
import Button from '../Button'

// Importing the Icon from the React-icons library
import { HiOutlinePencilSquare } from 'react-icons/hi2'
import { BsCheckAll, BsTrash3 } from 'react-icons/bs'

// Importing the HireRequest and Table column types
import { type HireRequest, type TableColumn } from '../../types/hireRequest'

// Importing the helper functions to format the date
import { parseDateString } from '../../helpers/format-date'

// Importing the CSS file for styling
import './table-row.css'

// Define the props for the Table Row component
interface TableRowProps {
  data: HireRequest
  columns: TableColumn[]
  onToggleCompletion: (id: string) => void
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

const TableRow: React.FC<TableRowProps> = (props) => {
  const { data, columns, onToggleCompletion, onEdit, onDelete } = props
  // Convert and calculate date differences
  const toDate = parseDateString(data.toDate) // Parse toDate string
  const currentDate = new Date() // Get the current date
  // If the data status is 'completed', the button will be hidden.
  const hideButton = `${data.status === 'completed' ? 'hide' : ''}`
  // If the data status is 'completed' and the toDate is earlier than the currentDate, the table row will be highlighted.
  const highlightTableRow =
    data.status === 'completed' && toDate < currentDate ? 'highlight' : ''

  return (
    <tr className={`table-row ${highlightTableRow}`} key={data.id}>
      {/* Render table cells for each column */}
      {columns.map((column) => (
        <td key={column.field} className="table-row-cell">
          {/* Render the value from the data object based on the column field */}
          {data[column.field as keyof HireRequest]}
        </td>
      ))}
      {/* Render control buttons */}
      <td className="table-row-cell">
        <div className="table-controls">
          {/* Toggle completion button */}
          <Button
            size="medium"
            variant="primary"
            className={`toggle-completion-btn ${hideButton}`}
            ariaLabel="Toggle completion button"
            onClick={() => {
              onToggleCompletion(data.id)
            }}
          >
            <BsCheckAll size={20} />
          </Button>
          {/* Edit button */}
          <Button
            size="medium"
            variant="primary"
            className="edit-btn"
            ariaLabel="Edit button"
            onClick={() => {
              onEdit(data.id)
            }}
          >
            <HiOutlinePencilSquare size={20} />
          </Button>
          {/* Delete button */}
          <Button
            size="medium"
            variant="primary"
            className="delete-btn"
            ariaLabel="Delete button"
            onClick={() => {
              onDelete(data.id)
            }}
          >
            <BsTrash3 size={20} />
          </Button>
        </div>
      </td>
    </tr>
  )
}

export default TableRow
