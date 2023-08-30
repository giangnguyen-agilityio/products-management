// Libraries
import React from 'react'
import {
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

// Types
import { NavigationLink } from '@types'

// Mobile Content Component
const MobileContent: React.FC<{
  isOpen: boolean
  toggleDrawer: () => void
  links: NavigationLink[]
}> = ({ isOpen, toggleDrawer, links }) => (
  <Drawer
    isOpen={isOpen}
    placement="left"
    onClose={toggleDrawer}
    size={{ base: 'full', sm: 'xs' }}
  >
    <DrawerOverlay />
    <DrawerContent className="sidebar" bgColor="black" opacity="0.95">
      {/* Close button for the mobile drawer */}
      <DrawerCloseButton
        width="40px"
        height="40px"
        fontSize="tiny"
        color="textTertiary"
        _hover={{
          color: 'textSecondary',
        }}
      />
      {/* Content of the mobile drawer */}
      <DrawerBody className="navigation-mobile">
        {/* Render mobile navigation links */}
        <MobileNavigationLinks links={links} />
      </DrawerBody>
    </DrawerContent>
  </Drawer>
)

// Mobile Navigation Links Component
const MobileNavigationLinks: React.FC<{ links: NavigationLink[] }> = ({
  links,
}) => (
  <Flex
    as="ul"
    className="nav-list-mobile"
    flexDir="column"
    marginTop={8}
    alignItems="center"
  >
    {/* Map through navigation links and render buttons */}
    {links.map(({ label, href }) => (
      <Flex as="li" className="nav-item-mobile" key={label}>
        <Button
          as={Link}
          to={href}
          display="flex"
          aria-label={label}
          width="full"
          height="40px"
          fontSize="small"
          variant="navigate"
        >
          {label}
        </Button>
      </Flex>
    ))}
  </Flex>
)

export default MobileContent
