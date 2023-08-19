import { memo } from 'react'
import { Container, Grid } from '@chakra-ui/react'
import ProductImage from '@components/ProductDetail/ProductImage'
import ProductInfo from '@components/ProductDetail/ProductInfo'
import ProductDesc from '@components/ProductDetail/ProductDesc'
import EmptyProduct from '@components/common/EmptyProduct'
import { useParams } from 'react-router-dom'
import { useProductById } from '@hooks/fetch'
import { handleServerError } from '@helpers'
import { AxiosError } from 'axios'
import Loading from '@components/common/Loading'

const ProductDetailPage = () => {
  const { id } = useParams()

  // Check if the 'id' parameter is missing
  if (!id) {
    return <EmptyProduct errorMessage={`Product ID is missing`} />
  }

  // Fetch product data using custom hook 'useProductById'
  const { data, error, mutate, isLoading } = useProductById(id)

  // Handle errors during data fetching
  if (error) {
    const message = handleServerError(error as AxiosError)
    return (
      <EmptyProduct
        errorMessage={`An error occurred while fetching product data: ${message}`}
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

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container as="section" className="product-detail-section">
      <Grid
        padding={4}
        gridTemplateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
        margin="30px auto"
        background="background"
        borderRadius={10}
        fontFamily="Oswald-Regular"
      >
        {/* Display the product image */}
        <div>
          <ProductImage src={data.image} />
        </div>
        {/* Display the product information */}
        <div>
          <ProductInfo productData={data} mutate={mutate} />
        </div>
        {/* Display the product description */}
        <div>
          <ProductDesc productDesc={data.description} />
        </div>
      </Grid>
    </Container>
  )
}

export default memo(ProductDetailPage)
