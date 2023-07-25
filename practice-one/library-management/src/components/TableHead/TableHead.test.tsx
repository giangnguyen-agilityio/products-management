import React from 'react'
import {render} from '@testing-library/react'
import * as helpers from '@helpers'
import TableHead from '.'

jest.mock('@helpers', () => ({
  getItemInLocalStorage: jest.fn(),
}))

describe('TableHead component', () => {
  const columns = [
    {field: 'column1', headerName: 'Column 1'},
    {field: 'column2', headerName: 'Column 2'},
    {field: 'column3', headerName: 'Column 3'},
    {field: 'column4', headerName: 'Column 4'},
  ]

  const tableElement = document.createElement('table')

  it('should renders table header cells correctly', () => {
    const {container, getByText} = render(<TableHead columns={columns} />, {
      container: document.body.appendChild(tableElement),
    })

    columns.forEach(column => {
      const columnHeader = getByText(column.headerName)
      expect(columnHeader).toBeInTheDocument()
    })

    expect(container).toMatchSnapshot()
  })

  it('should renders the "Action" header cell when user is an Admin', () => {
    const getItemInLocalStorageMock = jest.spyOn(
      helpers,
      'getItemInLocalStorage'
    )
    getItemInLocalStorageMock.mockReturnValue('admin')

    // Render the component with the desired props
    const {container, getByText} = render(<TableHead columns={columns} />, {
      container: document.body.appendChild(tableElement),
    })

    // Assert that the "Action" header cell is rendered
    expect(getByText('Action')).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('should does not render the "Action" header cell when user is not an Admin', () => {
    const getItemInLocalStorageMock = jest.spyOn(
      helpers,
      'getItemInLocalStorage'
    )
    getItemInLocalStorageMock.mockReturnValue(null)

    const {container, queryByText} = render(<TableHead columns={columns} />, {
      container: document.body.appendChild(tableElement),
    })
    expect(queryByText('Action')).toBeNull()

    expect(container).toMatchSnapshot()
  })
})
