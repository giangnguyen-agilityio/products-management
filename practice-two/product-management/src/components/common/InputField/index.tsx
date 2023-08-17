import React, { InputHTMLAttributes, memo } from 'react'
import { FormControl, FormLabel, Input, Text } from '@chakra-ui/react'

// Define the props interface for the InputField component
interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'input' | 'textarea'
  name: string
  label: string
  value: string | number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  errorMessage?: string
  isReadOnly?: boolean
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
      as={variant}
      border="1px solid"
      _hover={{ borderColor: 'gray.300' }}
      _focus={{ borderColor: 'primary' }}
      borderColor="gray.300"
      backgroundColor="background"
      padding={2}
      borderRadius="6px"
      height={variant === 'textarea' ? '100px' : '45px'}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />

    {/* Error message */}
    {errorMessage != null && (
      <Text color="red" fontFamily="OpenSans-Regular">
        {errorMessage}
      </Text>
    )}
  </FormControl>
)

export default memo(InputField)
