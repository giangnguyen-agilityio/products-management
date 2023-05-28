import React, { useCallback } from 'react'

// Importing the Typography, and Button components
import Button from '../Button'
import Typography from '../Typography'

// Import the Delete image
import deleteImage from '../../assets/images/delete-icon.gif'

// Importing the CSS file for styling
import './confirm-modal.css'

// Define the props for the Confirm modal component
interface ConfirmModalProps {
  text: string
  onConfirm: () => void
  onCancel: () => void
}

const ConfirmModal: React.FC<ConfirmModalProps> = (props) => {
  const { text, onConfirm, onCancel } = props

  // Function to handle confirm
  const handleConfirm = useCallback(() => {
    onConfirm()
  }, [onConfirm])

  // Function to handle cancel
  const handleCancel = useCallback(() => {
    onCancel()
  }, [onCancel])

  return (
    <div className="confirm-modal-content">
      <img src={deleteImage} className="confirm-modal-image" />
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
          onClick={handleConfirm}
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
