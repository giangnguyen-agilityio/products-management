import { type ACTION } from 'constants/action'
import { type Book } from './book'

export interface SetBookAction {
  type: typeof ACTION.SET_BOOK
  payload: Book[]
}

export interface StoreState {
  book: Book[]
}

export type ActionTypes = SetBookAction
