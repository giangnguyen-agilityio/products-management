import React, { memo } from 'react'

// Importing the Typography, Form, ConfirmModal and Button components
import Typography from '../Typography'
import Button from '../Button'
import Form from '../Form'
import ConfirmModal from '../ConfirmModal'

// Importing the Icon from the React-icons library
import { IoClose } from 'react-icons/io5'

// Importing the CSS file for styling
import './modal.css'

// Define the props for the Modal component
interface ModalProps {
  closeModal: () => void
  showModal: boolean
  modalType: 'add' | 'edit' | 'delete'
}

const Modal: React.FC<ModalProps> = (props) => {
  const { modalType, showModal, closeModal } = props

  // Function to handle close the modal
  const handleCloseModal = (): void => {
    closeModal()
    document.removeEventListener('keydown', handleKeyDown)
  }

  // Function to handle keydown events
  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      handleCloseModal()
    }
  }

  // Add event listener for keydown events when the modal is show
  if (showModal) {
    document.addEventListener('keydown', handleKeyDown)
  }

  return showModal ? (
    <div className="modal-overlay">
      <div
        className={`modal-container ${
          modalType === 'delete' ? 'modal-delete' : ''
        }  `}
      >
        {/* Modal header */}
        <div className="modal-header">
          <Typography variant="h2" className="modal-title">
            {modalType === 'add'
              ? 'Add a new book'
              : modalType === 'edit'
                ? 'Edit the book'
                : null}
          </Typography>
          {/* Close button */}
          <Button
            size="large"
            variant="primary"
            className="close-modal-btn"
            aria-label="Close the modal button"
            onClick={handleCloseModal}
          >
            <IoClose size={20} />
          </Button>
        </div>
        {/* Modal content */}
        <div className="modal-content">
          {/* Render Form component for 'add' or 'edit' modal type */}
          {modalType === 'add' || modalType === 'edit' ? (
            <Form
              formType={modalType === 'add' ? 'add' : 'edit'}
              onSubmit={handleCloseModal}
            />
          ) : (
            // Render ConfirmModal component for 'delete' modal type
            <ConfirmModal
              text={'book'}
              onConfirm={handleCloseModal}
              onCancel={handleCloseModal}
            />
          )}
        </div>
      </div>
    </div>
  ) : null
}

export default memo(Modal)
