import { ComponentStyleConfig } from '@chakra-ui/react'

export const Badge: ComponentStyleConfig = {
  baseStyle: {
    fontSize: 'default',
  },
  variants: {
    primary: {
      bg: 'background',
      color: 'secondary',
      padding: '2px 4px',
      border: 'medium',
    },
  },
}
