import { ACTION } from '../../constants/action'
import { type HireRequestsState, type ActionTypes } from '../../types/store'
import { type HireRequest } from '../../types/hireRequest'

const reducer = (state: HireRequestsState, action: ActionTypes): HireRequestsState => {
  switch (action.type) {
    case ACTION.SET_HIRE_REQUESTS:
      return {
        ...state,
        hireRequests: action.payload as HireRequest[]
      }
    default:
      throw new Error('Invalid action')
  }
}

export default reducer
