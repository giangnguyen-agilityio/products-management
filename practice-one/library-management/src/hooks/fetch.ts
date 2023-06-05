import useSWR from 'swr'
import { type AxiosError } from 'axios'
import { handleServerError } from '../helpers/error-handler'

// services
import { fetchAllBooks, fetchAllHireRequest } from '../services/api-actions'

// type
import { type Book } from '../types/book'
import { type HireRequest } from '../types/hireRequest'

// constants
import { API_URL, APIType } from '../constants/api'

interface IFetch {
  isLoading: boolean
  error: AxiosError
  errorMessage: null | string
}

interface IBooks extends IFetch {
  allBooks: Book[] | undefined
}

interface IHireRequests extends IFetch {
  allHireRequests: HireRequest[] | undefined
}

// Using SWR to fetch all products
export const useBooks = (): IBooks => {
  const { data, error } = useSWR<Book[]>(
        `${API_URL}/${APIType.BOOKS}`,
        fetchAllBooks
  )

  const errorMessage = error !== null ? handleServerError(error) : null

  return {
    allBooks: data,
    isLoading: error === null && data === undefined,
    error,
    errorMessage
  }
}

// Using SWR to fetch all hire requests
export const useHireRequests = (): IHireRequests => {
  const { data, error } = useSWR<HireRequest[]>(
    `${API_URL}/${APIType.HIRE_REQUEST}`,
    fetchAllHireRequest
  )

  const errorMessage = error !== null ? handleServerError(error) : null

  return {
    allHireRequests: data,
    isLoading: error === null && data === undefined,
    error,
    errorMessage
  }
}
