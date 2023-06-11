// Importing the constants
import {ACTION} from '@constants'

// Importing the types
import {MembersState, ActionTypes, IMember} from '@types'

// Defining the reducer function responsible for updating members state based on dispatched actions
const reducer = (state: MembersState, action: ActionTypes): MembersState => {
  // Evaluating the type of dispatched action and updating members state accordingly using switch statement
  switch (action.type) {
    case ACTION.SET_MEMBERS:
      return {
        ...state,
        members: action.payload as IMember[],
      }
    case ACTION.EDIT_MEMBER: {
      const editedMember = action.payload as IMember // Extracting payload from action object
      const updatedMember = state.members.map(
        member => (member.id === editedMember.id ? editedMember : member) // Finding the index of edited member in existing members array
      )
      return {
        ...state,
        members: updatedMember,
      }
    }
    default:
      throw new Error(ACTION.INVALID_ACTION) // Throwing error for invalid action type
  }
}

export default reducer
