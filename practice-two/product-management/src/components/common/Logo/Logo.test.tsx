import { render } from '@testing-library/react'
import Logo from '.'
import { MemoryRouter } from 'react-router-dom'

describe('Logo component', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    )
    expect(container).toMatchSnapshot()
  })

  it('renders text when text prop is provided', () => {
    const { container } = render(
      <MemoryRouter>
        <Logo text="My Logo" />
      </MemoryRouter>
    )
    expect(container).toMatchSnapshot()
  })

  it('renders image when imageSrc prop is provided', () => {
    const { container } = render(
      <MemoryRouter>
        <Logo imageSrc="logo.png" />
      </MemoryRouter>
    )
    expect(container).toMatchSnapshot()
  })

  it('applies custom text color and size', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Logo text="My Custom Logo" textColor="red" textSize="lg" />
      </MemoryRouter>
    )
    const logoText = getByText('My Custom Logo')
    expect(logoText).toHaveStyle('color: red')
    expect(logoText).toHaveStyle('font-size: 2em')
  })

  it('applies custom image width and height', () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <Logo imageSrc="logo.png" widthSize="150px" heightSize="50px" />
      </MemoryRouter>
    )
    const logoImage = getByAltText('The logo website')
    expect(logoImage).toHaveStyle('width: 150px')
    expect(logoImage).toHaveStyle('height: 50px')
  })

  it('renders both text and image when both props are provided', () => {
    const { getByText, getByAltText } = render(
      <MemoryRouter>
        <Logo text="My Combo Logo" imageSrc="logo.png" />
      </MemoryRouter>
    )
    expect(getByText('My Combo Logo')).toBeInTheDocument()
    expect(getByAltText('The logo website')).toBeInTheDocument()
  })
})
