import { ComponentStyleConfig } from '@chakra-ui/react'

export const Button: ComponentStyleConfig = {
  baseStyle: {
    color: 'textSecondary',
    transition: 'all 0.3s ease-in-out',
  },

  variants: {
    default: {
      bgColor: 'primary',
      _hover: { bgColor: 'background', textColor: 'primary' },
    },

    primary: {
      bgColor: 'secondary',
      color: 'textPrimary',
      _hover: { bgColor: 'primary', color: 'textSecondary' },
    },

    secondary: {
      bgColor: 'blue.300',
      _hover: { bgColor: 'blue.600' },
      _loading: { bgColor: 'blue.600' },
    },

    tertiary: {
      border: '1px solid',
      borderRadius: 'full',
      borderColor: 'secondary',
      bgColor: 'transparent',
      _hover: { bgColor: 'secondary' },
    },

    success: {
      bgColor: 'green.300',
      _hover: { bgColor: 'green.500' },
    },

    danger: {
      bgColor: 'red.300',
      _hover: { bgColor: 'red.500' },
      _loading: { bgColor: 'red.500' },
    },

    minimal: {
      bgColor: 'gray.100',
      _hover: { bgColor: 'gray.300' },
    },

    contract: {
      border: '1px',
      borderColor: 'transparent',
      borderRadius: 'full',
      _hover: { bgColor: 'transparent', borderColor: 'textSecondary' },
    },

    navigate: {
      bgColor: 'transparent',
      textTransform: 'uppercase',
      textDecor: 'unset',
      color: 'textTertiary',
      _hover: { color: 'textSecondary' },
    },
  },
}
