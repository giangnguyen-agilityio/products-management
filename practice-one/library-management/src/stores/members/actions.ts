// Importing the constants
import {ACTION} from '@constants'

// Importing the types
import {IMember, SetMemberAction, EditMemberAction} from '@types'

// This function creates an action to set the Members data in the store
export const setMembers = (payload: IMember[]): SetMemberAction => ({
  type: ACTION.SET_HIRE_REQUESTS, // Specifies the action type as "SET_MEMBERS"
  payload, // Contains the array of members to be set in the store
})
