import React, { useContext } from 'react'
import {
  Box,
  Text,
  Flex,
  Button,
  Grid,
  Image,
  Container,
} from '@chakra-ui/react'

import arrowDownIcon from '@assets/icons/Arrow_down.svg'
import ProductListHeader from './ProductListHeader'
import ProductItem from '@components/ProductItem'
import ProductContext from '@stores/products/ProductContext'
import { IProduct } from '@types'
import { NOTIFICATIONS } from '@constants'
import EmptyProduct from '@components/common/EmptyProduct'
import { memo } from 'react'
import ProductListControl from './ProductListControl'

interface ProductListProps {
  openModal: () => void
  onClickShowMore: () => void
  isVisible: boolean
}

const ProductList: React.FC<ProductListProps> = ({
  openModal,
  onClickShowMore,
  isVisible,
}) => {
  const { productState } = useContext(ProductContext)
  const productList: IProduct[] = productState.products
  const isProductListNotEmpty = productList.length > 0

  return (
    <Box
      as="section"
      className="product-list-section"
      width="full"
      margin="0 auto 150px"
      padding={{ base: '0 50px', md: '0' }}
    >
      <ProductListHeader />
      <ProductListControl onOpenModal={openModal} />

      {isProductListNotEmpty ? (
        <Container padding={0}>
          <Grid
            as="ul"
            className="product-list"
            templateColumns={{
              base: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(4,1fr)',
            }}
            gap={{ base: '4', md: '8' }}
            margin={{ base: '0 -50px', sm: '0 auto' }}
            rowGap={{ md: '0' }}
          >
            {productList.map(product => (
              <ProductItem key={product.id} {...{ product }} />
            ))}
          </Grid>

          <Flex justifyContent="center" margin="50px auto">
            {isVisible && (
              <Button
                onClick={onClickShowMore}
                className="load-more-btn"
                name="button"
                aria-label="Button for loading more products"
                fontFamily="Oswald-Regular"
                padding="12px 40px"
                variant="tertiary"
                height="fit-content"
              >
                <Image
                  src={arrowDownIcon}
                  width="20px"
                  height="20px"
                  alt="Arrow down icon"
                  margin="0 auto"
                  loading="eager"
                />
                <Text
                  as="span"
                  display="flex"
                  color="textSecondary"
                  justifyContent="center"
                  fontSize="18px"
                  textTransform="uppercase"
                  marginLeft={2}
                >
                  load more
                </Text>
              </Button>
            )}
          </Flex>
        </Container>
      ) : (
        <EmptyProduct errorMessage={NOTIFICATIONS.NOT_FOUND_PRODUCT} />
      )}
    </Box>
  )
}

export default memo(ProductList)
