import { ComponentStyleConfig } from '@chakra-ui/react'

export const Text: ComponentStyleConfig = {
  baseStyle: {
    fontSize: 'OpenSans-Regular',
    color: 'textPrimary',
  },

  sizes: {
    primary: {
      fontSize: { base: 'default', md: 'mediumLarge' },
    },
    secondary: {
      fontSize: { base: 'tiny', md: 'small' },
    },
    tertiary: {
      fontSize: { base: 'small', lg: 'large' },
    },
    quaternary: {
      fontSize: { base: 'extraLarge', md: 'large', lg: 'regular' },
    },
    quinary: {
      fontSize: {
        base: 'small',
        md: 'mediumLarge',
        lg: 'large',
        xl: 'extraLarge',
      },
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
