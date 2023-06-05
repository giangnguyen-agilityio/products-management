import React from 'react'

// Importing the TableHead and TableRow components
import TableHead from '../TableHead/index'
import TableRow from '../TableRow/index'

// Importing the HireRequest and Table column types
import { type HireRequest, type TableColumn } from '../../types/hireRequest'

// Importing the CSS file for styling
import './table.css'

// Define the props for the Table component
interface TableProps {
  data: HireRequest[]
  columns: TableColumn[]
  onToggleCompletion: (id: string) => void
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

const Table: React.FC<TableProps> = (props) => {
  const { data, columns, onToggleCompletion, onEdit, onDelete } = props
  return (
    // Render the hire request table
    <table className="hire-request-table">
      {/* Render the table header */}
      <TableHead columns={columns} />
      <tbody>
        {/* Render table rows for each data item */}
        {data.map((item) => (
          <TableRow
            key={item.id}
            data={item}
            columns={columns}
            onToggleCompletion={onToggleCompletion}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  )
}

export default Table
