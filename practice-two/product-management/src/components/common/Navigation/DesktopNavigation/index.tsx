import React from 'react'
import { Flex, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { NavigationLink } from '@types'

// Desktop Navigation Component
const DesktopNavigation: React.FC<{ links: NavigationLink[] }> = ({
  links,
}) => (
  <Flex as="nav" className="navigation" paddingTop={1.5}>
    <Flex as="ul" className="nav-list" gap={6}>
      {links.map(({ label, href }) => (
        <Flex as="li" className="nav-item" key={label}>
          <Button
            as={Link}
            to={href}
            variant="ghost"
            aria-label={label}
            width="full"
            fontSize="md"
            textTransform="uppercase"
            color="textSecondary"
            border="1px"
            borderColor="transparent"
            borderRadius="full"
            transition="all 0.4s ease-in-out"
            _hover={{
              bgColor: 'transparent',
              borderColor: 'textSecondary',
            }}
          >
            {label}
          </Button>
        </Flex>
      ))}
    </Flex>
  </Flex>
)

export default DesktopNavigation
