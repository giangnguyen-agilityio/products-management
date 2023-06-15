import React, {useEffect, useMemo, useReducer} from 'react'
import {ACTION} from '@constants'
import {useHireRequests} from '@hooks/fetch'
import {HireRequestsState, IHireRequest} from '@types'
import HireRequestsContext from './HireRequestsContext'
import reducer from './reducer'
import {deleteHireRequest, editHireRequest} from './actions'

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

  const editHireRequestState = (payload: IHireRequest) =>
    hireRequestDispatch(editHireRequest(payload))
  const deleteHireRequestState = (payload: string) =>
    hireRequestDispatch(deleteHireRequest(payload))

  const contextValue = useMemo(
    () => ({hireRequestState, editHireRequestState, deleteHireRequestState}),
    [hireRequestState]
  )

  return (
    <HireRequestsContext.Provider value={contextValue}>
      {children}
    </HireRequestsContext.Provider>
  )
}

export default HireRequestsProvider
