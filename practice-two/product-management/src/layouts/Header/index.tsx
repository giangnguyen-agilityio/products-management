import { Flex, Box } from '@chakra-ui/react'
import logoWebsite from '@assets/images/logo_website.webp'
import Logo from '@components/common/Logo'
import { navigationLinks } from '@constants'
import Navigation from '@components/common/Navigation'

// Header Component
const Header = () => {
  return (
    <Box className="container" padding={{ base: '22px 10px', md: '22px 50px' }}>
      {/* Header */}
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
    </Box>
  )
}

export default Header
