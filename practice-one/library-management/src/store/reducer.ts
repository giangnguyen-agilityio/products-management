import { ACTION } from '../constants/action'
import { type BooksState, type ActionTypes } from '../types/store'
import { type Book } from '../types/book'

const reducer = (state: BooksState, action: ActionTypes): BooksState => {
  switch (action.type) {
    case ACTION.SET_BOOK:
      return {
        ...state,
        books: action.payload as Book[]
      }
    case ACTION.ADD_NEW_BOOK:
      return {
        ...state,
        books: [action.payload as Book, ...state.books]
      }
    case ACTION.EDIT_BOOK: {
      const editedBook = action.payload as Book
      const updatedBooks = state.books.map((book) =>
        book.id === editedBook.id ? editedBook : book
      )

      return {
        ...state,
        books: updatedBooks
      }
    }
    default:
      throw new Error('Invalid action')
  }
}

export default reducer
