import { render, fireEvent } from '@testing-library/react'
import ImageUploader from './'

describe('ImageUploader component', () => {
  const formData = {
    image: 'test-image-url',
    name: 'Test Image',
  }

  it('renders without errors', () => {
    const { container, getByText, getByLabelText, getByAltText } = render(
      <ImageUploader
        formData={formData}
        handleImageUpload={jest.fn()}
        errorMessage=""
      />
    )

    const imageInputLabel = getByText('Image:')
    const imageInput = getByLabelText('Upload Image')
    const uploadedImage = getByAltText('The Test Image image')

    expect(imageInputLabel).toBeInTheDocument()
    expect(imageInput).toBeInTheDocument()
    expect(uploadedImage).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('displays an error message', () => {
    const { getByText } = render(
      <ImageUploader
        formData={formData}
        handleImageUpload={jest.fn()}
        errorMessage="Image is required"
      />
    )

    const errorMessage = getByText('Image is required')
    expect(errorMessage).toBeInTheDocument()
  })

  it('calls handleImageUpload when an image is selected', () => {
    const handleImageUploadMock = jest.fn()
    const { getByLabelText } = render(
      <ImageUploader
        formData={formData}
        handleImageUpload={handleImageUploadMock}
        errorMessage=""
      />
    )

    const imageInput = getByLabelText('Upload Image')
    fireEvent.change(imageInput, {
      target: {
        files: [
          new File(['image content'], 'test-image.png', { type: 'image/png' }),
        ],
      },
    })

    expect(handleImageUploadMock).toHaveBeenCalled()
  })
})
