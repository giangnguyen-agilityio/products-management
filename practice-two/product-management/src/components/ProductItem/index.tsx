// Libraries
import React, { memo } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { GridItem, Box, Image, Text, Link } from '@chakra-ui/react'

// Assets
import imageNotAvailable from '@assets/images/Image_not_available.webp'

// Types
import { IProductItem } from '@types'

interface ProductItemProps {
  product: IProductItem
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => (
  <Box
    transition="transform 0.3s ease-in-out"
    _hover={{
      transform: 'scale(1.05)',
    }}
  >
    <GridItem
      className="product-item"
      margin="0 auto"
      key={product.id}
      textAlign="center"
      as="li"
      listStyleType="none"
      borderRadius="20px"
      boxShadow="tertiary"
      bgColor="background"
      width="full"
      height={{ base: '516px', md: '470px', lg: '318px', xl: '360px' }}
      padding={{ base: '30px 0', sm: '30px 20px' }}
      position="relative"
    >
      {/* Image Container */}
      <Box className="image-container">
        <Image
          src={product.image || imageNotAvailable}
          alt={product.name}
          width="full"
          height={{
            base: '300px',
            md: '305px',
            lg: '173px',
            xl: '220px',
          }}
          margin="0 auto"
          objectFit="contain"
          loading="lazy"
        />
      </Box>

      {/* Product Name */}
      <Text
        fontWeight="semibold"
        padding="15px 0 0"
        fontSize={{ base: '30px', md: '24px', lg: '17px' }}
        color="primary"
        noOfLines={2}
        width={{ xs: '300px', sm: 'full' }}
        margin="0 auto"
        variant="fontTertiary"
      >
        {product.name}
      </Text>
      {/* Detail Link */}
      <Link
        as={RouterLink}
        to={`/products/${product.id}`}
        color="textPrimary"
        position="absolute"
        bottom={0}
        left="50%"
        transform="translate(-50%, -50%)"
        fontSize="14px"
        fontFamily="RobotoCondensed-Bold"
        textTransform="uppercase"
        textDecoration="underline"
        _hover={{
          color: 'secondary',
        }}
      >
        detail
      </Link>
    </GridItem>
  </Box>
)

export default memo(ProductItem)
