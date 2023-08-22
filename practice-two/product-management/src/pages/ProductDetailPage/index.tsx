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
import { NOTIFICATIONS } from '@constants'

const ProductDetailPage = () => {
  const { id } = useParams()

  // Check if the 'id' parameter is missing
  if (!id) {
    return (
      <EmptyProduct errorMessage={`${NOTIFICATIONS.PRODUCT_ID_IS_MISSING}`} />
    )
  }

  // Fetch product data using custom hook 'useProductById'
  const { data, error, mutate, isLoading } = useProductById(id)

  // Handle errors during data fetching
  if (error) {
    const message = handleServerError(error as AxiosError)
    return (
      <EmptyProduct
        errorMessage={`${NOTIFICATIONS.ERROR_WHILE_FETCHING} ${message}`}
      />
    )
  }

  // Display a message if no product data is available
  if (!data) {
    return (
      <EmptyProduct
        errorMessage={`${NOTIFICATIONS.FAILED_TO_GET_PRODUCT} ${id}`}
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
        <ProductImage src={data.image} />

        {/* Display the product information */}
        <ProductInfo productData={data} mutate={mutate} />

        {/* Display the product description */}
        <ProductDesc productDesc={data.description} />
      </Grid>
    </Container>
  )
}

export default memo(ProductDetailPage)
