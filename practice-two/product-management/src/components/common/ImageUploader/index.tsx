// Libraries
import React, { memo } from 'react'
import {
  Input,
  Image,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react'

// Define the prop types for the ImageUploader component
interface ImageUploaderProps {
  formData: {
    image: string | null
    name: string
  }
  handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void
  errorMessage: string
}

// Custom deep comparison function for props
export function arePropsEqual(
  prevProps: ImageUploaderProps,
  nextProps: ImageUploaderProps
) {
  return (
    prevProps.formData.image === nextProps.formData.image &&
    prevProps.formData.name === nextProps.formData.name &&
    prevProps.errorMessage === nextProps.errorMessage
  )
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  formData,
  handleImageUpload,
  errorMessage,
}) => {
  const { image, name } = formData

  return (
    <FormControl className="input-field image-uploaded" isRequired>
      {/* Label for the image input */}
      <FormLabel
        className="form-label"
        fontFamily="Oswald-Regular"
        fontSize="xl"
        letterSpacing="1px"
      >
        Image:
      </FormLabel>
      {/* Input field for uploading an image */}
      <Input
        aria-label="Upload Image"
        variant="primary"
        padding={2}
        height="45px"
        name="image"
        type="file"
        accept=".png, .jpg, .jpeg, .webp"
        onChange={handleImageUpload}
      />
      {/* Display the uploaded image */}
      {formData.image && (
        <Image
          margin="10px 0"
          padding={4}
          border="1px solid"
          borderColor="primary"
          borderRadius={20}
          width="350px"
          objectFit="contain"
          className="image-uploaded"
          src={image!}
          alt={`The ${name} image`}
        />
      )}
      {/* Display an error message if the image is missing */}
      {errorMessage && (
        <FormErrorMessage color="error">{errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  )
}
export default memo(ImageUploader)
