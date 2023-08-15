import { ACTION } from '@constants'
import { ProductsState, ActionTypes, IProduct } from '@types'

// Defining the reducer function responsible for updating state based on dispatched actions
const reducer = (state: ProductsState, action: ActionTypes): ProductsState => {
  // Evaluating the type of dispatched action and updating state accordingly using switch statement
  switch (action.type) {
    case ACTION.SET_PRODUCT:
      return {
        ...state,
        products: action.payload as IProduct[],
      }
    case ACTION.ADD_NEW_PRODUCT:
      return {
        ...state,
        products: [action.payload as IProduct, ...state.products],
      }
    case ACTION.EDIT_PRODUCT: {
      const editedProduct = action.payload as IProduct // Extracting payload from action object
      const updatedProducts = state.products.map(
        product => (product.id === editedProduct.id ? editedProduct : product) // Finding the index of edited product in existing products array
      )
      return {
        ...state,
        products: updatedProducts,
      }
    }
    case ACTION.DELETE_PRODUCT: {
      const deletedProductId = action.payload // Extracting payload from action object
      const updatedProducts = state.products.filter(
        products => products.id !== deletedProductId
      ) // Filtering out deleted product from existing products array
      return {
        ...state,
        products: updatedProducts,
      }
    }
    default:
      throw new Error(ACTION.INVALID_ACTION) // Throwing error for invalid action type
  }
}

export default reducer
