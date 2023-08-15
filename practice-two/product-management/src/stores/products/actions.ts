import { ACTION } from '@constants'
import {
  IProduct,
  SetProductAction,
  AddNewProductAction,
  EditProductAction,
  DeleteProductAction,
} from '@types'

// This function creates an action to set the product data in the store
export const setProduct = (payload: IProduct[]): SetProductAction => ({
  type: ACTION.SET_PRODUCT, // Specifies the action type as "SET_PRODUCT"
  payload, // Contains the array of products to be set in the store
})

// This function creates an action to add a new product to the store
export const addNewProduct = (payload: IProduct): AddNewProductAction => ({
  type: ACTION.ADD_NEW_PRODUCT, // Specifies the action type as "ADD_NEW_PRODUCT"
  payload, // Contains the product object to be added to the store
})

// This function creates an action to edit a product in the store
export const editProduct = (payload: IProduct): EditProductAction => ({
  type: ACTION.EDIT_PRODUCT, // Specifies the action type as "EDIT_PRODUCT"
  payload, // Contains the product object to be edited in the store
})

// This function creates an action to delete a product from the store
export const deleteProduct = (payload: string): DeleteProductAction => ({
  type: ACTION.DELETE_PRODUCT, // Specifies the action type as "DELETE_PRODUCT"
  payload, // Contains the ID of the product to be deleted from the store
})
