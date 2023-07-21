import React, {InputHTMLAttributes} from 'react'
import {render, fireEvent} from '@testing-library/react'
import Input from '.'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  label?: string
  className?: string
  classNameLabel?: string
  value?: string | number
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  errorMessage?: string
  type?: string
  min?: number
  accept?: string
  placeholder?: string
}

const renderInput = (props: InputProps) => {
  return render(<Input {...props} />)
}

describe('Input Component', () => {
  it('should render Input component with basic props', () => {
    const {container, getByPlaceholderText} = renderInput({
      label: 'Username',
      name: 'username',
      placeholder: 'Enter your username',
    })

    const inputElement = container.querySelector('input')
    const placeholderElement = getByPlaceholderText('Enter your username')

    expect(inputElement).toBeInTheDocument()
    expect(placeholderElement).toBeInTheDocument()
    expect(inputElement?.tagName).toBe('INPUT')

    expect(inputElement).toMatchSnapshot()
  })

  it('should render Input component with a custom className for the label', () => {
    const {container} = renderInput({
      label: 'Email',
      name: 'email',
      classNameLabel: 'custom-label',
    })

    const labelElement = container.querySelector('label')

    expect(labelElement).toBeInTheDocument()
    expect(labelElement?.classList).toContain('custom-label')

    expect(labelElement).toMatchSnapshot()
  })

  it('should render Input component with an error message', () => {
    const {getByText} = renderInput({
      label: 'Age',
      name: 'age',
      errorMessage: 'Age must be a number',
    })

    const errorMessageElement = getByText('Age must be a number')
    expect(errorMessageElement).toBeInTheDocument()

    expect(errorMessageElement).toMatchSnapshot()
  })

  it('should fire onChange event when input value changes', () => {
    const mockOnChange = jest.fn()
    const {container} = renderInput({
      label: 'Password',
      name: 'password',
      type: 'password',
      onChange: mockOnChange,
    })

    const inputElement = container.querySelector('input')
    fireEvent.change(inputElement!, {target: {value: 'newPassword'}})

    expect(mockOnChange).toHaveBeenCalledTimes(1)
    expect(inputElement?.type).toBe('password')
    expect(inputElement?.value).toBe('newPassword')

    expect(container).toMatchSnapshot()
  })

  it('should render Input component with type, min, and accept attributes', () => {
    const {container} = renderInput({
      label: 'Upload File',
      name: 'file',
      type: 'file',
      min: 1,
      accept: '.jpg,.png',
    })

    const inputElement = container.querySelector('input')

    expect(inputElement).toBeInTheDocument()
    expect(inputElement?.type).toBe('file')
    expect(inputElement?.min).toBe('1')
    expect(inputElement?.accept).toBe('.jpg,.png')

    expect(inputElement).toMatchSnapshot()
  })
})
