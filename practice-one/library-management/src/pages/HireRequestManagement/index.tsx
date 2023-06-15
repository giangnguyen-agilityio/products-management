import React, {useCallback, useContext, useMemo, useRef, useState} from 'react'
import Table from '@components/Table'
import Toast from '@components/commons/Toast'
import Typography from '@components/commons/Typography'
import Modal from '@components/Modal'
import EditHireRequestForm from '@components/Form/EditHireRequestForm'
import ConfirmModal from '@components/ConfirmModal'
import {NOTIFICATIONS, COLUMNS, MODAL, MODAL_TITLE} from '@constants'
import {formatDate} from '@helpers'
import {
  fetchHireRequestById,
  fetchMemberById,
  editHireRequestAPI,
  editMemberAPI,
  deleteHireRequestAPI,
} from '@services/api-actions'
import HireRequestsContext from '@stores/hire-request/HireRequestsContext'
import {IHireRequest} from '@types'
import './hire-request.css'

const HireRequestPage: React.FC = () => {
  const {hireRequestState, editHireRequestState, deleteHireRequestState} =
    useContext(HireRequestsContext)
  const allHireRequests: IHireRequest[] = hireRequestState.hireRequests

  // State variables for displaying toast messages to the user
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [toastStatus, setToastStatus] = useState(false)

  // Modal configuration
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [modalType, setModalType] = useState<
    MODAL.ADD | MODAL.EDIT | MODAL.DELETE
  >(MODAL.ADD)
  const [modalId, setModalId] = useState<string>('')

  // Setting up scroll position hook for returning to previous scroll position when modal is closed
  const [previousScrollPosition, setPreviousScrollPosition] =
    useState<number>(0)

  // Creating reference to product section div element
  const hireRequestSectionRef = useRef<HTMLDivElement>(null)

  // Define a function to handle opening the modal with specific type and id
  const handleOpenModal = useCallback(
    (id: string, type: MODAL.ADD | MODAL.EDIT | MODAL.DELETE): void => {
      setToastMessage('')
      setToastStatus(false)
      setIsOpenModal(true)
      setModalType(type)
      setModalId(id)
      if (type === MODAL.EDIT || type === MODAL.DELETE) {
        setPreviousScrollPosition(window.scrollY)
        hireRequestSectionRef.current?.scrollIntoView({behavior: 'smooth'})
      }
    },
    [setToastMessage, setToastStatus, setIsOpenModal, setModalType, setModalId]
  )

  // Call the function 'handleOpenModal' to open the edit modal
  const handleOpenModalEdit = useCallback(
    (id: string): void => {
      handleOpenModal(id, MODAL.EDIT)
    },
    [handleOpenModal]
  )

  // Call the function 'handleOpenModal' to open the delete modal
  const handleOpenModalDelete = useCallback(
    (id: string): void => {
      handleOpenModal(id, MODAL.DELETE)
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

      // Updated hire request data to the state
      editHireRequestState(formData)
    } catch (error) {
      setToastMessage(NOTIFICATIONS.HIRE_REQUEST_EDITED_FAILED)
      setToastStatus(false)
    }
    handleCloseModal()
  }

  // Function to handle deleting the book hire request
  const handleDelete = async (id: string): Promise<void> => {
    try {
      const result = await deleteHireRequestAPI(id)

      // If the API call is successful, display a success message. Otherwise, display a failure message.
      const toastMessage = result
        ? NOTIFICATIONS.HIRE_REQUEST_DELETED_SUCCESSFULLY
        : NOTIFICATIONS.HIRE_REQUEST_DELETED_FAILED

      // Set the toast message and status based on whether the API call was successful or not
      setToastMessage(toastMessage)
      setToastStatus(!!result)

      // Delete the state with the hire request's ID
      deleteHireRequestState(id)
    } catch (error) {
      setToastMessage(NOTIFICATIONS.HIRE_REQUEST_DELETED_FAILED)
      setToastStatus(false)
    }
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

      // Updated hire request data to the state
      editHireRequestState(updatedHireRequestData)
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

  // Function to handle showing or hiding the toast
  const handleToast = (message: string, status: boolean): void => {
    setToastMessage(message)
    setToastStatus(status)
  }

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
          modalType === MODAL.EDIT ? MODAL_TITLE.MODAL_EDIT_HIRE_REQUEST : null
        }
      >
        {/* Render the appropriate content based on the modalType */}
        {modalType === MODAL.EDIT ? (
          <EditHireRequestForm
            id={modalId}
            onEdit={handleEdit}
            onHandleToast={handleToast}
          />
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
