import React, { memo } from 'react'
import { Flex, Text, Badge, Button } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { IProductData } from '@types'
import ProductRatingVote from '../ProductRatingVote'

interface ProductInfoProps {
  productData: IProductData
}

const ProductInfo: React.FC<ProductInfoProps> = props => {
  const {
    productData: { id, name, rate, discount, oldPrice, newPrice },
  } = props
  return (
    <Flex
      width="full"
      className="product-information"
      flexDirection="column"
      padding={{ base: '0', lg: '0 20px' }}
      marginTop={{ base: '4', lg: '0' }}
      gap={2}
      background="background"
    >
      {/* Product name and rating */}
      <Flex flexDirection="column">
        <Text
          noOfLines={2}
          className="product-name"
          fontSize="xl"
          fontWeight="bold"
          color="primary"
        >
          {name}
        </Text>
        <ProductRatingVote ratingVote={rate} />
      </Flex>

      {/* Prices */}
      <Flex flexDirection="column" gap={4} color="textPrimary">
        <Flex gap={2}>
          <Text className="new-price" marginTop={2} fontSize="lg">
            {newPrice}
          </Text>
          <Badge
            className="discount"
            mt="2"
            border="2px solid"
            color="secondary"
            background="background"
          >
            {discount}% Off
          </Badge>
        </Flex>
        <Text className="old-price" opacity={0.5} textDecoration="line-through">
          {oldPrice}
        </Text>
      </Flex>

      {/* Edit and delete buttons */}
      <Flex className="button-control" margin="10px 0" gap={2}>
        <Button
          color="textSecondary"
          borderRadius="full"
          colorScheme="green"
          backgroundColor="green.300"
          width="40px"
          height="40px"
          onClick={() => {
            console.log(id)
          }}
          _hover={{
            backgroundColor: 'green.500',
          }}
        >
          <EditIcon />
        </Button>
        <Button
          color="textSecondary"
          borderRadius="full"
          colorScheme="red"
          backgroundColor="red.300"
          width="40px"
          height="40px"
          onClick={() => {
            console.log(id)
          }}
          _hover={{
            backgroundColor: 'red.500',
          }}
        >
          <DeleteIcon />
        </Button>
      </Flex>
    </Flex>
  )
}

export default memo(ProductInfo)
