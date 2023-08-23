import { render } from '@testing-library/react'
import EmptyProduct from './'

describe('EmptyProduct Component', () => {
  jest.mock('@assets/images/error-image.webp', () => ({
    default: 'errorImage',
  }))

  it('renders without error message', () => {
    const { container, getByAltText } = render(<EmptyProduct />)

    const errorImageElement = getByAltText('This is the error image')

    expect(errorImageElement).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('renders with error message', () => {
    const errorMessage = 'Sample Error Message'
    const { container, getByAltText, getByText } = render(
      <EmptyProduct errorMessage={errorMessage} />
    )

    const errorImageElement = getByAltText('This is the error image')
    const errorTitleElement = getByText(errorMessage)

    expect(errorImageElement).toBeInTheDocument()
    expect(errorTitleElement).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
