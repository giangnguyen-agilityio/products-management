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
      justifyContent="space-between"
      maxWidth={{
        sm: '340px',
        md: '720px',
        lg: '940px',
        xl: '1140px',
      }}
      margin="0 auto"
    >
      <Logo imageSrc={logoWebsite} />

      <Navigation links={navigationLinks} />
    </Flex>
  )
}

export default Header
