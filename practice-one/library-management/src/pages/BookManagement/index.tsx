import React, {useCallback, useState} from 'react'

// Importing the Banner and ProductList components
import Banner from '@components/Banner'
import ProductList from '@components/ProductList'

// Importing the helper function
import {getItemInLocalStorage} from '@helpers'

// Importing the Hire Request type
import {IHireRequest} from '@types'

// Importing the constants
import {NOTIFICATIONS} from '@constants'

// Importing the API methods
import {
  fetchMemberById,
  fetchAllHireRequest,
  addNewHireRequestAPI,
} from '@services/api-actions'

// Importing the uuid library
import {v4 as uuidv4} from 'uuid'
import Toast from '@components/Toast'

const BookManagement = (): JSX.Element => {
  // Toast configuration
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [toastStatus, setToastStatus] = useState(false)

  // Function to handle renting a book
  const handleRentBook = useCallback(async (id: string): Promise<void> => {
    // Clearing previous toast message and status
    setToastMessage(null)
    setToastStatus(false)

    // Retrieves the memberId from local storage, then fetches the hiredBooks and calculates its quantity.
    const memberId: string = getItemInLocalStorage('memberId')
    const {hiredBooks} = await fetchMemberById(memberId)
    const hiredBooksQuantity: number = hiredBooks.length

    // Fetches all hire requests and filters them based on whether they match the retrieved memberId.
    const hireRequestList: IHireRequest[] = await fetchAllHireRequest()
    const hireRequestMatchMemberId: IHireRequest[] = hireRequestList?.filter(
      hireRequest => hireRequest.memberId === memberId
    )

    // Calculate the number of book hire requests sent
    const hireRequestsSentQuantity: number = hireRequestMatchMemberId.length

    // Checking the limit of rented books
    if (hireRequestsSentQuantity >= 5 || hiredBooksQuantity >= 5) {
      window.alert('Your request to rent the book is over the limit')
      return
    }

    // Creating a new hire request
    const randomId: string = uuidv4()
    const hireRequestId: string = `HR${randomId}`
    const fromDate: string = new Date().toISOString()
    const toDate: string = new Date(
      Date.now() + 10 * 24 * 60 * 60 * 1000
    ).toISOString()
    const bookId: string = id
    const newHireRequestData: IHireRequest = {
      id: hireRequestId,
      bookId,
      memberId,
      fromDate,
      toDate,
      status: 'incomplete',
    }

    // Sending API requests to add a new hire request and update member data
    const resultAddHireRequest = await addNewHireRequestAPI(newHireRequestData)

    // Handling success or failure of API requests
    setToastMessage(
      resultAddHireRequest
        ? NOTIFICATIONS.HIRE_REQUEST_SENT_SUCCESSFULLY
        : NOTIFICATIONS.HIRE_REQUEST_SEND_FAILED
    )
    setToastStatus(!!resultAddHireRequest)
  }, [])

  // Function to handle showing or hiding the toast
  const handleToast = (message: string, status: boolean): void => {
    setToastMessage(message)
    setToastStatus(status)
  }

  return (
    <>
      <Banner onRent={handleRentBook} />
      <ProductList onRent={handleRentBook} onHandleToast={handleToast} />
      {toastMessage && toastStatus && (
        <Toast message={toastMessage} status={toastStatus} duration={5000} />
      )}
    </>
  )
}

export default BookManagement
