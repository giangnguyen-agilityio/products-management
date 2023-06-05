import { type ACTION } from '../constants/action'
import { type Book } from './book'
import { type HireRequest } from './hireRequest'

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

export interface HireRequestsState {
  hireRequests: HireRequest[]
}

export interface SetHireRequestsAction {
  type: typeof ACTION.SET_HIRE_REQUESTS
  payload: HireRequest[]
}

export type ActionTypes =
| SetBookAction
| AddNewBookAction
| EditBookAction
| DeleteBookAction
| SetHireRequestsAction
