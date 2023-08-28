// Libraries
import { ReactNode, useCallback, useMemo } from 'react'
import useSWRInfinite from 'swr/infinite'

// Services
import {
  addNewProductAPI,
  editProductAPI,
  deleteProductAPI,
} from '@services/api-actions'

// Types
import { IProduct } from '@types'

// Constants
import { ENDPOINT } from '@constants'

// Context
import ProductContext from './ProductContext'

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
    index => `/${ENDPOINT.PRODUCTS}?page=${index + 1}&limit=8`,
    { revalidateAll: true }
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

  const handleLoadMore = useCallback(() => {
    setSize(size + 1)
  }, [setSize, size])

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
      error,
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
