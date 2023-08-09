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
import { Link } from '@types'

// Mobile Content Component
const MobileContent: React.FC<{
  isOpen: boolean
  toggleDrawer: () => void
  links: Link[]
}> = ({ isOpen, toggleDrawer, links }) => (
  <Drawer
    isOpen={isOpen}
    placement="left"
    onClose={toggleDrawer}
    size={{ base: 'full', sm: 'xs' }}
  >
    <DrawerOverlay />

    <DrawerContent className="sidebar" bgColor="black" opacity="0.95">
      <DrawerCloseButton
        width="40px"
        height="40px"
        fontSize="sm"
        color="textTertiary"
        _hover={{
          color: 'textSecondary',
        }}
      />
      <DrawerBody className="navigation-mobile">
        <MobileNavigationLinks links={links} />
      </DrawerBody>
    </DrawerContent>
  </Drawer>
)

// Mobile Navigation Links Component
const MobileNavigationLinks: React.FC<{ links: Link[] }> = ({ links }) => (
  <Flex
    as="ul"
    className="nav-list-mobile"
    flexDir="column"
    marginTop={8}
    alignItems="center"
  >
    {links.map(({ label, href }) => (
      <Flex as="li" className="nav-item-mobile" key={label}>
        <Button
          display="flex"
          alignItems="center"
          as="a"
          href={href}
          variant="unstyled"
          aria-label={label}
          width="full"
          fontSize="md"
          textTransform="uppercase"
          color="textTertiary"
          transition="all 0.4s ease-in-out"
          _hover={{
            color: 'textSecondary',
          }}
        >
          {label}
        </Button>
      </Flex>
    ))}
  </Flex>
)

export { MobileContent }
