import React, {memo} from 'react'
import TableHead from '@components/TableHead'
import TableRow from '@components/TableRow'
import {IHireRequest, TableColumn} from '@types'
import './table.css'

// Define the props for the Table component
interface TableProps {
  data: IHireRequest[]
  columns: TableColumn[]
  onToggleCompletion?: (id: string, memberId: string, bookId: string) => void
  onOpenModalEdit?: (id: string) => void
  onOpenModalDelete?: (id: string) => void
}

const Table: React.FC<TableProps> = props => {
  const {
    data,
    columns,
    onToggleCompletion,
    onOpenModalEdit,
    onOpenModalDelete,
  } = props
  return (
    // Render the hire request table
    <table className="hire-request-table">
      {/* Render the table header */}
      <TableHead columns={columns} />
      <tbody>
        {/* Render table rows for each data item */}
        {data.map(item => (
          <TableRow
            key={item.id}
            data={item}
            columns={columns}
            onToggleCompletion={onToggleCompletion}
            onOpenModalEdit={onOpenModalEdit}
            onOpenModalDelete={onOpenModalDelete}
          />
        ))}
      </tbody>
    </table>
  )
}

export default memo(Table)
