import React, {memo} from 'react'
import Button from '@components/commons/Button'
import {HiOutlinePencilSquare} from 'react-icons/hi2'
import {BsCheckAll, BsTrash3} from 'react-icons/bs'
import {IHireRequest, TableColumn} from '@types'
import {parseDateString} from '@helpers/formatDate'
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
  const toDate: Date | string = parseDateString(data.toDate)
  const currentDate: Date = new Date()
  // If the data status is 'completed', the button will be hidden.
  const hideButton: string = `${data.status === 'completed' ? 'hide' : ''}`
  // If the data status is 'completed' and the toDate is earlier than the currentDate, the table row will be highlighted.
  const highlightTableRow: string =
    data.status === 'completed' && toDate < currentDate ? 'highlight' : ''

  // The function handles toggling the completion status of a task
  const handleToggleCompletion = () => {
    if (onToggleCompletion) {
      onToggleCompletion(data.id, data.memberId, data.bookId)
    }
  }

  // The function handles opening the Modal Edit
  const handleOpenModalEdit = () => {
    if (onOpenModalEdit) {
      onOpenModalEdit(data.id)
    }
  }

  // The function handles opening the Modal Delete
  const handleOpenModalDelete = () => {
    if (onOpenModalDelete) {
      onOpenModalDelete(data.id)
    }
  }

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
                onClick={handleToggleCompletion}
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
                onClick={handleOpenModalEdit}
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
                onClick={handleOpenModalDelete}
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
