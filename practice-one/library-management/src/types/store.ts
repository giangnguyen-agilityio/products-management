import { type ACTION } from '../constants/action'
import { type Book } from './book'

export interface SetBookAction {
  type: typeof ACTION.SET_BOOK
  payload: Book[]
}

export interface AddNewBookAction {
  type: typeof ACTION.ADD_NEW_BOOK
  payload: Book
}

export interface EditBookAction {
  type: typeof ACTION.EDIT_BOOK
  payload: Book
}

export interface DeleteBookAction {
  type: typeof ACTION.DELETE_BOOK
  payload: string
}

export interface BooksState {
  books: Book[]
}

export type ActionTypes =
| SetBookAction
| AddNewBookAction
| EditBookAction
| DeleteBookAction
