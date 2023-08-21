import React, { InputHTMLAttributes, memo } from 'react'
import { FormControl, FormLabel, Input, Text } from '@chakra-ui/react'

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
  <FormControl className="input-field" isRequired>
    {/* Form Label */}
    <FormLabel
      className="form-label"
      fontFamily="Oswald-Regular"
      fontSize="xl"
      letterSpacing="1px"
    >
      {label}:
    </FormLabel>

    {/* Input field */}
    <Input
      readOnly={isReadOnly}
      variant="primary"
      as={variant}
      padding={2}
      height={variant === 'textarea' ? '100px' : '45px'}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
    />

    {/* Error message */}
    {errorMessage != null && <Text variant="danger">{errorMessage}</Text>}
  </FormControl>
)

export default memo(InputField)
