import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import {AiFillCheckCircle} from 'react-icons/ai'
import Button from '.'

describe('Button Component', () => {
  it('renders a button with correct default variant and size', () => {
    const {getByRole} = render(<Button className="test-button" />)
    const button = getByRole('button')

    expect(button).toMatchSnapshot()
  })

  it('renders with the correct icon', () => {
    const {queryByRole} = render(
      <Button className="test-button">
        <AiFillCheckCircle />
      </Button>
    )
    const buttonElement = queryByRole('button')
    expect(buttonElement).toBeInTheDocument()
    if (buttonElement) {
      expect(buttonElement).toContainElement(document.querySelector('svg')!)
    }
  })

  it('renders a button with custom variant and size', () => {
    const {getByRole} = render(
      <Button className="test-button" variant="secondary" size="large" />
    )
    const button = getByRole('button')

    expect(button).toMatchSnapshot()
  })

  it('calls onClick when button is clicked', () => {
    const onClickMock = jest.fn()
    const {getByRole} = render(
      <Button className="test-button" onClick={onClickMock} />
    )
    const button = getByRole('button')

    fireEvent.click(button)

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it('renders a disabled button', () => {
    const {getByRole} = render(<Button className="test-button" disabled />)
    const button = getByRole('button')

    expect(button).toBeDisabled()
  })

  it('renders button with children', () => {
    const buttonText = 'Click Me'
    const {getByText} = render(
      <Button className="test-button">{buttonText}</Button>
    )
    const button = getByText(buttonText)

    expect(button).toBeInTheDocument()
  })

  it('renders button with custom size class name', () => {
    const size = 'small'
    const {getByRole} = render(<Button className="test-button" size={size} />)
    const button = getByRole('button')

    expect(button).toHaveClass(`btn-${size}`)
  })

  it('renders button with custom variant class name', () => {
    const variant = 'warning'
    const {getByRole} = render(
      <Button className="test-button" variant={variant} />
    )
    const button = getByRole('button')

    expect(button).toHaveClass(`btn-${variant}`)
  })

  it('renders without error', () => {
    render(<Button className="test-button" />)
  })

  it('renders button with default props', () => {
    const {getByRole} = render(<Button className="test-button" />)
    const button = getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('btn')
    expect(button).toHaveClass('btn-primary')
    expect(button).toHaveClass('btn-medium')
    expect(button).not.toHaveAttribute('disabled')
    expect(button).toMatchSnapshot()
  })

  it('renders button with custom size and variant', () => {
    const {getByRole} = render(
      <Button className="test-button" size="large" variant="secondary">
        Custom Button
      </Button>
    )
    const button = getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('btn')
    expect(button).toHaveClass('btn-secondary')
    expect(button).toHaveClass('btn-large')
    expect(button).not.toHaveAttribute('disabled')
  })

  it('triggers onClick handler when clicked', () => {
    const handleClick = jest.fn()
    const {getByRole} = render(
      <Button className="test-button" onClick={handleClick}>
        Click me
      </Button>
    )
    const button = getByRole('button')

    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
