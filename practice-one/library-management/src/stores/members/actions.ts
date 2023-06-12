// Importing the constants
import {ACTION} from '@constants'

// Importing the types
import {IMember, SetMemberAction, EditMemberAction} from '@types'

// This function creates an action to set the Members data in the store
export const setMembers = (payload: IMember[]): SetMemberAction => ({
  type: ACTION.SET_MEMBERS, // Specifies the action type as "SET_MEMBERS"
  payload, // Contains the array of members to be set in the store
})

// This function creates an action to edit a member in the store
export const editMember = (payload: IMember): EditMemberAction => ({
  type: ACTION.EDIT_MEMBER, // Specifies the action type as "EDIT_MEMBER"
  payload, // Contains the member object to be edited in the store
})
