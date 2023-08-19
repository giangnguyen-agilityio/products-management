import { ComponentStyleConfig } from '@chakra-ui/react'

export const Badge: ComponentStyleConfig = {
  baseStyle: {
    fontSize: '12px',
  },
  variants: {
    primary: {
      bg: 'background',
      color: 'secondary',
      padding: '2px 4px',
      border: '2px solid',
    },
  },
}
