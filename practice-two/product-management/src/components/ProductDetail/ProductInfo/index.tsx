// Libraries
import React, { memo } from 'react'
import { Flex, Text, Badge, Button } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'

// Types
import { IProduct } from '@types'

// Components
import ProductRatingVote from '../ProductRatingVote'

// Define the interface for the props passed to the component
interface ProductInfoProps {
  productData: IProduct
  openModal: () => void
  openConfirmDialog?: () => void
}

const ProductInfo: React.FC<ProductInfoProps> = props => {
  const { productData, openModal, openConfirmDialog } = props
  const { name, newPrice, discount, oldPrice, rate } = productData

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
          fontSize="mediumLarge"
          fontWeight="bold"
          color="primary"
        >
          {name}
        </Text>
        <ProductRatingVote ratingVote={rate} />
      </Flex>

      {/* Prices */}
      <Flex flexDirection="column" gap={2} marginTop={2} color="textPrimary">
        <Flex gap={2}>
          <Text className="new-price" fontSize="medium">
            {newPrice}
          </Text>
          <Badge className="discount" variant="primary">
            {discount}% Off
          </Badge>
        </Flex>
        <Text className="old-price" opacity={0.5} textDecoration="line-through">
          {oldPrice}
        </Text>
      </Flex>

      {/* Edit and delete buttons */}
      <Flex className="button-control" margin="10px 0" gap={2}>
        {/* Edit button */}
        <Button
          className="edit-btn"
          aria-label="Edit button"
          borderRadius="circle"
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
          aria-label="Delete button"
          borderRadius="circle"
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
