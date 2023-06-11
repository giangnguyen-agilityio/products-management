import React, {memo} from 'react'

// Importing the Button component
import Button from '@components/Button'

// Importing the Icon from the React-icons library
import {HiOutlinePencilSquare} from 'react-icons/hi2'
import {BsCheckAll, BsTrash3} from 'react-icons/bs'

// Importing the HireRequest and Table column types
import {IHireRequest, TableColumn} from '@types'

// Importing the helper functions to format the date
import {parseDateString} from '@helpers/formatDate'

// Importing the CSS file for styling
import './table-row.css'

// Define the props for the Table Row component
interface TableRowProps {
  data: IHireRequest
  columns: TableColumn[]
  onToggleCompletion?: (id: string, memberId: string, bookId: string) => void
  onOpenModalEdit?: (id: string) => void
  onOpenModalDelete?: (id: string) => void
}

const TableRow: React.FC<TableRowProps> = props => {
  const {
    data,
    columns,
    onToggleCompletion,
    onOpenModalEdit,
    onOpenModalDelete,
  } = props
  const showControls =
    onToggleCompletion || onOpenModalEdit || onOpenModalDelete

  // Convert and calculate date differences
  const toDate: Date = parseDateString(data.toDate) // Parse toDate string
  const currentDate: Date = new Date() // Get the current date
  // If the data status is 'completed', the button will be hidden.
  const hideButton: string = `${data.status === 'completed' ? 'hide' : ''}`
  // If the data status is 'completed' and the toDate is earlier than the currentDate, the table row will be highlighted.
  const highlightTableRow: string =
    data.status === 'completed' && toDate < currentDate ? 'highlight' : ''
  // Check if any of the control button props are passed in

  return (
    <tr className={`table-row ${highlightTableRow}`} key={data.id}>
      {/* Render table cells for each column */}
      {columns.map(column => (
        <td key={column.field} className="table-row-cell">
          {/* Render the value from the data object based on the column field */}
          {data[column.field as keyof IHireRequest]}
        </td>
      ))}
      {/* Render control buttons if required props are present */}
      {showControls && (
        <td className="table-row-cell">
          <div className="table-controls">
            {/* Toggle completion button */}
            {onToggleCompletion && (
              <Button
                size="medium"
                variant="primary"
                className={`toggle-completion-btn ${hideButton}`}
                ariaLabel="Toggle completion button"
                onClick={() => {
                  onToggleCompletion(data.id, data.memberId, data.bookId)
                }}
              >
                <BsCheckAll size={20} />
              </Button>
            )}
            {/* Edit button */}
            {onOpenModalEdit && (
              <Button
                size="medium"
                variant="primary"
                className="edit-btn"
                ariaLabel="Edit button"
                onClick={() => {
                  onOpenModalEdit(data.id)
                }}
              >
                <HiOutlinePencilSquare size={20} />
              </Button>
            )}
            {/* Delete button */}
            {onOpenModalDelete && (
              <Button
                size="medium"
                variant="primary"
                className="delete-btn"
                ariaLabel="Delete button"
                onClick={() => {
                  onOpenModalDelete(data.id)
                }}
              >
                <BsTrash3 size={20} />
              </Button>
            )}
          </div>
        </td>
      )}
    </tr>
  )
}

export default memo(TableRow)
