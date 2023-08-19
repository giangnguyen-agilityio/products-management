import { extendTheme } from '@chakra-ui/react'
import { breakpoints } from './breakpoint'
import { colors } from './colors'
import { fonts } from './fonts'
import { shadows } from './shadows'
import { Badge } from './components/badge'
import { Text } from './components/text'
import { Textarea } from './components/textarea'
import { Input } from './components/input'
import { Button } from './components/button'
import { Container } from './components/container'
import { Spinner } from './components/spinner'

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
  shadows,
  components: {
    Badge,
    Text,
    Input,
    Textarea,
    Button,

    Container,
    Spinner,
  },
})

export default customThemeConfig
