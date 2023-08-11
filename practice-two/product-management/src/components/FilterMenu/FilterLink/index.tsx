import { memo } from 'react'
import { Link, Text, Image } from '@chakra-ui/react'

interface FilterLinkProps {
  href: string
  icon: string
  label: string
}

const FilterLink = ({ href, icon, label }: FilterLinkProps) => (
  <Link
    href={href}
    className="filter-item"
    fontFamily="Oswald-Regular"
    opacity="0.5"
    _hover={{ textDecoration: 'unset', opacity: '1' }}
  >
    <Image
      src={icon}
      w="68px"
      alt={`The ${label} icon`}
      margin="0 auto"
      loading="eager"
    />
    <Text as="span" display="flex" justifyContent="center">
      {label}
    </Text>
  </Link>
)

export default memo(FilterLink)
