import useSWR, { SWRResponse } from 'swr'
import { AxiosError } from 'axios'
import { IProduct } from '@types'
import { handleServerError } from '@helpers'
import { API_URL, ENDPOINT } from '@constants'
import { swrFetcher } from '@services/api-actions'

interface IFetch {
  error: AxiosError
  errorMessage: null | string
  isLoading: boolean
}

interface IProducts extends IFetch {
  allProducts: IProduct[] | undefined
}

interface IProductById<T> extends SWRResponse<T> {
  errorMessage: string | null
}

// Using SWR to fetch all products
export const useProducts = (index: number): IProducts => {
  const { data, error, isLoading, ...rest } = useSWR<IProduct[]>(
    `${API_URL}/${ENDPOINT.PRODUCTS}?page=${index}&limit=8`,
    swrFetcher
  )

  const errorMessage = error ? handleServerError(error) : null

  return {
    allProducts: data,
    isLoading,
    error,
    errorMessage,
    ...rest,
  }
}

// Using SWR to fetch the product by id
export const useProductById = (id: string): IProductById<IProduct> => {
  const { data, error, isLoading, ...rest } = useSWR<IProduct>(
    `${API_URL}/${ENDPOINT.PRODUCTS}/${id}`,
    swrFetcher
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
