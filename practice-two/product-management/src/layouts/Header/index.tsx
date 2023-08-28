// Libraries
import { Container, Flex } from '@chakra-ui/react'

// Constants
import { navigationLinks } from '@constants'

// Components
import Logo from '@components/common/Logo'
import Navigation from '@components/common/Navigation'

// Assets
import logoWebsite from '@assets/images/logo_website.webp'

// Header Component
const Header = () => {
  return (
    <Container as="header" className="header" padding={4}>
      <Flex justifyContent="space-between">
        <Logo imageSrc={logoWebsite} />
        <Navigation links={navigationLinks} />
      </Flex>
    </Container>
  )
}

export default Header
