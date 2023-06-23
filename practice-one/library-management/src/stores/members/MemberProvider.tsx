import React, {useMemo, useReducer} from 'react'
import {setMembers} from './actions'
import {useMembers} from '@hooks/fetch'
import {MembersState} from '@types'
import MemberContext from './MemberContext'
import reducer from './reducer'

interface ProviderProps {
  children: JSX.Element
}

export const initialState: MembersState = {
  members: [],
}

const MembersProvider = ({children}: ProviderProps): JSX.Element => {
  const {allMembers} = useMembers()
  const [memberState, memberDispatch] = useReducer(reducer, initialState)

  // Dispatch the setMembers action to update the state once the data is fetched.
  if (allMembers && !memberState.members.length) {
    memberDispatch(setMembers(allMembers))
  }

  const contextValue = useMemo(
    () => ({memberState, memberDispatch}),
    [memberState]
  )

  return (
    <MemberContext.Provider value={contextValue}>
      {children}
    </MemberContext.Provider>
  )
}

export default MembersProvider
