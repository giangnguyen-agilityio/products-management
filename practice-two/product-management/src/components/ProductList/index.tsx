// Libraries
import React, { memo } from 'react'
import { Grid, Container } from '@chakra-ui/react'

// Components
import ProductItem from '@components/ProductItem'
import EmptyProduct from '@components/common/EmptyProduct'

// Constants
import { NOTIFICATIONS } from '@constants'

// Types
import { IProduct } from '@types'

interface ProductListProps {
  listProduct: IProduct[]
}

const ProductList: React.FC<ProductListProps> = ({ listProduct }) => {
  const isProductListNotEmpty = listProduct.length > 0

  return (
    <>
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
            gap="30px"
            margin={{ base: '30px -50px 0', sm: '30px auto 0' }}
          >
            {listProduct.map(product => (
              <ProductItem key={product.id} {...{ product }} />
            ))}
          </Grid>
        </Container>
      ) : (
        <EmptyProduct errorMessage={NOTIFICATIONS.NOT_FOUND_PRODUCT} />
      )}
    </>
  )
}

export default memo(ProductList)
