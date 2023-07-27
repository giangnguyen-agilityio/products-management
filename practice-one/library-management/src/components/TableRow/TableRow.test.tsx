import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import TableRow from '.'

jest.mock('@helpers', () => ({
  parseDateString: () => mockCurrentDate,
}))

// Mock the current date for testing
const mockCurrentDate = new Date('2023-07-26')

const dataMock = {
  id: '1',
  bookId: 'B01',
  memberId: 'M01',
  fromDate: '2023-07-20',
  toDate: '2023-07-27',
  status: 'completed',
}

const columnsMock = [
  {field: 'id', headerName: 'ID'},
  {field: 'bookId', headerName: 'BookId'},
  {field: 'memberId', headerName: 'MemberId'},
  {field: 'fromDate', headerName: 'From Date'},
  {field: 'toDate', headerName: 'To Date'},
  {field: 'status', headerName: 'Status'},
]

const tableBodyElement = document.createElement('tbody')

describe('TableRow component', () => {
  beforeEach(() => {
    jest.useFakeTimers() // Enable the use of fake timers
  })

  afterEach(() => {
    jest.useRealTimers() // Restore the use of real timers
  })

  it('should render the TableRow component with the correct data', () => {
    const {container} = render(
      <TableRow data={dataMock} columns={columnsMock} />,
      {
        container: document.body.appendChild(tableBodyElement),
      }
    )
    expect(container).toMatchSnapshot()
  })

  it('should render the appropriate buttons when the corresponding callbacks are provided', () => {
    const {container, getByLabelText} = render(
      <TableRow
        data={dataMock}
        columns={columnsMock}
        onToggleCompletion={() => {}}
        onOpenModalEdit={() => {}}
        onOpenModalDelete={() => {}}
      />,
      {
        container: document.body.appendChild(tableBodyElement),
      }
    )

    expect(getByLabelText('Toggle completion button')).toBeInTheDocument()
    expect(getByLabelText('Edit button')).toBeInTheDocument()
    expect(getByLabelText('Delete button')).toBeInTheDocument()
    expect(container.querySelector('.table-controls')).toMatchSnapshot()
  })

  it('should calls onToggleCompletion when Toggle completion button is clicked', () => {
    const mockOnToggleCompletion = jest.fn()

    const {getByLabelText} = render(
      <TableRow
        data={dataMock}
        columns={columnsMock}
        onToggleCompletion={mockOnToggleCompletion}
      />,
      {
        container: document.body.appendChild(tableBodyElement),
      }
    )

    fireEvent.click(getByLabelText('Toggle completion button'))

    expect(mockOnToggleCompletion).toHaveBeenCalledWith(
      dataMock.id,
      dataMock.memberId,
      dataMock.bookId
    )
  })

  it('should calls onOpenModalEdit when Edit button is clicked', () => {
    const mockOnOpenModalEdit = jest.fn()

    const {getByLabelText} = render(
      <TableRow
        data={dataMock}
        columns={columnsMock}
        onOpenModalEdit={mockOnOpenModalEdit}
      />,
      {
        container: document.body.appendChild(tableBodyElement),
      }
    )

    fireEvent.click(getByLabelText('Edit button'))
    expect(mockOnOpenModalEdit).toHaveBeenCalledWith(dataMock.id)
  })

  it('should calls onOpenModalDelete when Delete button is clicked', () => {
    const mockOnOpenModalDelete = jest.fn()

    const {getByLabelText} = render(
      <TableRow
        data={dataMock}
        columns={columnsMock}
        onOpenModalDelete={mockOnOpenModalDelete}
      />,
      {
        container: document.body.appendChild(tableBodyElement),
      }
    )

    fireEvent.click(getByLabelText('Delete button'))
    expect(mockOnOpenModalDelete).toHaveBeenCalledWith(dataMock.id)
  })

  it('should not render the appropriate buttons when the corresponding callbacks are not provided', () => {
    const {queryByLabelText} = render(
      <TableRow data={dataMock} columns={columnsMock} />,
      {
        container: document.body.appendChild(tableBodyElement),
      }
    )
    expect(queryByLabelText('Toggle completion button')).not.toBeInTheDocument()
    expect(queryByLabelText('Edit button')).not.toBeInTheDocument()
    expect(queryByLabelText('Delete button')).not.toBeInTheDocument()
  })

  it('should apply the "hide" class for the data that has status "completed"', () => {
    const {container} = render(
      <TableRow
        data={dataMock}
        columns={columnsMock}
        onToggleCompletion={() => {}}
        onOpenModalEdit={() => {}}
        onOpenModalDelete={() => {}}
      />,
      {
        container: document.body.appendChild(tableBodyElement),
      }
    )

    const toggleCompletionButton = container.querySelector(
      '.toggle-completion-btn'
    )

    expect(toggleCompletionButton).toHaveClass('hide')
    expect(container).toMatchSnapshot()
  })

  it('should not apply the "hide" class for the data that has status "incomplete"', () => {
    const {container} = render(
      <TableRow
        data={{...dataMock, status: 'incomplete'}}
        columns={columnsMock}
        onToggleCompletion={() => {}}
        onOpenModalEdit={() => {}}
        onOpenModalDelete={() => {}}
      />,
      {
        container: document.body.appendChild(tableBodyElement),
      }
    )

    const toggleCompletionButton = container.querySelector(
      '.toggle-completion-btn'
    )

    expect(toggleCompletionButton).not.toHaveClass('hide')
    expect(container).toMatchSnapshot()
  })

  it('should apply the "highlight" class for the table row that has data containing the status "completed" and the toDate earlier than the current date', () => {
    const {container} = render(
      <TableRow data={dataMock} columns={columnsMock} />,
      {
        container: document.body.appendChild(tableBodyElement),
      }
    )

    // Check if the rendered table row has the "highlight" class
    const tableRowElement = container.querySelector('.table-row')
    expect(tableRowElement).toHaveClass('highlight')

    expect(container).toMatchSnapshot()
  })
})
