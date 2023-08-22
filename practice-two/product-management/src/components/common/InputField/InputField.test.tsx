import { render, screen, fireEvent } from '@testing-library/react'
import InputField, { arePropsEqual } from './'

describe('InputField Component', () => {
  const defaultProps = {
    name: 'test',
    label: 'Test Label',
    value: 'initial value',
    onChange: jest.fn(),
    errorMessage: 'Error message',
    isReadOnly: false,
    min: 0,
    max: 10,
  }

  it('renders the component with default props', () => {
    const { container, getByLabelText } = render(
      <InputField {...defaultProps} />
    )
    const input = getByLabelText('Input Field')
    expect(input).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('renders an error message when errorMessage prop is provided', () => {
    const { getByText } = render(
      <InputField {...defaultProps} errorMessage="This is an error" />
    )
    const errorMessage = getByText('This is an error')
    expect(errorMessage).toBeInTheDocument()
  })

  it('calls the onChange function when input value changes', () => {
    const { getByLabelText } = render(<InputField {...defaultProps} />)
    const input = getByLabelText('Input Field')

    fireEvent.change(input, { target: { value: 'New Value' } })
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1)
  })

  it('renders a textarea when variant is set to "textarea"', () => {
    const { getByLabelText } = render(
      <InputField {...defaultProps} variant="textarea" />
    )
    const textarea = getByLabelText('Input Field')
    expect(textarea.tagName.toLowerCase()).toBe('textarea')
    expect(textarea).toBeInTheDocument()
    expect(textarea).toHaveStyle('height: 100px')
  })

  it('renders error message when errorMessage prop is provided', () => {
    render(<InputField {...defaultProps} />)
    const errorMessage = screen.getByText(defaultProps.errorMessage)
    expect(errorMessage).toBeInTheDocument()
  })

  it('renders with correct input type', () => {
    render(<InputField {...defaultProps} type="number" />)
    const input = screen.getByLabelText('Input Field')
    expect(input).toHaveAttribute('type', 'number')
  })

  it('displays readOnly input when isReadOnly prop is true', () => {
    render(<InputField {...defaultProps} isReadOnly />)
    const input = screen.getByLabelText('Input Field')
    expect(input).toHaveAttribute('readonly')
  })

  it('renders input with min and max attributes when provided', () => {
    render(<InputField {...defaultProps} />)
    const input = screen.getByLabelText('Input Field')
    expect(input).toHaveAttribute('min', defaultProps.min.toString())
    expect(input).toHaveAttribute('max', defaultProps.max.toString())
  })

  it('does not render error message when errorMessage prop is not provided', () => {
    render(<InputField {...defaultProps} errorMessage="" />)
    const errorMessage = screen.queryByText(defaultProps.errorMessage)
    expect(errorMessage).toBeNull()
  })

  it('should return true for equal props', () => {
    const prevProps = {
      name: 'username',
      label: 'Username',
      value: 'testuser',
      errorMessage: 'Invalid input',
      isReadOnly: false,
      min: 0,
      max: 10,
      onChange: () => {},
    }

    const nextProps = { ...prevProps }

    expect(arePropsEqual(prevProps, nextProps)).toBe(true)
  })

  it('should return false for different props', () => {
    const prevProps = {
      name: 'username',
      label: 'Username',
      value: 'testuser',
      errorMessage: 'Invalid input',
      isReadOnly: false,
      min: 0,
      max: 10,
      onChange: () => {},
    }

    const nextProps = {
      ...prevProps,
      value: 'updateduser',
    }

    expect(arePropsEqual(prevProps, nextProps)).toBe(false)
  })
})
