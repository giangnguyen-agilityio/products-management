import React, { render } from '@testing-library/react'
import Logo from '.'

describe('Logo component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Logo />)
    expect(container).toMatchSnapshot()
  })

  it('renders text when text prop is provided', () => {
    const { container } = render(<Logo text="My Logo" />)
    expect(container).toMatchSnapshot()
  })

  it('renders image when imageSrc prop is provided', () => {
    const { container } = render(<Logo imageSrc="logo.png" />)
    expect(container).toMatchSnapshot()
  })

  it('applies custom text color and size', () => {
    const { getByText } = render(
      <Logo text="My Custom Logo" textColor="red" textSize="lg" />
    )
    const logoText = getByText('My Custom Logo')
    expect(logoText).toHaveStyle('color: red')
    expect(logoText).toHaveStyle('font-size: 2em')
  })

  it('applies custom image width and height', () => {
    const { getByAltText } = render(
      <Logo imageSrc="logo.png" widthSize="150px" heightSize="50px" />
    )
    const logoImage = getByAltText('The logo website')
    expect(logoImage).toHaveStyle('width: 150px')
    expect(logoImage).toHaveStyle('height: 50px')
  })

  it('renders both text and image when both props are provided', () => {
    const { getByText, getByAltText } = render(
      <Logo text="My Combo Logo" imageSrc="logo.png" />
    )
    expect(getByText('My Combo Logo')).toBeInTheDocument()
    expect(getByAltText('The logo website')).toBeInTheDocument()
  })
})
