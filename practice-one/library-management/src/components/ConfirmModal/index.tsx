import React from 'react'

// Importing the Typography, and Button components
import Typography from '@components/Typography'
import Button from '@components/Button'

// Import the Delete image
import deleteImage from '@assets/images/delete-icon.gif'

// Importing the CSS file for styling
import './confirm-modal.css'

// Define the props for the Confirm modal component
interface ConfirmModalProps {
  id: string
  text: string
  onCloseModal: (showToast?: boolean) => void
  onDelete: (id: string) => void
}

const ConfirmModal: React.FC<ConfirmModalProps> = props => {
  const {id, text, onCloseModal, onDelete} = props

  // Function to handle confirm (delete)
  const handleDelete = (): void => {
    onDelete(id)
  }

  // Function to handle cancel
  const handleCancel = (): void => {
    // Close the modal
    onCloseModal()
  }

  return (
    <div className="confirm-modal-content">
      <img
        src={deleteImage}
        alt="Image for delete action"
        className="confirm-modal-image"
      />
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
