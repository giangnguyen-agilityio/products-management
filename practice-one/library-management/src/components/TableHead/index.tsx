import React from 'react'
import {TableColumn} from '@types'
import {ROLE} from '@constants'
import {getItemInLocalStorage} from '@helpers'
import './table-head.css'

interface TableHeadProps {
  columns: TableColumn[]
}

const TableHead: React.FC<TableHeadProps> = props => {
  const {columns} = props

  const isAdmin: boolean = getItemInLocalStorage('memberRole') === ROLE.ADMIN

  return (
    <thead className="table-header">
      <tr className="table-header-row">
        {/* Render table header cells for each column */}
        {columns.map(column => (
          <th key={column.field} className="table-header-cell">
            {/* Display the header name of the column */}
            {column.headerName}
          </th>
        ))}
        {/* Render the "Action" header cell */}
        {isAdmin ? <th className="table-header-cell">Action</th> : null}
      </tr>
    </thead>
  )
}

export default TableHead
