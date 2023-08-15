import React, { memo } from 'react'
import { Grid } from '@chakra-ui/react'
import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'
import ProductDesc from './ProductDesc'
import { IProduct } from '@types'

interface ProductDetailProps {
  productData: IProduct | undefined
}

const ProductDetail: React.FC<ProductDetailProps> = props => {
  const { productData } = props
  if (!productData) return ''

  return (
    <Grid
      as="section"
      className="product-detail-section"
      padding={4}
      gridTemplateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
      maxWidth={{ sm: '340px', md: '720px', lg: '940px', xl: '1140px' }}
      margin="30px auto"
      background="background"
      borderRadius={10}
      fontFamily="Oswald-Regular"
    >
      <ProductImage src={productData.image} />
      <ProductInfo productData={productData} />
      <ProductDesc productDesc={productData.description} />
    </Grid>
  )
}

export default memo(ProductDetail)
