import React, {useState, useEffect, useCallback} from 'react'
import Button from '@components/commons/Button'
import Input from '@components/commons/Input'
import {ERROR_MESSAGES, NOTIFICATIONS} from '@constants'
import {fetchHireRequestById} from '@services/api-actions'
import {IHireRequest} from 'types/hireRequest'
import {formatDatetimeLocal} from '@helpers'

interface HireRequestFormProps {
  id: string
  onEdit: (id: string, formData: IHireRequest) => void
  onHandleToast: (message: string, status: boolean) => void
}

const EditHireRequestForm: React.FC<HireRequestFormProps> = props => {
  const {id, onEdit, onHandleToast} = props

  // Set up initial state for formData and disableButton using the useState hook
  const [formData, setFormData] = useState<IHireRequest>({
    bookId: '',
    fromDate: '',
    id: '',
    memberId: '',
    status: '',
    toDate: '',
  })
  const [disableButton, setDisableButton] = useState(false)

  // Use the useEffect hook to fetch hireRequest data by id when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const hireRequest: IHireRequest = await fetchHireRequestById(id)
        const {fromDate, toDate, ...rest} = hireRequest
        const updateHireRequest: IHireRequest = {
          ...rest,
          // Explicitly set the fromDate and toDate properties
          fromDate: fromDate,
          toDate: toDate,
        }
        // Update the form data state with the fetched data
        setFormData(updateHireRequest)
      } catch (error) {
        onHandleToast(NOTIFICATIONS.FAILED_TO_GET_HIRE_REQUEST, false)
      }
    }

    fetchData()
  }, [id])

  // Function to handle updates the form data state whenever an input field's value changes
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = event.target
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value,
      }))
    },
    []
  )

  // Function to handle submit the form data
  const handleSubmit = async () => {
    // Validate the form data by checking if the fromDate and toDate properties has a value
    const isValid = formData.fromDate && formData.toDate
    if (isValid) {
      setDisableButton(true)
      // Call the onEdit function to update the hire request data using the id and formData
      onEdit(id, {...formData})
    }
    setDisableButton(false)
  }

  // Define a function that returns an error message based on the field name and a provided message
  const renderErrorMessage = (
    fieldName: keyof typeof formData,
    message: string
  ) =>
    formData[fieldName] &&
    formatDatetimeLocal(formData.fromDate) ===
      formatDatetimeLocal(formData.toDate)
      ? message
      : ''

  return (
    <form className="form-content">
      <Input
        className="input-field"
        type="datetime-local"
        name="fromDate"
        label="From Date:"
        value={formatDatetimeLocal(formData.fromDate)}
        classNameLabel="form-label"
        onChange={handleChange}
      />

      <Input
        className="input-field"
        type="datetime-local"
        name="toDate"
        label="To Date:"
        value={formatDatetimeLocal(formData.toDate)}
        classNameLabel="form-label"
        onChange={handleChange}
        errorMessage={renderErrorMessage('toDate', ERROR_MESSAGES.INVALID_DATE)}
      />

      <div className="control-buttons">
        <Button
          onClick={handleSubmit}
          size="large"
          variant="primary"
          className="submit-form-btn"
          disabled={disableButton}
        >
          EDIT
        </Button>
      </div>
    </form>
  )
}

export default EditHireRequestForm
