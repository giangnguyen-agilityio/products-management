import React, { memo } from 'react'
import { Flex, Text, Badge, Button } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { IProduct } from '@types'
import ProductRatingVote from '../ProductRatingVote'

// Define the interface for the props passed to the component
interface ProductInfoProps {
  productData: IProduct
  openModal: () => void
  openConfirmDialog?: () => void
}

const ProductInfo: React.FC<ProductInfoProps> = props => {
  const { productData, openModal, openConfirmDialog } = props

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
          {productData.name}
        </Text>
        <ProductRatingVote ratingVote={productData.rate} />
      </Flex>

      {/* Prices */}
      <Flex flexDirection="column" gap={2} marginTop={2} color="textPrimary">
        <Flex gap={2}>
          <Text className="new-price" fontSize="lg">
            {productData.newPrice}
          </Text>
          <Badge className="discount" variant="primary">
            {productData.discount}% Off
          </Badge>
        </Flex>
        <Text className="old-price" opacity={0.5} textDecoration="line-through">
          {productData.oldPrice}
        </Text>
      </Flex>

      {/* Edit and delete buttons */}
      <Flex className="button-control" margin="10px 0" gap={2}>
        {/* Edit button */}
        <Button
          aria-label="Edit button"
          borderRadius="full"
          width="40px"
          height="40px"
          onClick={openModal}
          variant="success"
        >
          <EditIcon />
        </Button>

        {/* Delete button */}
        <Button
          className="delete-btn"
          borderRadius="full"
          width="40px"
          height="40px"
          variant="danger"
          onClick={openConfirmDialog}
        >
          <DeleteIcon />
        </Button>
      </Flex>
    </Flex>
  )
}

export default memo(ProductInfo)
