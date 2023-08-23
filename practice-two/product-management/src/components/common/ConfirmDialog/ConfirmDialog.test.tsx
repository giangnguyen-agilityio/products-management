import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import ConfirmDialog from './'

describe('ConfirmDialog Component', () => {
  const mockOnDelete = jest.fn()
  const mockCloseConfirmDialog = jest.fn()

  jest.mock('@assets/images/delete_Action.gif', () => ({
    default: 'deleteAction',
  }))

  const defaultProps = {
    id: 'item_id',
    isConfirmDialogOpen: true,
    closeConfirmDialog: mockCloseConfirmDialog,
    onDelete: mockOnDelete,
  }

  it('renders correctly', () => {
    const { container } = render(<ConfirmDialog {...defaultProps} />)

    expect(screen.getByText('Confirmation')).toBeInTheDocument()
    expect(screen.getByLabelText('Cancel button')).toBeInTheDocument()
    expect(screen.getByLabelText('Delete button')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('calls onDelete when Delete button is clicked', async () => {
    render(<ConfirmDialog {...defaultProps} />)

    const deleteButton = screen.getByLabelText('Delete button')
    fireEvent.click(deleteButton)

    await waitFor(() => {
      expect(mockOnDelete).toHaveBeenCalledWith('item_id')
    })
  })

  it('closes the dialog when Cancel button is clicked', () => {
    render(<ConfirmDialog {...defaultProps} />)

    const cancelButton = screen.getByLabelText('Cancel button')
    fireEvent.click(cancelButton)

    expect(mockCloseConfirmDialog).toHaveBeenCalled()
  })

  it('disables the Delete button temporarily when clicked', async () => {
    render(<ConfirmDialog {...defaultProps} />)

    const deleteButton = screen.getByLabelText('Delete button')
    fireEvent.click(deleteButton)

    expect(deleteButton).toBeDisabled()

    await waitFor(() => {
      expect(deleteButton).not.toBeDisabled()
    })
  })
})
