import React, { memo } from 'react'
import { GridItem, Box, Image, Text, Link } from '@chakra-ui/react'
import imageNotAvailable from '@assets/images/Image_not_available.webp'
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
  >
    <Box
      className="product-item-content"
      marginTop="50px"
      bgColor="background"
      borderTop="8px solid"
      borderColor="secondary"
      borderRadius="0 0 20px 20px"
      boxShadow="tertiary"
      width="full"
      h={{ base: '516px', md: '482px', lg: '318px', xl: '482px' }}
      padding={{ base: '30px 0', sm: '30px 20px' }}
      position="relative"
    >
      {/* Image Container */}
      <Box className="image-container">
        <Image
          src={product.image || imageNotAvailable}
          alt={product.name}
          width={{
            base: '340px',
            md: '305px',
            lg: '173px',
            xl: '220px',
          }}
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
        href={`/products/${product.id}`}
        color="textPrimary"
        position="absolute"
        bottom={{ base: '3%', lg: '3%', xl: '20%' }}
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
    </Box>
  </GridItem>
)

export default memo(ProductItem)
