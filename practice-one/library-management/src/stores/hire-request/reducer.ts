// Importing the constants
import {ACTION} from '@constants'

// Importing the types
import {HireRequestsState, ActionTypes, IHireRequest} from '@types'

// Defining a reducer function that handles state changes based on actions dispatched by the store
const reducer = (
  state: HireRequestsState,
  action: ActionTypes
): HireRequestsState => {
  // Evaluating the type of dispatched action and updating state accordingly using switch statement
  switch (action.type) {
    case ACTION.SET_HIRE_REQUESTS:
      return {
        ...state,
        hireRequests: action.payload as IHireRequest[],
      }
    case ACTION.ADD_NEW_HIRE_REQUEST:
      return {
        ...state,
        hireRequests: [action.payload as IHireRequest, ...state.hireRequests],
      }
    default:
      throw new Error(ACTION.INVALID_ACTION) // Throwing error for invalid action type
  }
}

export default reducer
