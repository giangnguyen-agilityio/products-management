import React, { useContext, useState } from 'react'

// Importing the Typography, and Button components
import Button from '../Button'
import Typography from '../Typography'

// Importing the BookContext
import BookContext from '../../store/BookContext'

// Import the Delete image
import deleteImage from '../../assets/images/delete-icon.gif'

// Importing the API method
import { deleteBookAPI } from '../../services/api-actions'

// Importing the actions
import { deleteBook } from '../../store/action'

// Importing the CSS file for styling
import './confirm-modal.css'

// Define the props for the Confirm modal component
interface ConfirmModalProps {
  id: string
  text: string
  onCloseModal: (showToast?: boolean) => void
  handleToast: (message: string, status: 'success' | 'failure') => void
}

const ConfirmModal: React.FC<ConfirmModalProps> = (props) => {
  const { id, text, onCloseModal, handleToast } = props

  // Get the dispatch function from BookContext
  const { dispatch } = useContext(BookContext)

  // State to set disable button
  const [disableButton, setDisableButton] = useState(false)

  // Function to handle confirm (delete)
  const handleDelete = async (): Promise<void> => {
    try {
      setDisableButton(true) // Set disableButton state to true
      // Call deleteBookAPI with the book ID
      const result = await deleteBookAPI(id)
      if (result != null) {
        setDisableButton(false) // Set disableButton state to false
        // Dispatch the deleteBook action with the book ID
        dispatch(deleteBook(id))
        // Show a success toast message
        handleToast('Book deleted successfully', 'success')
        // Close the modal
        onCloseModal()
      }
    } catch (error) {
      // Show a failure toast message if deletion fails
      handleToast('Failed to delete book', 'failure')
      // Close the modal
      onCloseModal()
    }
  }

  // Function to handle cancel
  const handleCancel = (): void => {
    // Close the modal without showing the toast
    onCloseModal(false)
  }

  return (
    <div className="confirm-modal-content">
      <img src={deleteImage} alt="Image for delete action" className="confirm-modal-image" />
      <Typography variant="p" className="confirm-modal-title">
        Do you really want to delete this {text} ?
        <br />
        This process{' '}
        <strong className="highlight-text"> cannot be undone.</strong>
      </Typography>
      <div className="confirm-modal-control">
        <Button
          variant="primary"
          className="confirm-modal-button"
          onClick={handleDelete}
          disabled={disableButton}
        >
          Delete
        </Button>
        <Button
          variant="primary"
          className="cancel-modal-button"
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </div>
    </div>
  )
}

export default ConfirmModal
