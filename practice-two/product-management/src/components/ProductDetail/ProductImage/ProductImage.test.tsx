import { render } from '@testing-library/react'
import ProductImage from './'

jest.mock('@assets/images/Image_not_available.webp', () => ({
  default: 'imageNotAvailable',
}))

describe('ProductImage Component', () => {
  it('renders with a valid source', () => {
    const { getByAltText } = render(<ProductImage src="valid-image-url.jpg" />)
    const imageElement = getByAltText('The product image')
    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute('src', 'valid-image-url.jpg')
  })

  it('renders with the default image when source is null', () => {
    const { getByAltText } = render(<ProductImage src={null} />)
    const imageElement = getByAltText('The product image')
    expect(imageElement).toBeInTheDocument()
    expect(imageElement).not.toHaveAttribute(
      'src',
      '@assets/images/Image_not_available.webp'
    )
  })

  it('renders with the default image when source is empty', () => {
    const { getByAltText } = render(<ProductImage src="" />)
    const imageElement = getByAltText('The product image')
    expect(imageElement).toBeInTheDocument()
    expect(imageElement).not.toHaveAttribute(
      'src',
      '@assets/images/Image_not_available.webp'
    )
  })

  it('renders with the correct height based on screen size', () => {
    const { container } = render(<ProductImage src="valid-image-url.jpg" />)
    expect(container).toMatchSnapshot()
  })
})
