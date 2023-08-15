import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProductItem from './'

jest.mock('@assets/images/Image_not_available.webp', () => ({
  default: 'imageNotAvailable',
}))

describe('ProductItem Component', () => {
  const mockProduct = {
    id: 'P01',
    name: 'Sample Product',
    image: 'sample-image.jpg',
    discount: 11,
    oldPrice: 1263.8,
    newPrice: 1116.31,
    rate: 4.5,
    description: 'Sample description',
    category: 'Phone',
  }

  const mockWithoutImage = {
    id: 'P01',
    name: 'Sample Product',
    image: '',
    discount: 11,
    oldPrice: 1263.8,
    newPrice: 1116.31,
    rate: 4.5,
    description: 'Sample description',
    category: 'Phone',
  }

  it('renders product name', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ProductItem product={mockProduct} />
      </MemoryRouter>
    )

    const productName = getByText('Sample Product')
    expect(productName).toBeInTheDocument()
  })

  it('renders product image', () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <ProductItem product={mockProduct} />
      </MemoryRouter>
    )

    const productImage = getByAltText('Sample Product')
    expect(productImage).toBeInTheDocument()
    expect(productImage).toHaveAttribute('src', 'sample-image.jpg')
  })

  it('renders detail link', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ProductItem product={mockProduct} />
      </MemoryRouter>
    )

    const detailLink = getByText('detail')
    expect(detailLink).toBeInTheDocument()
    expect(detailLink).toHaveAttribute('href', '/products/P01')
  })

  it('matches the snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <ProductItem product={mockProduct} />
      </MemoryRouter>
    )
    expect(container).toMatchSnapshot()
  })

  it('renders imageNotAvailable when product image is not available', () => {
    const { container } = render(
      <MemoryRouter>
        <ProductItem product={mockWithoutImage} />,
      </MemoryRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
