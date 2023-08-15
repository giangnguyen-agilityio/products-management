import React, { memo } from 'react'
import { useDisclosure, Show, Hide, IconButton } from '@chakra-ui/react'
import { NavigationLink } from '@types'
import DesktopNavigation from './DesktopNavigation'
import MobileContent from './MobileNavigation'
import { HamburgerIcon } from '@chakra-ui/icons'

// Interfaces
interface NavigationProps {
  links: NavigationLink[]
}

// Main Navigation Component
const Navigation: React.FC<NavigationProps> = ({ links }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Show above="md">
        <DesktopNavigation links={links} />
      </Show>

      <Hide above="md">
        <IconButton
          className="hamburger-menu"
          aria-label="Open Menu"
          fontSize="xl"
          paddingTop={1}
          icon={<HamburgerIcon />}
          onClick={onToggle}
          variant="unstyled"
          color="textSecondary"
        />
      </Hide>

      <MobileContent isOpen={isOpen} toggleDrawer={onToggle} links={links} />
    </>
  )
}

export default memo(Navigation)
