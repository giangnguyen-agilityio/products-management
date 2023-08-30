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
      bgColor: 'blue.500',
      _hover: { bgColor: 'blue.300' },
      _loading: { bgColor: 'blue.300' },
    },

    tertiary: {
      border: '1px solid',
      borderRadius: 'circle',
      borderColor: 'secondary',
      bgColor: 'transparent',
      _hover: { bgColor: 'secondary' },
    },

    success: {
      bgColor: 'green.500',
      _hover: { bgColor: 'green.300' },
    },

    danger: {
      bgColor: 'red.500',
      _hover: { bgColor: 'red.300' },
      _loading: { bgColor: 'red.300' },
    },

    minimal: {
      bgColor: 'gray.300',
      _hover: { bgColor: 'gray.100' },
    },

    contract: {
      border: '1px',
      borderColor: 'transparent',
      borderRadius: 'circle',
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
