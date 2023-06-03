import React, { memo, useState } from 'react'

// Importing the Toast, Typography, Form, ConfirmModal and Button components
import Toast from '../Toast'
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
  modalId: string
  closeModal: () => void
  showModal: boolean
  modalType: 'add' | 'edit' | 'delete'
}

const Modal: React.FC<ModalProps> = (props) => {
  const { modalId, modalType, showModal, closeModal } = props
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [toastStatus, setToastStatus] = useState<'success' | 'failure' | null>(
    null
  )

  // Function to handle close the modal
  const handleCloseModal = (showToast = true): void => {
    closeModal()
    document.removeEventListener('keydown', handleKeyDown)
    // // Check if the toast should be shown
    if (!showToast) {
    // Set the toast message and status to null
      setToastMessage(null)
      setToastStatus(null)
    }
  }

  // Function to handle keydown events
  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      handleCloseModal(false) // Pass false to indicate the ESC key is pressed
    }
  }

  // Function to handle button close modal clicked
  const handleCloseModalButtonClick = (): void => {
    handleCloseModal(false)
  }

  // Function to handle showing or hiding the toast
  const handleToast = (
    message: string,
    status: 'success' | 'failure'
  ): void => {
    setToastMessage(message)
    setToastStatus(status)
  }

  if (showModal) {
    document.addEventListener('keydown', handleKeyDown)
  }

  // Render the modal if showModal is true
  return showModal ? (
    <>
      <div className="modal-overlay">
        <div
          className={`modal-container ${
            modalType === 'delete' ? 'modal-delete' : ''
          }`}
        >
          <div className="modal-header">
            <Typography variant="h2" className="modal-title">
              {modalType === 'add'
                ? 'Add a new book'
                : modalType === 'edit'
                  ? 'Edit the book'
                  : null}
            </Typography>
            <Button
              size="large"
              variant="primary"
              className="close-modal-btn"
              aria-label="Close the modal button"
              onClick={handleCloseModalButtonClick}
            >
              <IoClose size={20} />
            </Button>
          </div>
          <div className="modal-content">
             {/* Render the appropriate content based on the modalType */}
            {modalType === 'add' || modalType === 'edit' ? (
              <Form
                id={modalId}
                formType={modalType === 'add' ? 'add' : 'edit'}
                onCloseModal={handleCloseModal}
                handleToast={handleToast}
              />
            ) : (
              <ConfirmModal
                id={modalId}
                text={'book'}
                onCloseModal={handleCloseModal}
                handleToast={handleToast}
              />
            )}
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      {/* Render the toast if toastMessage and toastStatus are not null */}
      {toastMessage != null && toastStatus != null && (
        <Toast message={toastMessage} status={toastStatus} duration={5000} />
      )}
    </>
  )
}

export default memo(Modal)
