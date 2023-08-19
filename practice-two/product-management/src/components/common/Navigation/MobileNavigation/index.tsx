import React from 'react'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
} from '@chakra-ui/react'
import { NavigationLink } from '@types'
import { Link } from 'react-router-dom'

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
        fontSize="sm"
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
          fontSize="md"
          variant="navigate"
        >
          {label}
        </Button>
      </Flex>
    ))}
  </Flex>
)

export default MobileContent
