// Libraries
import React, { memo } from 'react'
import { Box, Image } from '@chakra-ui/react'

// Assets
import imageNotAvailable from '@assets/images/Image_not_available.webp'

interface ProductImageProps {
  src: string | null
}

const ProductImage: React.FC<ProductImageProps> = ({ src }) => {
  const imageUrl = src || imageNotAvailable

  return (
    <Box
      padding={2}
      border="2px solid"
      borderColor="secondary"
      borderRadius="large"
    >
      <Image
        className="product-image"
        src={imageUrl}
        alt="The product image"
        height={{ base: '200px', sm: '250px', md: '300px', lg: '350px' }}
        objectFit="contain"
        margin="0 auto"
      />
    </Box>
  )
}

export default memo(ProductImage)
