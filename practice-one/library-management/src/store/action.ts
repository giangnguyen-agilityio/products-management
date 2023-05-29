import { ACTION } from 'constants/action'
import {
  type SetBookAction
} from 'types/store'
import { type Book } from '../types/book'

export const setBook = (payload: Book[]): SetBookAction => ({
  type: ACTION.SET_BOOK,
  payload
})
