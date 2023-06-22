import useSWR from 'swr'
import {type AxiosError} from 'axios'
import {
  fetchAllBooks,
  fetchAllHireRequest,
  fetchAllMember,
} from '@services/api-actions'
import {IBook, IHireRequest, IMember} from '@types'
import {handleServerError} from '@helpers'
import {API_URL, ENDPOINT} from '@constants'

interface IFetch {
  isLoading: boolean
  error: AxiosError
  errorMessage: null | string
}

interface IBooks extends IFetch {
  allBooks: IBook[] | undefined
}

interface IHireRequests extends IFetch {
  allHireRequests: IHireRequest[] | undefined
}

interface IMembers extends IFetch {
  allMembers: IMember[] | undefined
}

// Using SWR to fetch all products
export const useBooks = (): IBooks => {
  const {data, error} = useSWR<IBook[]>(
    `${API_URL}/${ENDPOINT.BOOKS}`,
    fetchAllBooks
  )

  const errorMessage = error ? handleServerError(error) : null

  return {
    allBooks: data,
    isLoading: error === null && data === undefined,
    error,
    errorMessage,
  }
}

// Using SWR to fetch all hire requests
export const useHireRequests = (): IHireRequests => {
  const {data, error} = useSWR<IHireRequest[]>(
    `${API_URL}/${ENDPOINT.HIRE_REQUEST}`,
    fetchAllHireRequest
  )

  const errorMessage = error ? handleServerError(error) : null

  return {
    allHireRequests: data,
    isLoading: error === null && data === undefined,
    error,
    errorMessage,
  }
}

// Using SWR to fetch all hire requests
export const useMembers = (): IMembers => {
  const {data, error} = useSWR<IMember[]>(
    `${API_URL}/${ENDPOINT.MEMBERS}`,
    fetchAllMember
  )

  const errorMessage = error ? handleServerError(error) : null

  return {
    allMembers: data,
    isLoading: error === null && data === undefined,
    error,
    errorMessage,
  }
}
