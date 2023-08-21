import { render } from '@testing-library/react'
import ProductDesc from './'

describe('ProductDesc Component', () => {
  const mockProductDesc = 'Mock Product Description'

  it('renders product description correctly', () => {
    const { getByText } = render(<ProductDesc productDesc={mockProductDesc} />)

    const descriptionElement = getByText(mockProductDesc)
    expect(descriptionElement).toBeInTheDocument()
  })

  it('renders title "Overview"', () => {
    const { getByText } = render(<ProductDesc productDesc={mockProductDesc} />)

    const titleElement = getByText('Overview')
    expect(titleElement).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<ProductDesc productDesc={mockProductDesc} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
