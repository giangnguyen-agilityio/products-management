import { type ACTION } from 'constants/action'
import { type Book } from './book'

export interface SetBookAction {
  type: typeof ACTION.SET_BOOK
  payload: Book[]
}

export interface AddNewBookAction {
  type: typeof ACTION.ADD_NEW_BOOK
  payload: Book
}

export interface BooksState {
  books: Book[]
}

export type ActionTypes =
| SetBookAction
| AddNewBookAction
