import { Flex } from '@chakra-ui/react'
import logoWebsite from '@assets/images/logo_website.webp'
import Logo from '@components/common/Logo'
import { navigationLinks } from '@constants'
import Navigation from '@components/common/Navigation'

// Header Component
const Header = () => {
  return (
    <Flex
      as="header"
      className="header"
      width="full"
      justifyContent="space-between"
    >
      <Flex className="logo-website">
        <Logo imageSrc={logoWebsite} />
      </Flex>

      <Navigation links={navigationLinks} />
    </Flex>
  )
}

export default Header
