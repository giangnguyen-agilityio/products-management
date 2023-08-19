import React, { LegacyRef, memo } from 'react'
import { Container, Flex, Grid } from '@chakra-ui/react'
import tvIcon from '@assets/icons/TV_Icon.svg'
import phoneIcon from '@assets/icons/Phone_Icon.svg'
import laptopIcon from '@assets/icons/Laptop_Icon.svg'
import refrigeratorIcon from '@assets/icons/Refrigerator_Icon.svg'
import airConditionerIcon from '@assets/icons/Air_Conditioner_Icon.svg'
import FilterLink from '@components/FilterMenu/FilterLink'
import { ChevronDownIcon } from '@chakra-ui/icons'

// Define the props interface for the FilterMenu component
interface FilterMenuProps {
  isOpen: boolean
  customRef: LegacyRef<HTMLDivElement> | undefined
}

const FilterMenu: React.FC<FilterMenuProps> = ({ isOpen, customRef }) => (
  // Outer container with filter menu content
  <Container>
    <Flex
      className="filter-menu"
      display={isOpen ? 'block' : 'none'}
      position="relative"
      ref={customRef}
    >
      {/* Arrow icon */}
      <ChevronDownIcon
        className="arrow-filter"
        w="27px"
        h="27px"
        top="0"
        left="25px"
        overflow="hidden"
        transform="rotate(45deg)"
        boxShadow="-2px -2px 5px -4px"
        bgColor="white"
        pos="absolute"
      />
      {/* Grid containing filter options */}
      <Grid
        className="filter-list"
        gridTemplateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(5, 1fr)' }}
        color="textPrimary"
        bgColor="white"
        zIndex="2"
        pos="absolute"
        top="10px"
        borderRadius="10px"
        justifyContent={{ base: 'space-evenly', sm: 'unset' }}
        textAlign="center"
        gap={{ base: '10px', lg: '20px' }}
        padding={{ base: '5px', md: '15px' }}
        boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 20px 20px 12px"
      >
        {/* Filter links */}
        <FilterLink href="/" icon={tvIcon} label="TV" />
        <FilterLink href="/" icon={laptopIcon} label="Laptop" />
        <FilterLink href="/" icon={phoneIcon} label="Phone" />
        <FilterLink href="/" icon={refrigeratorIcon} label="Refrigerator" />
        <FilterLink
          href="/"
          icon={airConditionerIcon}
          label="Air Conditioner"
        />
      </Grid>
    </Flex>
  </Container>
)

export default memo(FilterMenu)
