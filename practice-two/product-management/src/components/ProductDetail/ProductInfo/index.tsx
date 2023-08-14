import { memo } from 'react'
import { Flex, Text, Badge, Button } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'

const ProductInfo: React.FC = () => (
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
        Product Name
      </Text>
      <Text className="rating-vote" marginTop={1} color="secondary">
        Rating: 4.5
      </Text>
    </Flex>

    {/* Prices */}
    <Flex flexDirection="column" gap={4}>
      <Flex gap={2}>
        <Text className="new-price" marginTop={2} fontSize="lg">
          $99.99
        </Text>
        <Badge
          className="discount"
          mt="2"
          border="2px solid"
          color="secondary"
          background="background"
        >
          30% Off
        </Badge>
      </Flex>
      <Text className="old-price" opacity={0.5} textDecoration="line-through">
        $129.99
      </Text>
    </Flex>

    {/* Edit and delete buttons */}
    <Flex className="button-control" margin="10px 0" gap={2}>
      <Button
        borderRadius="full"
        colorScheme="green"
        width="40px"
        height="40px"
      >
        <EditIcon />
      </Button>
      <Button borderRadius="full" colorScheme="red" width="40px" height="40px">
        <DeleteIcon />
      </Button>
    </Flex>
  </Flex>
)

export default memo(ProductInfo)
