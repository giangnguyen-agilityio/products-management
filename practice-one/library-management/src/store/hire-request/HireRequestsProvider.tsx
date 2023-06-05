import React, { useEffect, useMemo, useReducer } from 'react'
import { ACTION } from '../../constants/action'
import HireRequestsContext from './HireRequestsContext'
import reducer from './reducer'
import { useHireRequests } from '../../hooks/fetch'
import { type HireRequestsState } from '../../types/store'

interface ProviderProps {
  children: JSX.Element
}

export const initialState: HireRequestsState = {
  hireRequests: []
}

const HireRequestsProvider = ({ children }: ProviderProps): JSX.Element => {
  const { allHireRequests } = useHireRequests()
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    hireRequests: allHireRequests ?? []
  })

  useEffect(() => {
    if (allHireRequests !== undefined) {
      dispatch({ type: ACTION.SET_HIRE_REQUESTS, payload: allHireRequests })
    }
  }, [allHireRequests])

  const contextValue = useMemo(() => ({ state, dispatch }), [state])

  return (
    <HireRequestsContext.Provider value={contextValue}>
      {children}
    </HireRequestsContext.Provider>
  )
}

export default HireRequestsProvider
