import React from 'react'
import {render} from '@testing-library/react'
import Table from '.'

const dataMock = [
  {
    id: '1',
    bookId: 'B01',
    memberId: 'M01',
    fromDate: '2023-07-20',
    toDate: '2023-07-27',
    status: 'completed',
  },
  {
    id: '2',
    bookId: 'B02',
    memberId: 'M02',
    fromDate: '2023-07-20',
    toDate: '2023-07-27',
    status: 'completed',
  },
]

const columnsMock = [
  {field: 'id', headerName: 'ID'},
  {field: 'bookId', headerName: 'BookId'},
  {field: 'memberId', headerName: 'MemberId'},
  {field: 'fromDate', headerName: 'From Date'},
  {field: 'toDate', headerName: 'To Date'},
  {field: 'status', headerName: 'Status'},
]

// Define mock functions
const mockToggleCompletion = jest.fn()
const mockOpenModalEdit = jest.fn()
const mockOpenModalDelete = jest.fn()

describe('Table component', () => {
  it('should render the table with the correct data', () => {
    const {container} = render(
      <Table
        data={dataMock}
        columns={columnsMock}
        onToggleCompletion={mockToggleCompletion}
        onOpenModalEdit={mockOpenModalEdit}
        onOpenModalDelete={mockOpenModalDelete}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render the table without the onToggleCompletion, onOpenModalEdit, and onOpenModalDelete handlers when they are not provided', () => {
    const {container} = render(<Table data={dataMock} columns={columnsMock} />)
    const tableControlsElement = container.querySelector('.table-controls')
    expect(tableControlsElement).toBeNull()
    expect(container).toMatchSnapshot()
  })
})
