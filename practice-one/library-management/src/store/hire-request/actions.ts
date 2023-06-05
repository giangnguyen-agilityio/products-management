import { ACTION } from '../../constants/action'
import {
  type SetHireRequestsAction
} from 'types/store'
import { type HireRequest } from '../../types/hireRequest'

// This function creates an action to set the Hire requests data in the store
export const setHireRequests = (payload: HireRequest[]): SetHireRequestsAction => ({
  type: ACTION.SET_HIRE_REQUESTS, // Specifies the action type as "SET_HIRE_REQUESTS"
  payload // Contains the array of hire requests to be set in the store
})
