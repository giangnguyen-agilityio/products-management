import React, { useContext, useRef } from 'react'
import {
  Box,
  Text,
  Flex,
  Button,
  Grid,
  Image,
  useDisclosure,
  useOutsideClick,
  Container,
} from '@chakra-ui/react'
import { SmallAddIcon, ChevronDownIcon } from '@chakra-ui/icons'

import arrowDownIcon from '@assets/icons/Arrow_down.svg'
import ProductListHeader from './ProductListHeader'
import ProductItem from '@components/ProductItem'
import FilterMenu from '@components/FilterMenu'
import ProductContext from '@stores/products/ProductContext'
import { IProduct } from '@types'
import { NOTIFICATIONS } from '@constants'
import EmptyProduct from '@components/common/EmptyProduct'
import { memo } from 'react'

interface ProductListProps {
  openModal: () => void
}

const ProductList: React.FC<ProductListProps> = ({ openModal }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { productState, handleLoadMoreClick } = useContext(ProductContext)
  const productList: IProduct[] = productState.products
  const isProductListNotEmpty = productList.length > 0
  const filterMenuRef = useRef(null)

  useOutsideClick({
    ref: filterMenuRef,
    handler: () => onClose(),
  })

  return (
    <Box
      as="section"
      className="product-list-section"
      width="full"
      margin="0 auto 150px"
      padding={{ base: '0 50px', md: '0' }}
    >
      <ProductListHeader />

      <Container
        display="flex"
        className="product-list-control"
        alignItems="center"
        justifyContent="space-between"
        gap={{ sm: 8 }}
      >
        <Button
          h={10}
          aria-label="Open Filter Menu"
          onClick={onOpen}
          bgColor="primary"
          border="1px solid"
          borderColor="background"
          opacity="0.7"
          fontFamily="Oswald-Regular"
          color="textSecondary"
          _hover={{ opacity: '1' }}
          marginRight="10px"
          ref={filterMenuRef}
        >
          Select category <ChevronDownIcon w={8} h={8} />
        </Button>

        <Button w={8} h={8} aria-label="Add Product" onClick={openModal}>
          <SmallAddIcon w={8} h={8} color="primary" />
        </Button>
      </Container>

      <FilterMenu isOpen={isOpen} customRef={filterMenuRef} />

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

          <Flex justifyContent="center">
            <Button
              onClick={handleLoadMoreClick}
              aria-label="Load More"
              className="load-more"
              fontFamily="Oswald-Regular"
              padding={{ base: '15px 84px', xl: '20px 60px' }}
              margin="50px auto"
              variant="tertiary"
            >
              <Image
                src={arrowDownIcon}
                width="20px"
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
          </Flex>
        </Container>
      ) : (
        <EmptyProduct errorMessage={NOTIFICATIONS.NOT_FOUND_PRODUCT} />
      )}
    </Box>
  )
}

export default memo(ProductList)
