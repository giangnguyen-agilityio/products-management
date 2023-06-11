// Importing the constants
import {ACTION} from '@constants'

// Importing the types
import {
  IHireRequest,
  SetHireRequestsAction,
  AddNewHireRequestAction,
} from '@types'

// This function creates an action to set the Hire requests data in the store
export const setHireRequests = (
  payload: IHireRequest[]
): SetHireRequestsAction => ({
  type: ACTION.SET_HIRE_REQUESTS, // Specifies the action type as "SET_HIRE_REQUESTS"
  payload, // Contains the array of hire requests to be set in the store
})

// This function creates an action to add a new hire request to the store
export const addNewHireRequest = (
  payload: IHireRequest
): AddNewHireRequestAction => ({
  type: ACTION.ADD_NEW_HIRE_REQUEST, // Specifies the action type as "ADD_NEW_HIRE_REQUESTS"
  payload, // Contains the hire request object to be added to the store
})
