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
    case ACTION.EDIT_HIRE_REQUEST: {
      const editedHireRequest = action.payload as IHireRequest // Extracting payload from action object
      const updatedHireRequests = state.hireRequests.map(hireRequest =>
        hireRequest.id === editedHireRequest.id // Finding the index of edited request in existing requests array
          ? editedHireRequest // Replacing the old request with edited request
          : hireRequest
      )
      return {
        ...state,
        hireRequests: updatedHireRequests,
      }
    }
    case ACTION.DELETE_HIRE_REQUEST: {
      const deletedHireRequestId = action.payload // Extracting payload from action object
      const updatedHireRequests = state.hireRequests.filter(
        hireRequest => hireRequest.id !== deletedHireRequestId // Filtering out deleted request from existing requests array
      )
      return {
        ...state,
        hireRequests: updatedHireRequests,
      }
    }
    default:
      throw new Error(ACTION.INVALID_ACTION) // Throwing error for invalid action type
  }
}

export default reducer
