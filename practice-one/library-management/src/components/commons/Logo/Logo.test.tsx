import React from 'react'
import {render} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import * as helpers from '@helpers'
import Logo from '.'

// Mocking the module containing getItemInLocalStorage
jest.mock('@helpers', () => ({
  getItemInLocalStorage: jest.fn(),
}))

describe('Logo component', () => {
  const logoProps = {
    text: 'Test Logo',
    imageSrc: 'test-image.png',
    altText: 'Test Alt Text',
    widthSize: 100,
    heightSize: 100,
  }

  it('should renders with Link when isMember is truthy', () => {
    // Mocking getItemInLocalStorage to return a truthy value
    jest.spyOn(helpers, 'getItemInLocalStorage').mockReturnValue('M01')

    const {container, getByText} = render(
      <MemoryRouter>
        <Logo {...logoProps} />
      </MemoryRouter>
    )

    // The component should render with <Link>
    expect(container.querySelector('a')).toBeInTheDocument()
    expect(container.querySelector('.logo')).toBeInTheDocument()
    expect(getByText('Test Logo')).toBeInTheDocument()
    expect(container.querySelector('img')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should renders without Link when isMember is falsy', () => {
    // Mocking getItemInLocalStorage to return a falsy value
    jest.spyOn(helpers, 'getItemInLocalStorage').mockReturnValue(null)

    const {container} = render(
      <MemoryRouter>
        <Logo {...logoProps} />
      </MemoryRouter>
    )

    // The component should not render with <Link>
    expect(container.querySelector('a')).not.toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should render the image with the default width and height when not provided', () => {
    const {container} = render(
      <MemoryRouter>
        <Logo
          text="Test Logo"
          imageSrc="test-image.png"
          altText="Test Alt Text"
        />
      </MemoryRouter>
    )

    // The component should render with default width and height of 50px
    const logoImage = container.querySelector('img')
    expect(container).toMatchSnapshot()
    expect(logoImage?.style.width).toBe('50px')
    expect(logoImage?.style.height).toBe('50px')
  })
})
