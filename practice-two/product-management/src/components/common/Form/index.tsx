import React, { memo, useState, useCallback, useEffect, useMemo } from 'react'
import { Box, Button } from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid'
import { MODAL } from '@constants'
import { IProduct } from '@types'
import InputField from './InputField'
import ImageUploader from './ImageUploader'
import { ERROR_MESSAGES } from '@constants/messages'

// Define props interface for the Form component
interface FormProps {
  id: string | undefined
  formType: MODAL.ADD | MODAL.EDIT
  onAdd: (formData: IProduct) => void
  onEdit: (id: string, formData: IProduct) => void
  productData: IProduct | undefined
}

// Define the Form component
const Form: React.FC<FormProps> = ({
  id,
  formType,
  onAdd,
  onEdit,
  productData,
}) => {
  // Define default form data using useMemo
  const defaultFormData = useMemo(
    () => ({
      name: '',
      image: '',
      discount: 0,
      oldPrice: 0,
      newPrice: 0,
      description: '',
      rate: 0,
    }),
    []
  )

  // State management
  const [disableButton, setDisableButton] = useState(false)
  const [formData, setFormData] = useState(defaultFormData)
  const [isFieldEmpty, setIsFieldEmpty] = useState(false)

  // Populate form data if editing an existing product
  useEffect(() => {
    if (formType === MODAL.EDIT && id !== '' && productData) {
      setFormData(prevFormData => ({
        ...prevFormData,
        name: productData.name,
        image: productData.image ?? '',
        discount: productData.discount,
        oldPrice: productData.oldPrice,
        newPrice: productData.newPrice,
        description: productData.description,
        rate: productData.rate,
      }))
    }
  }, [formType, id, productData])

  // Handle form input changes
  const handleChange = useCallback(
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
      const { name, value } = event.target
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]:
          name === 'discount' ||
          name === 'oldPrice' ||
          name === 'newPrice' ||
          name === 'rate'
            ? Number(value)
            : value,
      }))
    },
    []
  )

  // Handle image upload
  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const selectedFile: File | undefined = event.target?.files?.[0]
    if (selectedFile) {
      const fileReader: FileReader = new FileReader()
      fileReader.onload = () => {
        setFormData(prevFormData => ({
          ...prevFormData,
          image: fileReader.result as string,
        }))
      }
      fileReader.readAsDataURL(selectedFile)
    }
  }

  // Generate random product ID
  const randomId: string = uuidv4()
  const productId: string = `P${randomId}`

  // Handle form submission
  const submitForm = async (): Promise<void> => {
    const { name, image, discount, oldPrice, newPrice, description, rate } =
      formData

    const isValid: boolean = [
      name,
      image,
      discount,
      oldPrice,
      newPrice,
      description,
      rate,
    ].every(Boolean)
    setIsFieldEmpty(!isValid)

    // Ensure a valid ID
    const newId = formType === MODAL.ADD ? productId : id || ''

    const newFormData = {
      id: newId,
      ...formData,
    }

    setDisableButton(true)

    if (isValid) {
      console.log(newFormData)
      formType === MODAL.ADD ? onAdd(newFormData) : onEdit(newId, newFormData)
    }

    setDisableButton(false)
  }

  // Render error messages for empty fields
  const renderErrorMessage = (
    fieldName: keyof typeof formData,
    message: string
  ): string =>
    isFieldEmpty && (formData[fieldName] === '' || formData[fieldName] === 0)
      ? message
      : ''

  // JSX rendering
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
          value={formData.name}
          onChange={handleChange}
          errorMessage={renderErrorMessage(
            'name',
            ERROR_MESSAGES.NAME_IS_MISSING
          )}
        />

        {/* Input fields */}
        <InputField
          name="discount"
          label="Discount"
          value={formData.discount.toString()}
          onChange={handleChange}
          type="number"
          errorMessage={renderErrorMessage(
            'discount',
            ERROR_MESSAGES.VALUE_IS_NOT_VALID
          )}
        />

        {/* Input fields */}
        <InputField
          name="oldPrice"
          label="Old price"
          value={formData.oldPrice.toString()}
          onChange={handleChange}
          type="number"
          errorMessage={renderErrorMessage(
            'oldPrice',
            ERROR_MESSAGES.VALUE_IS_NOT_VALID
          )}
        />

        {/* Input fields */}
        <InputField
          name="newPrice"
          label="New price"
          value={formData.newPrice.toString()}
          onChange={handleChange}
          type="number"
          errorMessage={renderErrorMessage(
            'newPrice',
            ERROR_MESSAGES.VALUE_IS_NOT_VALID
          )}
        />

        {/* Input fields */}
        <InputField
          name="rate"
          label="Rate"
          value={formData.rate.toString()}
          onChange={handleChange}
          type="number"
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
          value={formData.description}
          onChange={handleChange}
          errorMessage={renderErrorMessage(
            'description',
            ERROR_MESSAGES.DESCRIPTION_IS_MISSING
          )}
        />

        {/* Image uploader */}
        <ImageUploader
          formData={formData}
          handleImageUpload={handleImageUpload}
        />
      </Box>

      {/* Control buttons */}
      <Box className="control-buttons" margin="20px 0">
        <Button
          onClick={submitForm}
          size="lg"
          colorScheme="blue"
          className="submit-form-btn"
          isLoading={disableButton}
          color="textSecondary"
          backgroundColor="blue.300"
          _hover={{
            backgroundColor: 'blue.600',
          }}
        >
          {formType === MODAL.ADD ? 'ADD' : 'EDIT'}
        </Button>
      </Box>
    </>
  )
}

export default memo(Form)
