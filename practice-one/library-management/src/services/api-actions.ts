import axios from 'axios'

// Importing the constants
import {API_URL, ENDPOINT} from '@constants'

// Importing the types
import {IBook, IHireRequest, IMember} from '@types'

// API method for fetching all products
export const fetchAllBooks = async (): Promise<IBook[]> => {
  const res = await axios.get(`${API_URL}/${ENDPOINT.BOOKS}`)
  return res.data
}

// API method for fetching the book by id
export const fetchBookById = async (id: string): Promise<IBook> => {
  const res = await axios.get(`${API_URL}/${ENDPOINT.BOOKS}/${id}`)
  return res.data
}

// API method for add a new book
export const addNewBookAPI = async (book: IBook): Promise<IBook> => {
  const res = await axios.post(`${API_URL}/${ENDPOINT.BOOKS}`, book)
  return res.data
}

// API method for editing a book
export const editBookAPI = async (id: string, book: IBook): Promise<IBook> => {
  const res = await axios.put(`${API_URL}/${ENDPOINT.BOOKS}/${id}`, book)
  return res.data
}

// API method for deleting a book
export const deleteBookAPI = async (id: string): Promise<IBook> => {
  const res = await axios.delete(`${API_URL}/${ENDPOINT.BOOKS}/${id}`)
  return res.data
}

// API method for fetching all hire requests
export const fetchAllHireRequest = async (): Promise<IHireRequest[]> => {
  const res = await axios.get(`${API_URL}/${ENDPOINT.HIRE_REQUEST}`)
  return res.data
}

// API method for add a new hire request
export const addNewHireRequestAPI = async (
  hireRequest: IHireRequest
): Promise<IHireRequest> => {
  const res = await axios.post(
    `${API_URL}/${ENDPOINT.HIRE_REQUEST}`,
    hireRequest
  )
  return res.data
}

// API method for fetching all members
export const fetchAllMember = async (): Promise<IMember[]> => {
  const res = await axios.get(`${API_URL}/${ENDPOINT.MEMBERS}`)
  return res.data
}

// API method for fetching the member by id
export const fetchMemberById = async (id: string): Promise<IMember> => {
  const res = await axios.get(`${API_URL}/${ENDPOINT.MEMBERS}/${id}`)
  return res.data
}

// API method for editing a member
export const editMemberAPI = async (
  id: string,
  member: IMember
): Promise<IMember> => {
  const res = await axios.put(`${API_URL}/${ENDPOINT.MEMBERS}/${id}`, member)
  return res.data
}
