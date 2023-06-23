import React, {useMemo, useReducer} from 'react'
import {useBooks} from '@hooks/fetch'
import {BooksState, IBook} from '@types'
import BookContext from './BookContext'
import reducer from './reducer'
import {addNewBook, deleteBook, editBook, setBook} from './actions'

interface ProviderProps {
  children: JSX.Element
}

export const initialState: BooksState = {
  books: [],
}

const BookProvider = ({children}: ProviderProps): JSX.Element => {
  const {allBooks} = useBooks()
  const [bookState, bookDispatch] = useReducer(reducer, initialState)

  // Dispatch the setBook action to update the state once the data is fetched.
  if (allBooks && !bookState.books.length) {
    bookDispatch(setBook(allBooks))
  }

  const addNewBookState = (payload: IBook) => bookDispatch(addNewBook(payload))
  const editBookState = (payload: IBook) => bookDispatch(editBook(payload))
  const deleteBookState = (payload: string) => bookDispatch(deleteBook(payload))

  const contextValue = useMemo(
    () => ({bookState, addNewBookState, editBookState, deleteBookState}),
    [bookState]
  )

  return (
    <BookContext.Provider value={contextValue}>{children}</BookContext.Provider>
  )
}

export default BookProvider
