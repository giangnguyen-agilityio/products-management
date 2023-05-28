import React, { useState } from 'react'

// Importing the Input and Button components
import Input from '../Input/index'
import Button from '../Button/index'

// Importing the CSS file for styling
import './form.css'

// Define the props for the Form component
interface FormProps {
  formType: string
  onSubmit: (formData: any) => void
}
const Form: React.FC<FormProps> = (props): JSX.Element => {
  // Initialize the state of the component
  const { formType, onSubmit } = props
  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [availableQuantity, setAvailableQuantity] = useState<string>('')
  const [totalQuantity, setTotalQuantity] = useState<string>('')
  const [image, setImage] = useState<string | null>(null)

  // Function to handle upload the image
  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    // Retrieve the selected file from the Image input field
    const selectedFile = event.target?.files?.[0]
    // Retrieve the selected file from the Image input field
    const fileReader = new FileReader()

    // Set up the onload event handler for when the file is loaded
    fileReader.onload = () => {
      // Retrieve the uploaded image data as a base64-encoded string
      const uploadedImage = fileReader.result as string
      // Update the image state variable with the uploaded image data
      setImage(uploadedImage)
    }

    // If a file is selected, start reading it as a data URL
    if (selectedFile != null) {
      fileReader.readAsDataURL(selectedFile)
    }
  }

  // Function to handle submit the form
  const submitForm = (): void => {
    const formData = {
      title,
      author,
      price,
      description,
      availableQuantity,
      totalQuantity,
      image
    }
    onSubmit(formData)
  }

  // Function to handle the title change
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value)
  }

  // Function to handle the author change
  const handleAuthorChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setAuthor(event.target.value)
  }

  // Function to handle the price change
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPrice(event.target.value)
  }

  // Function to handle the description change
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setDescription(event.target.value)
  }

  // Function to handle the available quantity change
  const handleAvailableQuantityChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setAvailableQuantity(event.target.value)
  }

  // Function to handle the total quantity change
  const handleTotalQuantityChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTotalQuantity(event.target.value)
  }

  return (
    <>
      {/* Form content */}
      <form className="form-content">
        {/* Name of book input fields */}
        <Input
          className="input-field"
          name={title}
          label="Name of book:"
          classNameLabel="form-label"
          value={title}
          onChange={handleTitleChange}
        />

        {/* Author input fields */}
        <Input
          className="input-field"
          name={author}
          label="Author:"
          classNameLabel="form-label"
          value={author}
          onChange={handleAuthorChange}
        />

        {/* Price input fields */}
        <Input
          className="input-field"
          name={price}
          label="Price:"
          classNameLabel="form-label"
          type="number"
          value={price}
          onChange={handlePriceChange}
        />

        {/* Description input fields */}
        <Input
          className="input-field"
          name={description}
          label="Description:"
          classNameLabel="form-label"
          onChange={handleDescriptionChange}
        />

        {/* Available quantity input fields */}
        <Input
          className="input-field"
          name={availableQuantity}
          label="Available quantity:"
          classNameLabel="form-label"
          type="number"
          min={0}
          value={availableQuantity}
          onChange={handleAvailableQuantityChange}
        />

        {/* Total quantity input fields */}
        <Input
          className="input-field"
          name={totalQuantity}
          label="Total quantity:"
          classNameLabel="form-label"
          type="number"
          min={0}
          value={totalQuantity}
          onChange={handleTotalQuantityChange}
        />

        {/* Image upload field */}
        <Input
          className="input-field image-uploaded"
          name="image"
          label="Image:"
          classNameLabel="form-label"
          type="file"
          accept="image/."
          onChange={handleImageUpload}
        />
        {/* Display the uploaded image */}
        {image !== null && (
          <img
            className="image-uploaded"
            src={image}
            alt={`${title} book cover`}
          />
        )}
      </form>

      {/* Control buttons */}
      <div className="control-buttons">
        {/* Submit button */}
        <Button
          onClick={() => {
            submitForm()
          }}
          type="submit"
          size="large"
          variant="primary"
          className="submit-form-btn"
        >
          {formType === 'add' ? 'ADD' : 'EDIT'}
        </Button>
      </div>
    </>
  )
}

export default Form
