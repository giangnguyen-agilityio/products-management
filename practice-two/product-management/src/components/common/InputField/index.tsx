// Libraries
import React, { InputHTMLAttributes, memo } from 'react'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react'

// Define the props interface for the InputField component
interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'input' | 'textarea'
  name: string
  label: string
  value?: string | number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  errorMessage?: string
  isReadOnly?: boolean
  min?: number
  max?: number
}

// Custom deep comparison function for props
export function arePropsEqual(
  prevProps: InputFieldProps,
  nextProps: InputFieldProps
) {
  return (
    prevProps.variant === nextProps.variant &&
    prevProps.name === nextProps.name &&
    prevProps.label === nextProps.label &&
    prevProps.value === nextProps.value &&
    prevProps.errorMessage === nextProps.errorMessage &&
    prevProps.isReadOnly === nextProps.isReadOnly &&
    prevProps.min === nextProps.min &&
    prevProps.max === nextProps.max
  )
}

const InputField: React.FC<InputFieldProps> = ({
  variant = 'input',
  name,
  label,
  value,
  onChange,
  type = 'text',
  errorMessage,
  isReadOnly,
  min,
  max,
}) => (
  <FormControl className="input-field" isRequired isInvalid={!!errorMessage}>
    {/* Form Label */}
    <FormLabel
      className="form-label"
      fontFamily="Oswald-Regular"
      fontSize="mediumLarge"
      letterSpacing="1px"
    >
      {label}:
    </FormLabel>

    {/* Input field */}
    <Input
      as={variant}
      readOnly={isReadOnly}
      variant="primary"
      padding={2}
      height={variant === 'textarea' ? '100px' : '45px'}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      aria-label="Input Field"
    />

    {/* Error message */}
    {errorMessage && (
      <FormErrorMessage color="error">{errorMessage}</FormErrorMessage>
    )}
  </FormControl>
)

export default memo(InputField, arePropsEqual)
