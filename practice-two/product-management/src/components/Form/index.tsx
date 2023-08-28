// Libraries
import React, { memo, useState, useCallback } from 'react'
import { Box, Button } from '@chakra-ui/react'

// Components
import InputField from '@components/common/InputField'
import ImageUploader from '@components/common/ImageUploader'

// Constants
import { ERROR_MESSAGES, MODAL, NOTIFICATIONS } from '@constants'

// Types
import { IProduct } from '@types'

// Function helpers
import { calculateDiscount } from '@helpers'

// Utils
import { useCustomToasts } from '@utils/toast'

export interface FormProps {
  id?: string
  formType: MODAL.ADD | MODAL.EDIT
  onAdd?: (formData: IProduct) => Promise<void>
  onEdit?: (id: string, formData: IProduct) => Promise<void>
  productData?: IProduct
}

const Form: React.FC<FormProps> = ({
  id,
  formType,
  onAdd,
  onEdit,
  productData,
}) => {
  const defaultFormData = {
    name: '',
    image: '',
    oldPrice: 0,
    newPrice: 0,
    description: '',
    rate: 0,
  }

  // Populate form data if editing an existing product
  const initialFormData =
    formType === MODAL.EDIT && id && productData
      ? { ...defaultFormData, ...productData }
      : defaultFormData

  // State management
  const [disableButton, setDisableButton] = useState(false)
  const [formData, setFormData] = useState(initialFormData)
  const [isFieldEmpty, setIsFieldEmpty] = useState(false)
  const [calculatedDiscount, setCalculatedDiscount] = useState<number>(0)
  const { showErrorToast } = useCustomToasts()

  const { name, image, oldPrice, newPrice, description, rate } = formData

  // Update a specific field in the form data
  const updateFormValue = (fieldName: string, fieldValue: any) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [fieldName]: fieldValue,
    }))
  }

  // Update the calculated discount based on old and new price values
  const updateDiscount = (oldPriceValue: number, newPriceValue: number) => {
    const newDiscount = calculateDiscount(oldPriceValue, newPriceValue)
    setCalculatedDiscount(newDiscount)
  }

  // Handles the change event for input fields
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target

      switch (name) {
        case 'oldPrice':
        case 'newPrice':
          const oldPriceValue = name === 'oldPrice' ? Number(value) : oldPrice
          const newPriceValue = name === 'newPrice' ? Number(value) : newPrice

          updateFormValue(name, Number(value))
          updateDiscount(oldPriceValue, newPriceValue)
          break
        case 'rate':
          updateFormValue(name, Number(value))
          break
        default:
          updateFormValue(name, value)
          break
      }
    },
    [oldPrice, newPrice]
  )

  // Handle image upload
  const handleImageUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      // Retrieve the selected file from the event target's files array
      const selectedFile: File | undefined = event.target?.files?.[0]
      if (selectedFile) {
        // Create a FileReader object
        const fileReader: FileReader = new FileReader()
        // Define the onload event handler for the FileReader
        fileReader.onload = () => {
          // Update the form data by setting the image field to the result of the FileReader
          setFormData(prevFormData => ({
            ...prevFormData,
            image: fileReader.result as string,
          }))
        }
        // Read the selected file as a data URL
        fileReader.readAsDataURL(selectedFile)
      }
    },
    []
  )

  // Handle form submission
  const submitForm = useCallback(async () => {
    // Check if all fields have a value
    const isValid: boolean = [
      name,
      image,
      oldPrice,
      newPrice,
      description,
      rate,
    ].every(Boolean)
    setIsFieldEmpty(!isValid)

    if (!isValid) {
      return
    }

    // Ensure a valid ID
    const newId = String(id)
    const newFormData = {
      id: newId,
      discount: calculatedDiscount,
      ...formData,
    }

    try {
      setDisableButton(true)
      switch (formType) {
        case MODAL.ADD:
          onAdd && (await onAdd(newFormData))
          break
        case MODAL.EDIT:
          onEdit && (await onEdit(newId, newFormData))
          break
        default:
          break
      }
    } catch (error) {
      showErrorToast('Error', `${NOTIFICATIONS.ERROR_WHILE_SUBMITTING}}`)
    } finally {
      setDisableButton(false)
    }
  }, [
    name,
    image,
    oldPrice,
    newPrice,
    description,
    rate,
    id,
    calculatedDiscount,
    formData,
    formType,
    onAdd,
    onEdit,
    showErrorToast,
  ])

  // Renders an error message if a field is empty
  const renderErrorMessage = (
    fieldName: keyof typeof formData,
    message: string
  ): string => {
    const isError =
      isFieldEmpty && (!formData[fieldName] || formData[fieldName] === 0)
    return isError ? message : ''
  }

  return (
    <>
      <Box
        as="form"
        className="form-content"
        color="primary"
        display="flex"
        flexDirection="column"
        gap={4}
      >
        {/* Input fields */}
        <InputField
          name="name"
          label="Name of product"
          value={name}
          onChange={handleChange}
          errorMessage={renderErrorMessage(
            'name',
            ERROR_MESSAGES.NAME_IS_MISSING
          )}
        />

        {/* Input fields */}
        <InputField
          name="oldPrice"
          label="Old price"
          value={oldPrice.toString()}
          onChange={handleChange}
          type="number"
          min={0}
          errorMessage={renderErrorMessage(
            'oldPrice',
            ERROR_MESSAGES.VALUE_IS_NOT_VALID
          )}
        />

        {/* Input fields */}
        <InputField
          name="newPrice"
          label="New price"
          value={newPrice.toString()}
          onChange={handleChange}
          type="number"
          min={0}
          errorMessage={renderErrorMessage(
            'newPrice',
            ERROR_MESSAGES.VALUE_IS_NOT_VALID
          )}
        />

        {/* Input fields */}
        <InputField
          name="rate"
          label="Rate"
          value={rate.toString()}
          onChange={handleChange}
          type="number"
          min={0}
          max={5}
          errorMessage={renderErrorMessage(
            'rate',
            ERROR_MESSAGES.RATE_NUMBER_IS_NOT_VALID
          )}
        />

        {/* Input fields */}
        <InputField
          variant="textarea"
          name="description"
          label="Description"
          value={description}
          onChange={handleChange}
          errorMessage={renderErrorMessage(
            'description',
            ERROR_MESSAGES.DESCRIPTION_IS_MISSING
          )}
        />

        {/* Image uploader */}
        <ImageUploader
          formData={{ image, name }}
          handleImageUpload={handleImageUpload}
          errorMessage={renderErrorMessage(
            'image',
            ERROR_MESSAGES.PRODUCT_IMAGE_IS_MISSING
          )}
        />
      </Box>

      {/* Control buttons */}
      <Box className="control-buttons" margin="20px 0">
        <Button
          onClick={submitForm}
          size="lg"
          className="submit-form-btn"
          aria-label="Submit form button"
          isLoading={disableButton}
          _hover={{ opacity: 1 }}
          variant={'secondary'}
        >
          {formType === MODAL.ADD ? 'ADD' : 'EDIT'}
        </Button>
      </Box>
    </>
  )
}

export default memo(Form)
