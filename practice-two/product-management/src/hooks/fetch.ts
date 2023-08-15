import useSWR, { SWRResponse } from 'swr'
import { AxiosError } from 'axios'
import { IProduct } from '@types'
import { handleServerError } from '@helpers'
import { API_URL, ENDPOINT } from '@constants'
import { fetchAllProducts, fetchProductById } from '@services/api-actions'

interface IFetch {
  isLoading: boolean
  error: AxiosError
  errorMessage: null | string
}

interface IProducts extends IFetch {
  allProducts: IProduct[] | undefined
}

interface IProductById<T> extends SWRResponse<T> {
  errorMessage: string | null
}

// Using SWR to fetch all products
export const useProducts = (): IProducts => {
  const { data, error } = useSWR<IProduct[]>(
    `${API_URL}/${ENDPOINT.PRODUCTS}`,
    fetchAllProducts
  )

  const errorMessage = error ? handleServerError(error) : null

  return {
    allProducts: data,
    isLoading: error === null && data === undefined,
    error,
    errorMessage,
  }
}

// Using SWR to fetch the product by id
export const useProductById = (id: string): IProductById<IProduct> => {
  const { error, ...rest } = useSWR<IProduct>(
    `${API_URL}/${ENDPOINT.PRODUCTS}/${id}`,
    fetchProductById
  )

  const errorMessage = error ? handleServerError(error) : null

  return {
    error,
    errorMessage,
    ...rest,
  }
}
