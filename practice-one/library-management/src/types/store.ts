import {ACTION} from '@constants'
import {IBook} from './book'
import {IHireRequest} from './hireRequest'
import {IMember} from './member'

/* The actions for managing the books */
export interface SetBookAction {
  type: typeof ACTION.SET_BOOK
  payload: IBook[]
}

export interface AddNewBookAction {
  type: typeof ACTION.ADD_NEW_BOOK
  payload: IBook
}

export interface EditBookAction {
  type: typeof ACTION.EDIT_BOOK
  payload: IBook
}

export interface DeleteBookAction {
  type: typeof ACTION.DELETE_BOOK
  payload: string
}

export interface BooksState {
  books: IBook[]
}

/* The actions for managing the book hire requests */
export interface HireRequestsState {
  hireRequests: IHireRequest[]
}

export interface SetHireRequestsAction {
  type: typeof ACTION.SET_HIRE_REQUESTS
  payload: IHireRequest[]
}

export interface AddNewHireRequestAction {
  type: typeof ACTION.ADD_NEW_HIRE_REQUEST
  payload: IHireRequest
}

export interface EditHireRequestAction {
  type: typeof ACTION.EDIT_HIRE_REQUEST
  payload: IHireRequest
}

/* The actions for managing the members  */
export interface MembersState {
  members: IMember[]
}

export interface SetMemberAction {
  type: typeof ACTION.SET_MEMBERS
  payload: IMember[]
}

export type ActionTypes =
  | SetBookAction
  | AddNewBookAction
  | EditBookAction
  | DeleteBookAction
  | SetHireRequestsAction
  | AddNewHireRequestAction
  | EditHireRequestAction
  | SetMemberAction
