import React, { memo } from 'react'
import { FormControl, FormLabel, Input, Image, Text } from '@chakra-ui/react'

// Define the prop types for the ImageUploader component
interface ImageUploaderProps {
  formData: {
    image: string
    name: string
  }
  handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void
  errorMessage: string
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  formData,
  handleImageUpload,
  errorMessage,
}) => (
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
      variant="primary"
      padding={2}
      height="45px"
      name="image"
      type="file"
      accept="image/*"
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
        src={formData.image}
        alt={`The ${formData.name} image`}
      />
    )}
    {/* Display an error message if the image is missing */}
    {/* Error message */}
    {errorMessage != null && <Text variant="danger">{errorMessage}</Text>}
  </FormControl>
)

export default memo(ImageUploader)
