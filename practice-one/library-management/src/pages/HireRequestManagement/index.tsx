import React, {useCallback, useContext, useMemo, useRef, useState} from 'react'

// Importing the Table, Toast, Typography, Modal, EditHireRequestForm and ConfirmModal components
import Table from '@components/Table'
import Toast from '@components/Toast'
import Typography from '@components/Typography'
import Modal from '@components/Modal'
import EditHireRequestForm from '@components/Form/EditHireRequestForm'
import ConfirmModal from '@components/ConfirmModal'

// Importing the constants
import {NOTIFICATIONS, COLUMNS, MODAL, MODAL_TITLE} from '@constants'

// Importing the helper function
import {formatDate} from '@helpers'

// Importing the API methods
import {
  fetchHireRequestById,
  fetchMemberById,
  editHireRequestAPI,
  editMemberAPI,
  deleteHireRequestAPI,
} from '@services/api-actions'

// Importing the Hire request context
import HireRequestsContext from '@stores/hire-request/HireRequestsContext'

// Importing the actions
import {deleteHireRequest, editHireRequest} from '@stores/hire-request/actions'

// Importing the Hire request type
import {IHireRequest} from '@types'

// Importing the CSS for styling
import './hire-request.css'

const HireRequestPage: React.FC = () => {
  // Context hooks to retrieve hire request data and dispatch new hire requests
  const {hireRequestState, hireRequestDispatch} =
    useContext(HireRequestsContext)

  // Array of all hire requests stored in state
  const allHireRequests: IHireRequest[] = hireRequestState.hireRequests

  // State variables for displaying toast messages to the user
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [toastStatus, setToastStatus] = useState(false)

  // Modal configuration
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [modalType, setModalType] = useState<'add' | 'edit' | 'delete'>('add')
  const [modalId, setModalId] = useState<string>('')

  // Setting up scroll position hook for returning to previous scroll position when modal is closed
  const [previousScrollPosition, setPreviousScrollPosition] =
    useState<number>(0)

  // Creating reference to product section div element
  const hireRequestSectionRef = useRef<HTMLDivElement>(null)

  // Define a function to handle opening the modal with specific type and id
  const handleOpenModal = useCallback(
    (id: string, type: 'add' | 'edit' | 'delete'): void => {
      setToastMessage('')
      setToastStatus(false)
      setIsOpenModal(true)
      setModalType(type)
      setModalId(id)
      if (type === 'edit' || type === 'delete') {
        setPreviousScrollPosition(window.scrollY + 220)
        hireRequestSectionRef.current?.scrollIntoView({behavior: 'smooth'})
      }
    },
    [setToastMessage, setToastStatus, setIsOpenModal, setModalType, setModalId]
  )

  // Call the function 'handleOpenModal' to open the edit modal
  const handleOpenModalEdit = useCallback(
    (id: string): void => {
      handleOpenModal(id, 'edit')
    },
    [handleOpenModal]
  )

  // Call the function 'handleOpenModal' to open the delete modal
  const handleOpenModalDelete = useCallback(
    (id: string): void => {
      handleOpenModal(id, 'delete')
    },
    [handleOpenModal]
  )

  const handleEdit = async (
    id: string,
    formData: IHireRequest
  ): Promise<void> => {
    try {
      const result = await editHireRequestAPI(id, formData)

      // If the API call is successful, display a success message. Otherwise, display a failure message.
      const toastMessage = result
        ? NOTIFICATIONS.HIRE_REQUEST_EDITED_SUCCESSFULLY
        : NOTIFICATIONS.HIRE_REQUEST_EDITED_FAILED

      // Set the toast message and status based on whether the API call was successful or not
      setToastMessage(toastMessage)
      setToastStatus(!!result)

      // Dispatch an action to update the state with the deleted hire request's ID
      hireRequestDispatch(editHireRequest(formData))
    } catch (error) {
      // If there's an error, display a failure message and set the status to false.
      setToastMessage(NOTIFICATIONS.HIRE_REQUEST_EDITED_FAILED)
      setToastStatus(false)
    }

    // Close the modal after handling the deletion, regardless of success/failure of the request
    handleCloseModal()
  }

  // Function to handle deleting the book hire request
  const handleDelete = async (id: string): Promise<void> => {
    try {
      // Calls an API to delete the hire request with the given ID and waits for the response
      const result = await deleteHireRequestAPI(id)

      // If the API call is successful, display a success message. Otherwise, display a failure message.
      const toastMessage = result
        ? NOTIFICATIONS.HIRE_REQUEST_DELETED_SUCCESSFULLY
        : NOTIFICATIONS.HIRE_REQUEST_DELETED_FAILED

      // Set the toast message and status based on whether the API call was successful or not
      setToastMessage(toastMessage)
      setToastStatus(!!result)

      // Dispatch an action to update the state with the deleted hire request's ID
      hireRequestDispatch(deleteHireRequest(id))
    } catch (error) {
      // If there's an error, display a failure message and set the status to false.
      setToastMessage(NOTIFICATIONS.HIRE_REQUEST_DELETED_FAILED)
      setToastStatus(false)
    }

    // Close the modal after handling the deletion, regardless of success/failure of the request
    handleCloseModal()
  }

  // Function to handle close the modal
  const handleCloseModal = useCallback(() => {
    setIsOpenModal(false)
    window.scrollTo({top: previousScrollPosition, behavior: 'smooth'})
    setModalId('')
  }, [isOpenModal])

  // Function to handle toggling the completion status of a hire request
  const handleToggleCompletion = useCallback(
    async (id: string, memberId: string, bookId: string): Promise<void> => {
      setToastMessage(null)
      setToastStatus(false)
      // Retrieve hire request and member data using their IDs
      const [hireRequestData, memberDataById] = await Promise.all([
        fetchHireRequestById(id),
        fetchMemberById(memberId),
      ])

      // Update the hire request status to "completed" and add the book ID to the member's list of hired books
      const updatedHireRequestData = {...hireRequestData, status: 'completed'}
      const updatedMemberData = {
        ...memberDataById,
        hiredBooks: [...memberDataById.hiredBooks, {bookId}],
      }

      // Send updated hire request and member data to the server
      const result = await Promise.all([
        editHireRequestAPI(id, updatedHireRequestData),
        editMemberAPI(memberId, updatedMemberData),
      ])

      // Display a toast message based on the result of the operation
      setToastMessage(
        result
          ? NOTIFICATIONS.TOGGLE_COMPLETION_SUCCESSFUL
          : NOTIFICATIONS.TOGGLE_COMPLETION_FAILED
      )
      setToastStatus(!!result)

      // Dispatch the updated hire request data to the state
      hireRequestDispatch(editHireRequest(updatedHireRequestData))
    },
    []
  )

  // Map over the hire requests and format the fromDate and toDate fields
  const formattedHireRequestsData = useMemo(
    () =>
      allHireRequests.map(hireRequest => ({
        ...hireRequest,
        fromDate: formatDate(hireRequest.fromDate),
        toDate: formatDate(hireRequest.toDate),
      })),
    [allHireRequests]
  )

  return (
    <section className="hire-request-section" ref={hireRequestSectionRef}>
      <Typography variant={'h2'} className="hire-request-title">
        book hire request
      </Typography>
      <Table
        data={formattedHireRequestsData}
        columns={COLUMNS}
        onToggleCompletion={handleToggleCompletion}
        onOpenModalEdit={handleOpenModalEdit}
        onOpenModalDelete={handleOpenModalDelete}
      />
      <Modal
        modalType={modalType}
        showModal={isOpenModal}
        closeModal={handleCloseModal}
        modalTitle={
          modalType === 'edit' ? MODAL_TITLE.MODAL_EDIT_HIRE_REQUEST : null
        }
      >
        {/* Render the appropriate content based on the modalType */}
        {modalType === 'edit' ? (
          <EditHireRequestForm id={modalId} onEdit={handleEdit} />
        ) : (
          <ConfirmModal
            id={modalId}
            text={'hire request'}
            onCloseModal={handleCloseModal}
            onDelete={handleDelete}
          />
        )}
      </Modal>
      {toastMessage && toastStatus && (
        <Toast message={toastMessage} status={toastStatus} duration={5000} />
      )}
    </section>
  )
}

export default HireRequestPage
