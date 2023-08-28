// Libraries
import useSWR, { SWRResponse } from 'swr'

// Function helpers
import { handleServerError } from '@helpers'

// Constants
import { ENDPOINT } from '@constants'

// Types
import { IProduct } from '@types'

interface IProductById<T> extends SWRResponse<T> {
  errorMessage: string | null
}

// Using SWR to fetch the product by id
export const useProductById = (id: string): IProductById<IProduct> => {
  const { data, error, isLoading, ...rest } = useSWR<IProduct>(
    `/${ENDPOINT.PRODUCTS}/${id}`
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
