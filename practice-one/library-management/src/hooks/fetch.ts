import useSWR from 'swr'
import { type AxiosError } from 'axios'
import { handleServerError } from '../helpers/error-handler'

// services
import { fetchAllBooks } from '../services/api-actions'

// type
import { type Book } from '../types/book'

// constants
import { API_URL, APIType } from '../constants/api'

interface IFetch {
  isLoading: boolean
  error: AxiosError
  errorMessage: null | string
}

interface IBooks extends IFetch {
  items: Book[] | undefined
}

// Using SWR to fetch all products
export const useBooks = (): IBooks => {
  const { data, error } = useSWR<Book[]>(
    `${API_URL}/${APIType.BOOKS}`,
    fetchAllBooks
  )

  const errorMessage = (error !== null) ? handleServerError(error) : null

  return {
    items: data,
    isLoading: (error === null) && (data === undefined),
    error,
    errorMessage
  }
}
