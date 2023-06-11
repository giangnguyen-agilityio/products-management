// Importing the constants
import {ACTION} from '@constants'

// Importing the types
import {BooksState, ActionTypes, IBook} from '@types'

// Defining the reducer function responsible for updating state based on dispatched actions
const reducer = (state: BooksState, action: ActionTypes): BooksState => {
  // Evaluating the type of dispatched action and updating state accordingly using switch statement
  switch (action.type) {
    case ACTION.SET_BOOK:
      return {
        ...state,
        books: action.payload as IBook[],
      }
    case ACTION.ADD_NEW_BOOK:
      return {
        ...state,
        books: [action.payload as IBook, ...state.books],
      }
    case ACTION.EDIT_BOOK: {
      const editedBook = action.payload as IBook // Extracting payload from action object
      const updatedBooks = state.books.map(
        book => (book.id === editedBook.id ? editedBook : book) // Finding the index of edited book in existing books array
      )
      return {
        ...state,
        books: updatedBooks,
      }
    }
    case ACTION.DELETE_BOOK: {
      const deletedBookId = action.payload // Extracting payload from action object
      const updatedBooks = state.books.filter(book => book.id !== deletedBookId) // Filtering out deleted book from existing books array

      return {
        ...state,
        books: updatedBooks,
      }
    }
    default:
      throw new Error(ACTION.INVALID_ACTION) // Throwing error for invalid action type
  }
}

export default reducer
