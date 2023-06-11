import React, {useEffect, useMemo, useReducer} from 'react'

// Importing the constants
import {ACTION} from '@constants'

// Importing the custom hook
import {useMembers} from '@hooks/fetch'

// Importing the type
import {MembersState} from '@types'

// Importing the Member context
import MemberContext from './MemberContext'

// Importing the reducer
import reducer from './reducer'

interface ProviderProps {
  children: JSX.Element
}

export const initialState: MembersState = {
  members: [],
}

const MembersProvider = ({children}: ProviderProps): JSX.Element => {
  const {allMembers} = useMembers()
  const [memberState, memberDispatch] = useReducer(reducer, {
    ...initialState,
    members: allMembers ?? [],
  })
  useEffect(() => {
    if (allMembers) {
      memberDispatch({type: ACTION.SET_MEMBERS, payload: allMembers})
    }
  }, [allMembers])

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
