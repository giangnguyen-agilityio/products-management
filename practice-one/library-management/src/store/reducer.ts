import { ACTION } from '../constants/action'
import { type StoreState, type ActionTypes } from '../types/store'

const reducer = (state: StoreState, action: ActionTypes): any => {
  switch (action.type) {
    case ACTION.SET_BOOK:
      return {
        ...state,
        book: action.payload
      }
    default:
      throw new Error('Invalid action')
  }
}

export default reducer
