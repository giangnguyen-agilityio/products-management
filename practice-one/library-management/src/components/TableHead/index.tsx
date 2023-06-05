import React from 'react'

// Importing the Table column type
import { type TableColumn } from '../../types/hireRequest'

// Importing the CSS file for styling
import './table-head.css'

// Define the props for the Table Head component
interface TableHeadProps {
  columns: TableColumn[]
}

const TableHead: React.FC<TableHeadProps> = (props) => {
  const { columns } = props
  return (
    <thead className="table-header">
      <tr className="table-header-row">
        {/* Render table header cells for each column */}
        {columns.map((column) => (
          <th key={column.field} className="table-header-cell">
            {/* Display the header name of the column */}
            {column.headerName}
          </th>
        ))}
        {/* Render the "Action" header cell */}
        <th className="table-header-cell">Action</th>
      </tr>
    </thead>
  )
}

export default TableHead
