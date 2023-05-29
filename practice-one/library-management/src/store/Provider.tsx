import React, { useEffect, useMemo, useReducer } from 'react'
import { type Book } from '../types/book'
import { ACTION } from '../constants/action'
import Context from './Context'
import reducer from './reducer'
import { useBooks } from '../hooks/fetch'

interface ProviderProps {
  children: JSX.Element
}

export const initialState: { book: Book[] } = {
  book: []
}

const Provider = ({ children }: ProviderProps): JSX.Element => {
  const { items } = useBooks()
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    book: []
  })

  useEffect(() => {
    if (items != null) {
      dispatch({ type: ACTION.SET_BOOK, payload: items })
    }
  }, [items])

  const contextValue = useMemo(() => [state, dispatch], [state])

  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

export default Provider
