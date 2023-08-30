// Libraries
import React, { memo } from 'react'
import { useDisclosure, Show, Hide, IconButton } from '@chakra-ui/react'

// Components
import DesktopNavigation from './DesktopNavigation'
import MobileContent from './MobileNavigation'

// Assets
import { HamburgerIcon } from '@chakra-ui/icons'

// Types
import { NavigationLink } from '@types'

interface NavigationProps {
  links: NavigationLink[]
}

const Navigation: React.FC<NavigationProps> = ({ links }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      {/* Render the Desktop Navigation above medium screen size */}
      <Show above="md">
        <DesktopNavigation links={links} />
      </Show>

      {/* Render the Hamburger Menu button for smaller screens */}
      <Hide above="md">
        <IconButton
          className="hamburger-menu"
          aria-label="Open Menu"
          fontSize="mediumLarge"
          paddingTop={1}
          icon={<HamburgerIcon />}
          onClick={onToggle}
          variant="unstyled"
          color="textSecondary"
        />
      </Hide>

      {/* Render the Mobile Navigation content */}
      <MobileContent isOpen={isOpen} toggleDrawer={onToggle} links={links} />
    </>
  )
}

export default memo(Navigation)
