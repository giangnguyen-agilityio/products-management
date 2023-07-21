import React from 'react'
import {render} from '@testing-library/react'
import EmptyProductList from '.'

jest.mock('@assets/images/error-image.png', () => ({
  default: 'mocked-error-image',
}))

describe('EmptyProductList component', () => {
  it('should renders correctly with error message prop and the error image', () => {
    const errorMessage = 'This is an error message'
    const {container} = render(<EmptyProductList errorMessage={errorMessage} />)

    // Assert that the component renders the error message
    expect(container).toHaveTextContent(errorMessage)

    // Assert that the component renders the mocked image correctly
    const imgElement = container.querySelector('img')
    expect(imgElement).toBeInTheDocument()
    expect(imgElement?.getAttribute('src')).toBe('mocked-error-image')

    // Snapshot testing
    expect(container).toMatchSnapshot()
  })
})
