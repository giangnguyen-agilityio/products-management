import { ACTION } from '../constants/action'
import {
  type SetBookAction,
  type AddNewBookAction
} from '../types/store'
import { type Book } from '../types/book'

// This function creates an action to set the book data in the store
export const setBook = (payload: Book[]): SetBookAction => ({
  type: ACTION.SET_BOOK, // Specifies the action type as "SET_BOOK"
  payload // Contains the array of books to be set in the store
})

// This function creates an action to add a new book to the store
export const addNewBook = (payload: Book): AddNewBookAction => ({
  type: ACTION.ADD_NEW_BOOK, // Specifies the action type as "ADD_NEW_BOOK"
  payload // Contains the book object to be added to the store
})
