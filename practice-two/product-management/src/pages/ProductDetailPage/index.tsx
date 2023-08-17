import { memo } from 'react'
import { Grid } from '@chakra-ui/react'
import ProductImage from '@components/ProductDetail/ProductImage'
import ProductInfo from '@components/ProductDetail/ProductInfo'
import ProductDesc from '@components/ProductDetail/ProductDesc'
import EmptyProduct from '@components/common/EmptyProduct'
import { useParams } from 'react-router-dom'
import { useProductById } from '@hooks/fetch'

const ProductDetailPage = () => {
  const { id } = useParams()

  // Check if the 'id' parameter is missing
  if (!id) {
    return <EmptyProduct errorMessage={`Product ID is missing`} />
  }

  // Fetch product data using custom hook 'useProductById'
  const { data, error, mutate } = useProductById(id)

  // Handle errors during data fetching
  if (error) {
    return (
      <EmptyProduct
        errorMessage={`An error occurred while fetching product data`}
      />
    )
  }

  // Display a message if no product data is available
  if (!data) {
    return (
      <EmptyProduct
        errorMessage={`We couldn't find any product with ID ${id}`}
      />
    )
  }

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
      {/* Display the product image */}
      <ProductImage src={data.image} />

      {/* Display the product information */}
      <ProductInfo productData={data} mutate={mutate} />

      {/* Display the product description */}
      <ProductDesc productDesc={data.description} />
    </Grid>
  )
}

export default memo(ProductDetailPage)
