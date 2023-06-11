import React, {useEffect, useMemo, useReducer} from 'react'

// Importing the constants
import {ACTION} from '@constants'

// Importing the custom hook
import {useBooks} from '@hooks/fetch'

// Importing the type
import {BooksState} from '@types'

// Importing the Book context
import BookContext from './BookContext'

// Importing the reducer
import reducer from './reducer'

interface ProviderProps {
  children: JSX.Element
}

export const initialState: BooksState = {
  books: [],
}

const BookProvider = ({children}: ProviderProps): JSX.Element => {
  const {allBooks} = useBooks()
  const [bookState, bookDispatch] = useReducer(reducer, {
    ...initialState,
    books: allBooks ?? [],
  })

  useEffect(() => {
    if (allBooks) {
      bookDispatch({type: ACTION.SET_BOOK, payload: allBooks})
    }
  }, [allBooks])

  const contextValue = useMemo(() => ({bookState, bookDispatch}), [bookState])

  return (
    <BookContext.Provider value={contextValue}>{children}</BookContext.Provider>
  )
}

export default BookProvider
