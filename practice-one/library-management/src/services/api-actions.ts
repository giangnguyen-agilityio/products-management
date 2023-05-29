import axios from 'axios'

import { API_URL, APIType } from '../constants/api'

import { type Book } from '../types/book'

// API methods for fetching all products
export const fetchAllBooks = async (): Promise<Book[]> => {
  const res = await axios.get(`${API_URL}/${APIType.BOOKS}`)
  return res.data
}

// API methods for add a new book
export const addNewBook = async (value: Book): Promise<Book> => {
  const res = await axios.post(`${API_URL}/${APIType.BOOKS}`, value)
  return res.data
}
