import React, {useEffect, useMemo, useReducer} from 'react'

// Importing the constants
import {ACTION} from '@constants'

// Importing the custom hooks
import {useHireRequests} from '@hooks/fetch'

// Importing the types
import {HireRequestsState} from '@types'

// Importing the Hire requests context
import HireRequestsContext from './HireRequestsContext'

// Importing the reducer
import reducer from './reducer'

interface ProviderProps {
  children: JSX.Element
}

export const initialState: HireRequestsState = {
  hireRequests: [],
}

const HireRequestsProvider = ({children}: ProviderProps): JSX.Element => {
  const {allHireRequests} = useHireRequests()
  const [hireRequestState, hireRequestDispatch] = useReducer(reducer, {
    ...initialState,
    hireRequests: allHireRequests ?? [],
  })

  useEffect(() => {
    if (allHireRequests) {
      hireRequestDispatch({
        type: ACTION.SET_HIRE_REQUESTS,
        payload: allHireRequests,
      })
    }
  }, [allHireRequests])

  const contextValue = useMemo(
    () => ({hireRequestState, hireRequestDispatch}),
    [hireRequestState]
  )

  return (
    <HireRequestsContext.Provider value={contextValue}>
      {children}
    </HireRequestsContext.Provider>
  )
}

export default HireRequestsProvider
