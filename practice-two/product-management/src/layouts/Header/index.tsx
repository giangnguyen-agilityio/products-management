import { Container, Flex } from '@chakra-ui/react'
import logoWebsite from '@assets/images/logo_website.webp'
import Logo from '@components/common/Logo'
import { navigationLinks } from '@constants'
import Navigation from '@components/common/Navigation'

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
