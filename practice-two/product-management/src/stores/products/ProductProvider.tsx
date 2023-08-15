import { useMemo, useReducer } from 'react'
import { ProductsState, IProduct } from '@types'
import { useProducts } from '@hooks/fetch'
import ProductContext from './ProductContext'
import reducer from './reducer'
import {
  setProduct,
  addNewProduct,
  editProduct,
  deleteProduct,
} from './actions'

interface ProviderProps {
  children: JSX.Element
}

export const initialState: ProductsState = {
  products: [],
}

const ProductProvider = ({ children }: ProviderProps): JSX.Element => {
  const { allProducts } = useProducts()

  const [productState, productDispatch] = useReducer(reducer, initialState)

  // Dispatch the setProduct action to update the state once the data is fetched.
  if (allProducts && !productState.products.length) {
    productDispatch(setProduct(allProducts))
  }

  const addNewProductState = (payload: IProduct) =>
    productDispatch(addNewProduct(payload))
  const editProductState = (payload: IProduct) =>
    productDispatch(editProduct(payload))
  const deleteProductState = (payload: string) =>
    productDispatch(deleteProduct(payload))

  const contextValue = useMemo(
    () => ({
      productState,
      addNewProductState,
      editProductState,
      deleteProductState,
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
