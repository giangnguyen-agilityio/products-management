import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import ConfirmModal from '.'

jest.mock('@assets/images/delete-icon.gif', () => ({
  default: 'delete-icon.gif',
}))

describe('ConfirmModal', () => {
  const mockId = '123'
  const mockText = 'item'
  const mockOnCloseModal = jest.fn()
  const mockOnDelete = jest.fn()

  it('should renders the component with the correct props', () => {
    const {container} = render(
      <ConfirmModal
        id={mockId}
        text={mockText}
        onCloseModal={mockOnCloseModal}
        onDelete={mockOnDelete}
      />
    )

    // Check if the image is rendered with the correct attributes
    const deleteImage = screen.getByAltText('Image for delete action')
    expect(deleteImage).toBeInTheDocument()
    expect(deleteImage).toHaveAttribute('src', 'delete-icon.gif')
    expect(container).toMatchSnapshot()
  })

  it('should calls the onDelete function when clicking the Delete button', () => {
    render(
      <ConfirmModal
        id={mockId}
        text={mockText}
        onCloseModal={mockOnCloseModal}
        onDelete={mockOnDelete}
      />
    )

    // Simulate clicking the "Delete" button
    const deleteButton = screen.getByText('Delete')
    fireEvent.click(deleteButton)

    // Check if the onDelete function is called with the correct id
    expect(mockOnDelete).toHaveBeenCalledWith(mockId)
  })

  it('should calls the onCloseModal function when clicking the Cancel button', () => {
    render(
      <ConfirmModal
        id={mockId}
        text={mockText}
        onCloseModal={mockOnCloseModal}
        onDelete={mockOnDelete}
      />
    )

    // Simulate clicking the "Cancel" button
    const cancelButton = screen.getByText('Cancel')
    fireEvent.click(cancelButton)

    // Check if the onCloseModal function is called
    expect(mockOnCloseModal).toHaveBeenCalled()
  })
})
