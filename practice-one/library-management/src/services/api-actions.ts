import axios from 'axios'

import { API_URL, APIType } from '../constants/api'

import { type Book } from '../types/book'

// API method for fetching all products
export const fetchAllBooks = async (): Promise<Book[]> => {
  const res = await axios.get(`${API_URL}/${APIType.BOOKS}`)
  return res.data
}

// API method for fetching the book by id
export const fetchBookById = async (id: string): Promise<Book> => {
  const res = await axios.get(`${API_URL}/${APIType.BOOKS}/${id}`)
  return res.data
}

// API method for add a new book
export const addNewBookAPI = async (book: Book): Promise<Book> => {
  const res = await axios.post(`${API_URL}/${APIType.BOOKS}`, book)
  return res.data
}

// API method for editing a book
export const editBookAPI = async (
  id: string,
  book: Book
): Promise<Book> => {
  const res = await axios.put(`${API_URL}/${APIType.BOOKS}/${id}`, book)
  return res.data
}
