import { render, fireEvent } from '@testing-library/react'
import InputField from './'

describe('InputField components', () => {
  const onChangeMock = jest.fn()

  const defaultProps = {
    name: 'testField',
    label: 'Test Field',
    onChange: onChangeMock,
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
    expect(onChangeMock).toHaveBeenCalledTimes(1)
  })

  it('renders a textarea when variant is set to "textarea"', () => {
    const { getByLabelText } = render(
      <InputField {...defaultProps} variant="textarea" />
    )
    const textarea = getByLabelText('Input Field')
    expect(textarea.tagName.toLowerCase()).toBe('textarea')
  })
})
