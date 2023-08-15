import { memo } from 'react'
import ProductDetail from '@components/ProductDetail'
import { useParams } from 'react-router-dom'
import { useProductById } from '@hooks/fetch'

const ProductDetailPage = () => {
  const { id } = useParams()

  console.log(id)

  if (!id) {
    return <div>Loading...</div>
  }

  const { data } = useProductById(id)
  return <ProductDetail productData={data} />
}

export default memo(ProductDetailPage)
