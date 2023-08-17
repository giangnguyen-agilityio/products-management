import React, { memo, useState, useCallback, useEffect, useMemo } from 'react'
import { Box, Button } from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid'
import { MODAL } from '@constants'
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
    (event: React.ChangeEvent<HTMLInputElement>) => {
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
  const handleImageUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
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
    },
    []
  )

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
      formType === MODAL.ADD ? onAdd(newFormData) : onEdit(newId, newFormData)
    }
    setDisableButton(false)
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
          isInvalid={isFieldEmpty}
          name="name"
          label="Name of product"
          value={formData.name}
          onChange={handleChange}
        />

        {/* Input fields */}
        <InputField
          isInvalid={isFieldEmpty}
          name="discount"
          label="Discount"
          value={formData.discount.toString()}
          onChange={handleChange}
          type="number"
          min={0}
        />

        {/* Input fields */}
        <InputField
          isInvalid={isFieldEmpty}
          name="oldPrice"
          label="Old price"
          value={formData.oldPrice.toString()}
          onChange={handleChange}
          type="number"
        />

        {/* Input fields */}
        <InputField
          isInvalid={isFieldEmpty}
          name="newPrice"
          label="New price"
          value={formData.newPrice.toString()}
          onChange={handleChange}
          type="number"
        />

        {/* Input fields */}
        <InputField
          isInvalid={isFieldEmpty}
          name="rate"
          label="Rate"
          value={formData.rate.toString()}
          onChange={handleChange}
          type="number"
        />

        {/* Input fields */}
        <InputField
          isInvalid={isFieldEmpty}
          variant="textarea"
          name="description"
          label="Description"
          value={formData.description}
          onChange={handleChange}
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
