import React, {memo, useCallback, useEffect} from 'react'
import Typography from '@components/commons/Typography'
import Button from '@components/commons/Button'
import {IoClose} from 'react-icons/io5'
import {MODAL} from '@constants/modal'
import './modal.css'

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
  const handleCloseModal = useCallback((): void => {
    closeModal()
    document.removeEventListener('keydown', handleKeyDown)
  }, [closeModal])

  // Function to handle keydown events
  const handleKeyDown = useCallback(
    (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        handleCloseModal()
      }
    },
    [handleCloseModal]
  )

  // Function to handle button close modal clicked
  const handleCloseModalButtonClick = useCallback((): void => {
    handleCloseModal()
  }, [handleCloseModal])

  useEffect(() => {
    if (showModal) {
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [showModal, handleKeyDown])

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
