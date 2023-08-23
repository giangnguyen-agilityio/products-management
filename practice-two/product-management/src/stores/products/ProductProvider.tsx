import { useMemo, useReducer } from 'react'
import { ProductsState, IProduct } from '@types'
import ProductContext from './ProductContext'
import reducer from './reducer'
import {
  addNewProduct,
  editProduct,
  deleteProduct,
  setProduct,
} from './actions'
import { mutate } from 'swr'

interface ProviderProps {
  children: JSX.Element
}

export const initialState: ProductsState = {
  products: [],
}

const ProductProvider = ({ children }: ProviderProps): JSX.Element => {
  const [productState, productDispatch] = useReducer(reducer, initialState)

  const setProductState = (payload: IProduct[]) => {
    productDispatch(setProduct(payload))
  }

  const addNewProductState = (payload: IProduct) => {
    productDispatch(addNewProduct(payload))
    mutate // Update the SWR cache after adding a new product
  }

  const editProductState = (payload: IProduct) => {
    productDispatch(editProduct(payload))
    mutate // Update the SWR cache after editing a product
  }

  const deleteProductState = (payload: string) => {
    productDispatch(deleteProduct(payload))
    mutate // Update the SWR cache after deleting a product
  }

  const contextValue = useMemo(
    () => ({
      productState,
      setProductState,
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
