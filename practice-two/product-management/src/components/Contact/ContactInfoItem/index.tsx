import React, { memo } from 'react'
import { Flex, Box, Image, Text } from '@chakra-ui/react'

interface ContactInfoItemProps {
  icon: string
  title: string
  content: JSX.Element | string
}

// ContactInfoItem component
const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  icon,
  title,
  content,
}) => (
  <Box
    as="address"
    display="flex"
    flexDirection="column"
    bgColor="background"
    padding="30px"
    width={{
      base: '300px',
      sm: '340px',
      md: '350px',
      lg: '220px',
      xl: '270px',
    }}
    margin="0 auto"
    textAlign="center"
    justifyContent="flex-start"
    alignItems="center"
  >
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Image src={icon} alt={`${title} icon`} boxSize="64px" />
      <Text
        textTransform="uppercase"
        margin={5}
        variant="fontPrimaryBold"
        fontSize="18px"
      >
        {title}
      </Text>
    </Flex>
    {/* Display the content of the contact information */}
    {content}
  </Box>
)

export default memo(ContactInfoItem)
