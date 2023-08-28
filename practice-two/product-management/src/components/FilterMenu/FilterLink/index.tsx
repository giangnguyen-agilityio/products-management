// Libraries
import { memo } from 'react'
import { Link, Text, Image } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

// Define the props interface for the FilterLink component
interface FilterLinkProps {
  href: string
  icon: string
  label: string
}

const FilterLink = ({ href, icon, label }: FilterLinkProps) => (
  <Link
    as={RouterLink}
    href={href}
    className="filter-item"
    fontFamily="Oswald-Regular"
    opacity="0.5"
    _hover={{ textDecoration: 'unset', opacity: '1' }}
  >
    {/* Display the icon */}
    <Image
      src={icon}
      width="68px"
      alt={`The ${label} icon`}
      margin="0 auto"
      loading="eager"
    />
    {/* Display the label */}
    <Text as="span" display="flex" justifyContent="center">
      {label}
    </Text>
  </Link>
)

export default memo(FilterLink)
