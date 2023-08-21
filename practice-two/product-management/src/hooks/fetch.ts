import useSWR, { KeyedMutator, SWRResponse } from 'swr'
import { AxiosError } from 'axios'
import { IProduct } from '@types'
import { handleServerError } from '@helpers'
import { API_URL, ENDPOINT } from '@constants'
import { fetchAllProducts, fetchProductById } from '@services/api-actions'

interface IFetch {
  error: AxiosError
  errorMessage: null | string
  mutate: KeyedMutator<IProduct[]>
}

interface IProducts extends IFetch {
  allProducts: IProduct[] | undefined
}

interface IProductById<T> extends SWRResponse<T> {
  errorMessage: string | null
}

// Using SWR to fetch all products
export const useProducts = (currentPage: number): IProducts => {
  const { data, error, ...rest } = useSWR<IProduct[]>(
    `${API_URL}/${ENDPOINT.PRODUCTS}?_page=${currentPage}&_limit=8`,
    () => fetchAllProducts(currentPage)
  )

  const errorMessage = error ? handleServerError(error) : null

  return {
    allProducts: data,
    error,
    errorMessage,
    ...rest,
  }
}

// Using SWR to fetch the product by id
export const useProductById = (id: string): IProductById<IProduct> => {
  const { data, error, isLoading, ...rest } = useSWR<IProduct>(
    `${API_URL}/${ENDPOINT.PRODUCTS}/${id}`,
    fetchProductById
  )

  const errorMessage = error ? handleServerError(error) : null

  return {
    data,
    isLoading,
    error,
    errorMessage,
    ...rest,
  }
}
