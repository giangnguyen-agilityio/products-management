import { ReactNode, useCallback, useMemo } from 'react'
import { IProduct } from '@types'
import ProductContext from './ProductContext'
import { API_URL, ENDPOINT } from '@constants'
import {
  deleteProductAPI,
  editProductAPI,
  swrFetcher,
} from '@services/api-actions'
import { addNewProductAPI } from '../../services/api-actions'
import useSWRInfinite from 'swr/infinite'

type ProviderProps = {
  children: ReactNode | ReactNode[]
}

const ProductProvider = ({ children }: ProviderProps): JSX.Element => {
  const {
    data: allProducts,
    mutate,
    isLoading,
    error,
    size,
    setSize,
  } = useSWRInfinite<IProduct[]>(
    index => `${API_URL}/${ENDPOINT.PRODUCTS}?page=${index + 1}&limit=8`,
    swrFetcher
  )

  const addNewProduct = useCallback(
    async (payload: IProduct) => {
      await addNewProductAPI(payload)
      mutate(allProducts) // Update the SWR cache after adding a new product
    },
    [allProducts, mutate]
  )

  const editProduct = useCallback(
    async (id: string, payload: IProduct) => {
      await editProductAPI(id, payload)
      mutate(allProducts) // Update the SWR cache after editing a product
    },
    [allProducts, mutate]
  )

  const deleteProduct = useCallback(
    async (id: string) => {
      await deleteProductAPI(id)
      mutate(allProducts) // Update the SWR cache after deleting a product
    },
    [allProducts, mutate]
  )

  const handleLoadMore = () => {
    setSize(size + 1)
  }

  const contextValue = useMemo(
    () => ({
      listProduct: allProducts?.flat() || [],
      isLoading,
      isError: error,
      addNewProduct,
      editProduct,
      deleteProduct,
      handleLoadMore,
    }),
    [
      allProducts,
      isLoading,
      addNewProduct,
      editProduct,
      deleteProduct,
      handleLoadMore,
    ]
  )

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
