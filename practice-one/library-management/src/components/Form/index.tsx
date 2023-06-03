import React, { useState, useContext, useCallback, useEffect } from 'react'// Importing the Input and Button components

// Importing the Input and Button components
import Input from '../Input/index'
import Button from '../Button/index'

// Importing the BookContext
import BookContext from '../../store/BookContext'

// Importing the API methods
import {
  fetchBookById,
  addNewBookAPI,
  editBookAPI
} from '../../services/api-actions'

// Importing the actions
import { addNewBook, editBook } from '../../store/action'

// Importing the CSS file for styling
import './form.css'

// Define the props for the Form component
interface FormProps {
  id: string
  formType: 'add' | 'edit'
  onCloseModal: () => void
  handleToast: (message: string, status: 'success' | 'failure') => void
}

// Define the Form component
const Form: React.FC<FormProps> = (props) => {
  const { id, formType, onCloseModal, handleToast } = props

  // Accesses the BookContext using useContext hook
  const { dispatch } = useContext(BookContext)

  // State to set disable button
  const [disableButton, setDisableButton] = useState(false)

  // State to hold the form data
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    price: 0,
    description: '',
    availableQuantity: 0,
    totalQuantity: 0,
    image: ''
  })

  // State to track if any field is empty
  const [isFieldEmpty, setIsFieldEmpty] = useState(false)

  // Fetches book data when the component mounts or when formType or id changes
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        if (formType === 'edit' && id !== '') {
          const book = await fetchBookById(id)
          const { image, ...rest } = book
          const updatedBook = {
            ...rest,
            image: image ?? ''
          }
          setFormData(updatedBook)
        }
      } catch (error) {
        console.log('Failed to fetch book:', error)
      }
    }

    fetchData().catch((error) => {
      console.log('Failed to fetch book:', error)
    })
  }, [formType, id])

  // Function to handles changes in input fields
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const { name, value } = event.target
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]:
          name === 'price' ||
          name === 'availableQuantity' ||
          name === 'totalQuantity'
            ? Number(value)
            : value
      }))
    },
    []
  )

  // Function to handles image upload
  const handleImageUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      // Retrieve the selected file from the event target's files array
      const selectedFile = event.target?.files?.[0]
      if (selectedFile != null) {
        // Create a FileReader object
        const fileReader = new FileReader()
        // Define the onload event handler for the FileReader
        fileReader.onload = () => {
          // Update the form data by setting the image field to the result of the FileReader
          setFormData((prevFormData) => ({
            ...prevFormData,
            image: fileReader.result as string
          }))
        }
        // Read the selected file as a data URL
        fileReader.readAsDataURL(selectedFile)
      }
    },
    []
  )

  // Generates a random number and constructs the alternative image path and book ID
  const randomNumber = Math.floor(Math.random() * 1000).toString()
  const altImagePath = `${formData.title} book cover`
  const bookId = `B${randomNumber}`

  // Function to handle submit the form
  const submitForm = async (): Promise<void> => {
    const {
      title,
      author,
      price,
      description,
      availableQuantity,
      totalQuantity,
      image
    } = formData

    // Checks if all required fields are filled
    const isValid =
      title !== '' &&
      author !== '' &&
      price !== 0 &&
      description !== '' &&
      availableQuantity !== 0 &&
      totalQuantity !== 0 &&
      image !== ''

    if (!isValid) {
      setIsFieldEmpty(true)
      return
    }
    setIsFieldEmpty(false)

    const newBookData = {
      id: bookId,
      alt: altImagePath,
      ...formData
    }

    try {
      if (formType === 'add') {
        setDisableButton(true) // Set disableButton state to true
        // Call the `addNewBookAPI` function with `newBookData` and wait for it to complete
        const result = await addNewBookAPI(newBookData)
        // Dispatch an action to add the new book using the `dispatch` function
        dispatch(addNewBook(newBookData))
        if (result != null) {
          setDisableButton(false) // Set disableButton state to false
          // Show a success toast message using the `handleToast` function
          handleToast('Book added successfully', 'success')
          // Close the modal
          onCloseModal()
        }
      } else if (formType === 'edit') {
        setDisableButton(true) // Set disableButton state to true
        // Call the `editBookAPI` function with the book `id` and `newBookData` and wait for it to complete
        const result = await editBookAPI(id, newBookData)
        // Dispatch an action to edit the book using the `dispatch` function
        dispatch(editBook(newBookData))
        if (result != null) {
          setDisableButton(false) // Set disableButton state to false
          // Show a success toast message using the `handleToast` function
          handleToast('Book edited successfully', 'success')
          // Close the modal
          onCloseModal()
        }
      }
    } catch (error) {
      // Show a failure toast message based on the `formType` using the `handleToast` function
      handleToast(
        `Failed to ${formType === 'add' ? 'add' : 'edit'} book`,
        'failure'
      )
      // Close the modal
      onCloseModal()
    }
  }

  // Renders an error message if a field is empty
  const renderErrorMessage = (
    fieldName: keyof typeof formData,
    message: string
  ): string => {
    if (
      isFieldEmpty &&
      (formData[fieldName] === '' || formData[fieldName] === 0)
    ) {
      return message
    } else {
      return ''
    }
  }

  return (
    <>
      <form className="form-content">
        <Input
          className="input-field"
          name="title"
          label="Name of book:"
          classNameLabel="form-label"
          value={formData.title}
          onChange={handleChange}
          errorMessage={renderErrorMessage(
            'title',
            'Please enter the name of book for this field'
          )}
        />

        <Input
          className="input-field"
          name="author"
          label="Author:"
          classNameLabel="form-label"
          value={formData.author}
          onChange={handleChange}
          errorMessage={renderErrorMessage(
            'author',
            'Please enter the author for this field'
          )}
        />

        <Input
          className="input-field"
          name="price"
          label="Price:"
          classNameLabel="form-label"
          type="number"
          value={formData.price.toString()}
          onChange={handleChange}
          errorMessage={renderErrorMessage(
            'price',
            'Please enter a value greater than 0'
          )}
        />

        <Input
          className="input-field"
          name="description"
          label="Description:"
          value={formData.description}
          classNameLabel="form-label"
          onChange={handleChange}
          errorMessage={renderErrorMessage(
            'description',
            'Please enter the description for this field'
          )}
        />

        <Input
          className="input-field"
          name="availableQuantity"
          label="Available quantity:"
          classNameLabel="form-label"
          type="number"
          min={0}
          value={formData.availableQuantity.toString()}
          onChange={handleChange}
          errorMessage={renderErrorMessage(
            'availableQuantity',
            'Please enter a value greater than 0'
          )}
        />

        <Input
          className="input-field"
          name="totalQuantity"
          label="Total quantity:"
          classNameLabel="form-label"
          type="number"
          min={0}
          value={formData.totalQuantity.toString()}
          onChange={handleChange}
          errorMessage={renderErrorMessage(
            'totalQuantity',
            'Please enter a value greater than 0'
          )}
        />

        <Input
          className="input-field image-uploaded"
          name="image"
          label="Image:"
          classNameLabel="form-label"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          errorMessage={renderErrorMessage('image', 'Please select an image')}
        />
        {formData.image !== '' && (
          <img
            className="image-uploaded"
            src={formData.image}
            alt={`${formData.title} book cover`}
          />
        )}
      </form>

      <div className="control-buttons">
        <Button
          onClick={submitForm}
          type="submit"
          size="large"
          variant="primary"
          className="submit-form-btn"
          disabled = {disableButton}
        >
          {formType === 'add' ? 'ADD' : 'EDIT'}
        </Button>
      </div>
    </>
  )
}

export default Form
