import { ComponentStyleConfig } from '@chakra-ui/react'

export const Input: ComponentStyleConfig = {
  baseStyle: {
    field: {
      backgroundColor: 'background',
      _placeholder: {
        color: 'gray.500',
      },
    },
  },

  variants: {
    primary: {
      field: {
        border: '1px solid',
        borderColor: 'gray.300',
        borderRadius: '6px',
        _hover: { borderColor: 'gray.300' },
        _focus: { borderColor: 'primary' },
      },
    },

    secondary: {
      field: {
        border: 'none',
        borderBottom: '2px solid',
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
