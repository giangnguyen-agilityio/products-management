import { render, fireEvent, waitFor } from '@testing-library/react'
import ConfirmDialog from './'

jest.mock('@assets/images/delete_Action.gif', () => ({
  default: 'deleteAction',
}))

jest.mock('@chakra-ui/react', () => {
  return {
    ...jest.requireActual('@chakra-ui/react'),
    useToast: () => jest.fn(),
  }
})

describe('ConfirmDialog component', () => {
  it('renders ConfirmDialog component', () => {
    const { container } = render(
      <ConfirmDialog
        id="ID01"
        isConfirmDialogOpen
        closeConfirmDialog={() => {}}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('opens the dialog on button click', () => {
    const { getByLabelText } = render(
      <ConfirmDialog
        id="ID01"
        isConfirmDialogOpen
        closeConfirmDialog={() => {}}
      />
    )

    const dialog = getByLabelText('Confirmation')
    expect(dialog).toBeInTheDocument()
  })

  it('displays dialog content correctly', () => {
    const { getByText } = render(
      <ConfirmDialog
        id="ID01"
        isConfirmDialogOpen
        closeConfirmDialog={() => {}}
      />
    )

    const dialogTitle = getByText('Confirmation')
    const dialogText = getByText(/Do you really want to delete this item?/i)
    expect(dialogTitle).toBeInTheDocument()
    expect(dialogText).toBeInTheDocument()
  })

  it('triggers delete action on "Delete" button click', async () => {
    const mockDeleteFn = jest.fn()
    const { getByText, queryByLabelText } = render(
      <ConfirmDialog
        id="ID01"
        isConfirmDialogOpen
        closeConfirmDialog={mockDeleteFn}
      />
    )
    const deleteButton = queryByLabelText('Delete Item')!
    fireEvent.click(deleteButton)

    const deleteButtonInsideDialog = getByText('Delete')
    fireEvent.click(deleteButtonInsideDialog)

    await waitFor(() => {
      expect(mockDeleteFn).toHaveBeenCalledWith('ID01')
    })
  })

  it('shows the toast when delete the item', async () => {
    const mockDeleteFnReject = jest.fn().mockRejectedValue('ID02')

    const { getByLabelText, getByText } = render(
      <ConfirmDialog
        id="ID01"
        isConfirmDialogOpen
        closeConfirmDialog={mockDeleteFnReject}
      />
    )

    fireEvent.click(getByLabelText('Delete Item'))
    fireEvent.click(getByText('Delete'))

    await waitFor(() => {
      expect(mockDeleteFnReject).toHaveBeenCalledWith('ID01')
    })
  })
})
