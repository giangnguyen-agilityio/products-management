import {ACTION} from '@constants'
import {
  IBook,
  SetBookAction,
  AddNewBookAction,
  EditBookAction,
  DeleteBookAction,
} from '@types'

// This function creates an action to set the book data in the store
export const setBook = (payload: IBook[]): SetBookAction => ({
  type: ACTION.SET_BOOK, // Specifies the action type as "SET_BOOK"
  payload, // Contains the array of books to be set in the store
})

// This function creates an action to add a new book to the store
export const addNewBook = (payload: IBook): AddNewBookAction => ({
  type: ACTION.ADD_NEW_BOOK, // Specifies the action type as "ADD_NEW_BOOK"
  payload, // Contains the book object to be added to the store
})

// This function creates an action to edit a book in the store
export const editBook = (payload: IBook): EditBookAction => ({
  type: ACTION.EDIT_BOOK, // Specifies the action type as "EDIT_BOOK"
  payload, // Contains the book object to be edited in the store
})

// This function creates an action to delete a book from the store
export const deleteBook = (payload: string): DeleteBookAction => ({
  type: ACTION.DELETE_BOOK, // Specifies the action type as "DELETE_BOOK"
  payload, // Contains the ID of the book to be deleted from the store
})
