import React, { memo } from 'react'
import { Box, Text } from '@chakra-ui/react'

interface ProductDescProp {
  productDesc: string
}

const ProductDesc: React.FC<ProductDescProp> = props => {
  const { productDesc } = props

  return (
    <Box marginTop={4}>
      {/* Title */}
      <Text fontSize="lg" fontWeight="bold" color="secondary">
        Overview
      </Text>
      {/* The product description */}
      <Text marginTop={2} color="textTertiary" variant="fontPrimary">
        {productDesc}
      </Text>
    </Box>
  )
}

export default memo(ProductDesc)
