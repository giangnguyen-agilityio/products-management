import { extendTheme } from '@chakra-ui/react'
import { fonts, fontSizes, lineHeights } from './typography'
import { colors } from './colors'
import { shadows } from './shadows'
import { breakpoints } from './breakpoint'
import { borders, radii } from './metric'
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
  fontSizes,
  lineHeights,
  colors,
  borders,
  shadows,
  breakpoints,
  radii,
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
