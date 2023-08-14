import React, { memo } from 'react'
import { Box, Text } from '@chakra-ui/react'

const ProductDesc: React.FC = () => (
  <Box marginTop={4}>
    <Text fontSize="lg" fontWeight="bold" color="secondary">
      Overview
    </Text>
    <Text marginTop={2} color="textTertiary" fontFamily="OpenSans-Regular">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim
      nisl eu nunc interdum, eget luctus ligula malesuada. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Nullam dignissim nisl eu nunc interdum,
      eget luctus ligula malesuada. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Nullam dignissim nisl eu nunc interdum, eget luctus
      ligula malesuada.
    </Text>
  </Box>
)

export default memo(ProductDesc)
