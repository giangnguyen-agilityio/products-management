import React, { memo } from 'react'
import { Box, Image } from '@chakra-ui/react'

interface ProductImageProps {
  src: string
}

const ProductImage: React.FC<ProductImageProps> = ({ src }) => (
  <Box padding={2} border="2px solid" borderColor="secondary" borderRadius={20}>
    <Image
      className="product-image"
      src={src}
      alt="The product image"
      height={{ base: '200px', sm: '250px', md: '300px', lg: '350px' }}
      objectFit="contain"
      margin="0 auto"
    />
  </Box>
)

export default memo(ProductImage)
