import React, { useEffect, useMemo, useReducer } from 'react'
import { ACTION } from '../constants/action'
import BookContext from './BookContext'
import reducer from './reducer'
import { useBooks } from '../hooks/fetch'
import { type BooksState } from '../types/store'

interface ProviderProps {
  children: JSX.Element
}

export const initialState: BooksState = {
  books: []
}

const BookProvider = ({ children }: ProviderProps): JSX.Element => {
  const { allBooks } = useBooks()
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    books: allBooks ?? []
  })

  useEffect(() => {
    if (allBooks !== undefined) {
      dispatch({ type: ACTION.SET_BOOK, payload: allBooks })
    }
  }, [allBooks])

  const contextValue = useMemo(() => ({ state, dispatch }), [state])

  return (
    <BookContext.Provider value={contextValue}>{children}</BookContext.Provider>
  )
}

export default BookProvider
