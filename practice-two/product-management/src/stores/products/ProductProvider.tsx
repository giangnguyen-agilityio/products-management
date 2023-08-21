import { useEffect, useMemo, useReducer, useState } from 'react'
import { ProductsState, IProduct } from '@types'
import { useProducts } from '@hooks/fetch'
import ProductContext from './ProductContext'
import reducer from './reducer'
import {
  addNewProduct,
  editProduct,
  deleteProduct,
  setProduct,
} from './actions'
import EmptyProduct from '@components/common/EmptyProduct'
import { NOTIFICATIONS } from '@constants'

interface ProviderProps {
  children: JSX.Element
}

export const initialState: ProductsState = {
  products: [],
}

const ProductProvider = ({ children }: ProviderProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1)
  const { allProducts, error, mutate } = useProducts(currentPage)
  const [productState, productDispatch] = useReducer(reducer, initialState)

  if (error) {
    return <EmptyProduct errorMessage={NOTIFICATIONS.API_ERROR} />
  }

  useEffect(() => {
    if (allProducts) {
      productDispatch(setProduct(allProducts))
    }
  }, [allProducts])

  const addNewProductState = (payload: IProduct) => {
    productDispatch(addNewProduct(payload))
    mutate() // Update the SWR cache after adding a new product
  }

  const editProductState = (payload: IProduct) => {
    productDispatch(editProduct(payload))
    mutate() // Update the SWR cache after editing a product
  }

  const deleteProductState = (payload: string) => {
    productDispatch(deleteProduct(payload))
    mutate() // Update the SWR cache after deleting a product
  }

  const handleLoadMoreClick = () => {
    setCurrentPage(prevCurrentPage => prevCurrentPage + 1)
  }

  const contextValue = useMemo(
    () => ({
      productState,
      addNewProductState,
      editProductState,
      deleteProductState,
      handleLoadMoreClick,
    }),
    [productState]
  )

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
