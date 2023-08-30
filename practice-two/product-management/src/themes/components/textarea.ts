import { ComponentStyleConfig } from '@chakra-ui/react'

export const Textarea: ComponentStyleConfig = {
  variants: {
    primary: {
      border: 'none',
      background: 'background',
      borderBottom: 'medium',
      borderColor: 'textPrimary',
      borderRadius: 'none',
      outline: 'none',
      _hover: {
        borderBottomColor: 'textPrimary',
      },
      _placeholder: {
        color: 'gray.500',
      },
    },
  },
}
