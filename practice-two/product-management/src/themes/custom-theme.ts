import { extendTheme } from '@chakra-ui/react'
import { breakpoints } from './breakpoint'
import { colors } from './colors'
import { fonts } from './fonts'
import { Badge } from './components/badge'
import { Text } from './components/text'
import { Textarea } from './components/textarea'
import { Input } from './components/input'

const customThemeConfig = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'primary',
      },
    },
  },
  sizes: {
    xs: '250px',
  },
  breakpoints,
  colors,
  fonts,
  components: {
    Badge,
    Text,
    Input,
    Textarea,
  },
})

export default customThemeConfig
