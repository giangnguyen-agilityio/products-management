import React, { memo, useState, useCallback, useEffect, useMemo } from 'react'
import { Box, Button } from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid'
import { ERROR_MESSAGES, MODAL } from '@constants'
import { IProduct } from '@types'
import InputField from '@components/common/InputField'
import ImageUploader from '@components/common/ImageUploader'

// Define props interface for the Form component
interface FormProps {
  id?: string
  formType: MODAL.ADD | MODAL.EDIT
  onAdd: (formData: IProduct) => void
  onEdit: (id: string, formData: IProduct) => void
  productData?: IProduct
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
  const [calculatedDiscount, setCalculatedDiscount] = useState<number>(0)

  // Populate form data if editing an existing product
  useEffect(() => {
    if (formType === MODAL.EDIT && id !== '' && productData) {
      setFormData(prevFormData => ({
        ...prevFormData,
        name: productData.name,
        image: productData.image ?? '',
        oldPrice: productData.oldPrice,
        newPrice: productData.newPrice,
        description: productData.description,
        rate: productData.rate,
      }))
    }
  }, [formType, id, productData])

  // Handle form input changes
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target

      // Update the form data
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]:
          name === 'oldPrice' || name === 'newPrice' || name === 'rate'
            ? Number(value)
            : value,
      }))

      // Calculate and update the discount
      if (name === 'oldPrice' || name === 'newPrice') {
        const oldPriceValue =
          name === 'oldPrice' ? Number(value) : formData.oldPrice
        const newPriceValue =
          name === 'newPrice' ? Number(value) : formData.newPrice

        const calculatedDiscountValue =
          oldPriceValue > 0
            ? ((oldPriceValue - newPriceValue) / oldPriceValue) * 100
            : 0

        // Ensure that the calculated discount is non-negative
        const nonNegativeDiscount = Math.max(
          Math.round(calculatedDiscountValue),
          0
        )
        setCalculatedDiscount(nonNegativeDiscount)
      }
    },
    [formData.oldPrice, formData.newPrice]
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

  // Generate random product ID
  const randomId: string = uuidv4()
  const productId: string = `P${randomId}`

  // Handle form submission
  const submitForm = async (): Promise<void> => {
    const { name, image, oldPrice, newPrice, description, rate } = formData

    // Check if all fields have a value using the every() method and store the result in isValid
    const isValid: boolean = [
      name,
      image,
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
      discount: calculatedDiscount,
      ...formData,
    }
    setDisableButton(true)

    // If all fields have values, call the onAdd() function or onEdit() function depending on the formType
    if (isValid) {
      formType === MODAL.ADD ? onAdd(newFormData) : onEdit(newId, newFormData)
    }
    setDisableButton(false)
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
          colorScheme="blue"
          className="submit-form-btn"
          isLoading={disableButton}
          isDisabled={disableButton}
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
