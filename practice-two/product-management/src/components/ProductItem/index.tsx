// Libraries
import React, { memo } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { GridItem, Box, Image, Text, Button } from '@chakra-ui/react'

// Assets
import imageNotAvailable from '@assets/images/Image_not_available.webp'

// Types
import { IProductItem } from '@types'

interface ProductItemProps {
  product: IProductItem
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => (
  <GridItem
    className="product-item"
    margin="0 auto"
    key={product.id}
    textAlign="center"
    as="li"
    listStyleType="none"
    borderRadius="large"
    boxShadow="tertiary"
    bgColor="background"
    width="full"
    height={{ base: '516px', md: '490px', lg: '340px', xl: '390px' }}
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
        transition="transform 0.3s ease-in-out"
        _hover={{
          transform: 'scale(1.05)',
        }}
      />
    </Box>

    {/* Product Name */}
    <Text
      fontWeight="semibold"
      padding="15px 0 0"
      fontSize={{ base: 'extraLarge', md: 'large', lg: 'regular' }}
      color="primary"
      noOfLines={2}
      width={{ xs: '300px', sm: 'full' }}
      margin="0 auto"
      variant="fontTertiary"
    >
      {product.name}
    </Text>
    {/* Detail Link */}
    <Button
      as={RouterLink}
      to={`/products/${product.id}`}
      position="absolute"
      bottom={0}
      left="50%"
      transform="translate(-50%, -50%)"
      fontSize="tiny"
      fontFamily="RobotoCondensed-Bold"
      textTransform="uppercase"
      rounded="full"
      bgColor="primary"
      color="textSecondary"
      width="100px"
      _hover={{
        border: '2px solid',
        color: 'primary',
        bgColor: 'background',
      }}
    >
      detail
    </Button>
  </GridItem>
)

export default memo(ProductItem)
