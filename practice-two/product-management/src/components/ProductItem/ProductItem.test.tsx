import { render } from '@testing-library/react'
import ProductItem from '.'

jest.mock('@assets/images/Image_not_available.webp', () => ({
  default: 'imageNotAvailable',
}))

const mockProduct = {
  id: 'ID01',
  name: 'Sample Product',
  image: 'sample-image.jpg',
}

describe('ProductItem Component', () => {
  it('renders product name correctly', () => {
    const { getByText } = render(<ProductItem product={mockProduct} />)
    const productName = getByText('Sample Product')
    expect(productName).toBeInTheDocument()
  })

  it('renders default image if product image is not available', () => {
    const { container } = render(
      <ProductItem product={{ ...mockProduct, image: '' }} />
    )
    expect(container).toMatchSnapshot()
  })

  it('renders link with correct text', () => {
    const { getByText } = render(<ProductItem product={mockProduct} />)
    const detailLink = getByText('detail')
    expect(detailLink).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { container } = render(<ProductItem product={mockProduct} />)
    expect(container).toMatchSnapshot()
  })
})
