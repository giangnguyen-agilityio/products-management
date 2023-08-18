import { ComponentStyleConfig } from '@chakra-ui/react'

export const Text: ComponentStyleConfig = {
  baseStyle: {
    fontSize: 'OpenSans-Regular',
    color: 'textPrimary',
  },

  sizes: {
    primary: {
      fontSize: { base: '12px', md: '20px' },
    },
    secondary: {
      fontSize: { base: '14px', md: '16px' },
    },
    tertiary: {
      fontSize: { base: '16px', lg: '24px' },
    },
    quaternary: {
      fontSize: { base: '30px', md: '24px', lg: '17px' },
    },
    quinary: {
      fontSize: { base: '16px', md: '20px', lg: '24px', xl: '30px' },
    },
  },

  variants: {
    fontPrimary: {
      fontFamily: 'OpenSans-Regular',
    },

    fontPrimaryMedium: {
      fontFamily: 'OpenSans-Medium',
    },

    fontPrimaryBold: {
      fontFamily: 'OpenSans-Bold',
    },

    fontSecondary: {
      fontFamily: 'Oswald-Regular',
    },

    fontTertiary: {
      fontFamily: 'RobotoCondensed-Regular',
    },

    danger: {
      color: 'error',
      fontFamily: 'OpenSans-Regular',
    },
  },
}
