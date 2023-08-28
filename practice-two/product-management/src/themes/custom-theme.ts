import { extendTheme } from '@chakra-ui/react'
import { fonts } from './fonts'
import { colors } from './colors'
import { shadows } from './shadows'
import { breakpoints } from './breakpoint'
import { Text } from './components/text'
import { Input } from './components/input'
import { Badge } from './components/badge'
import { Button } from './components/button'
import { Spinner } from './components/spinner'
import { Textarea } from './components/textarea'
import { Container } from './components/container'

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
  fonts,
  colors,
  shadows,
  breakpoints,
  components: {
    Text,
    Input,
    Badge,
    Button,
    Spinner,
    Textarea,
    Container,
  },
})

export default customThemeConfig
