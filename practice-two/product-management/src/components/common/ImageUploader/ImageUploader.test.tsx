import { render, fireEvent } from '@testing-library/react'
import ImageUploader, { arePropsEqual } from './'

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
    const { container } = render(
      <ImageUploader
        formData={formData}
        handleImageUpload={jest.fn()}
        errorMessage="Image is required"
      />
    )

    expect(container).toMatchSnapshot()
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

  it('should return true for equal props', () => {
    const prevProps = {
      formData: {
        image: 'image-url',
        name: 'Image Name',
      },
      errorMessage: 'Error message',
      handleImageUpload: () => {},
    }

    const nextProps = {
      formData: {
        image: 'image-url',
        name: 'Image Name',
      },
      errorMessage: 'Error message',
      handleImageUpload: () => {},
    }

    const result = arePropsEqual(prevProps, nextProps)
    expect(result).toBe(true)
  })

  it('should return false for different props', () => {
    const prevProps = {
      formData: {
        image: 'image-url',
        name: 'Image Name',
      },
      errorMessage: 'Error message',
      handleImageUpload: () => {},
    }

    const nextProps = {
      formData: {
        image: 'different-image-url',
        name: 'Image Name',
      },
      errorMessage: 'Different error message',
      handleImageUpload: () => {},
    }

    const result = arePropsEqual(prevProps, nextProps)
    expect(result).toBe(false)
  })
})
