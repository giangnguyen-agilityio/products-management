import { render } from '@testing-library/react'
import ProductListHeader from '.'

describe('ProductListHeader Component', () => {
  it('renders the title "All Products"', () => {
    const { getByText } = render(<ProductListHeader />)
    const titleElement = getByText('All Products')
    expect(titleElement).toBeInTheDocument()
  })

  it('renders the maxim text', () => {
    const { getByText } = render(<ProductListHeader />)
    const maximText = getByText('Complete range of products for all your needs')
    expect(maximText).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<ProductListHeader />)
    expect(asFragment()).toMatchSnapshot()
  })
})
