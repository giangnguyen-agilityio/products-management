import { ComponentStyleConfig } from '@chakra-ui/react'

export const Input: ComponentStyleConfig = {
  baseStyle: {
    field: {
      bgColor: 'background',
      _placeholder: {
        color: 'gray.500',
      },
    },
  },

  variants: {
    primary: {
      field: {
        border: 'small',
        borderColor: 'gray.300',
        borderRadius: 'small',
        _hover: { borderColor: 'gray.300' },
        _focus: { borderColor: 'primary' },
      },
    },

    secondary: {
      field: {
        border: 'none',
        borderBottom: 'medium',
        borderColor: 'textPrimary',
        outline: 'none',
        borderRadius: 'none',
        _hover: {
          borderBottomColor: 'textPrimary',
        },
      },
    },
  },
}
