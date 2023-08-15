import React, { memo } from 'react'
import { GridItem, Box, Image, Text, Link } from '@chakra-ui/react'
import imageNotAvailable from '@assets/images/Image_not_available.webp'
import { Link as RouterLink } from 'react-router-dom'
import { IProduct } from '@types'

interface ProductItemProps {
  product: Pick<IProduct, 'id' | 'name' | 'image'>
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
      backgroundColor="background"
      borderTop="8px solid"
      borderColor="secondary"
      borderRadius="0 0 20px 20px"
      p={{ base: 2, sm: 4 }}
      boxShadow="5px 5px 29px 0 rgba(0,0,0,0.15)"
      w="full"
      h={{ base: '516px', md: '482px', lg: '318px', xl: '482px' }}
      padding={{ base: '30px 0', sm: '30px 20px' }}
      position="relative"
    >
      <Box className="image-container">
        <Image
          src={product.image || imageNotAvailable}
          alt={product.name}
          w={{
            base: '340px',
            md: '305px',
            lg: '173px',
            xl: '220px',
          }}
          h={{
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
      <Text
        fontWeight="semibold"
        padding="15px 0 0"
        fontSize={{ base: '30px', md: '24px', lg: '17px' }}
        color="primary"
        noOfLines={2}
        width={{ xs: '300px', sm: 'full' }}
        margin="0 auto"
        fontFamily="RobotoCondensed-Regular"
      >
        {product.name}
      </Text>
      <Link
        as={RouterLink}
        to={`/products/${product.id}`}
        color="textPrimary"
        position="absolute"
        bottom={{ base: '3%', lg: '3%', xl: '20%' }}
        left="50%"
        transform="translate(-50%, -50%)"
        fontSize="14px"
        fontFamily="RobotoCondensed-Bold"
        textTransform="uppercase"
        opacity="0.5"
        textDecoration="underline"
        _hover={{
          color: 'secondary',
          opacity: '1',
        }}
      >
        detail
      </Link>
    </Box>
  </GridItem>
)

export default memo(ProductItem)
