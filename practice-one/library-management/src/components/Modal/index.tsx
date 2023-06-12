import React, {memo} from 'react'

// Importing the Typography and Button components
import Typography from '@components/Typography'
import Button from '@components/Button'

// Importing the Icon from the React-icons library
import {IoClose} from 'react-icons/io5'

// Importing the constants
import {MODAL} from '@constants'

// Importing the CSS file for styling
import './modal.css'

// Define the props for the Modal component
interface ModalProps {
  closeModal: () => void
  showModal: boolean
  modalType: MODAL.ADD | MODAL.EDIT | MODAL.DELETE
  modalTitle: React.ReactNode
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = props => {
  const {modalType, showModal, modalTitle, children, closeModal} = props

  // Function to handle close the modal
  const handleCloseModal = (): void => {
    closeModal()
    document.removeEventListener('keydown', handleKeyDown)
    // Check if the toast should be shown
  }

  // Function to handle keydown events
  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      handleCloseModal()
    }
  }

  // Function to handle button close modal clicked
  const handleCloseModalButtonClick = (): void => {
    handleCloseModal()
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
            modalType !== MODAL.ADD && modalType !== MODAL.EDIT
              ? 'modal-delete'
              : ''
          }`}
        >
          <div className="modal-header">
            <Typography variant="h2" className="modal-title">
              {modalTitle}
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
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </>
  ) : null
}

export default memo(Modal)
