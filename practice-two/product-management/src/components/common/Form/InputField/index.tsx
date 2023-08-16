import React, { memo } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react'

interface InputFieldProps {
  variant?: 'input' | 'textarea'
  name: string
  label: string
  value: string | number
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  type?: string
  errorMessage?: string
}

const InputField: React.FC<InputFieldProps> = ({
  variant = 'input',
  name,
  label,
  value,
  onChange,
  type = 'text',
  errorMessage,
}) => (
  <FormControl className="input-field" isRequired>
    <FormLabel
      className="form-label"
      fontFamily="Oswald-Regular"
      fontSize="xl"
      letterSpacing="1px"
    >
      {label}:
    </FormLabel>
    <Input
      as={variant}
      border="2px solid"
      _hover={{ borderColor: 'primary' }}
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
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
)

export default memo(InputField)
