import { ACTION } from '@constants'
import { IProduct } from './product'

/* The actions for managing the products */
export interface SetProductAction {
  type: typeof ACTION.SET_PRODUCT
  payload: IProduct[]
}

export interface AddNewProductAction {
  type: typeof ACTION.ADD_NEW_PRODUCT
  payload: IProduct
}

export interface EditProductAction {
  type: typeof ACTION.EDIT_PRODUCT
  payload: IProduct
}

export interface DeleteProductAction {
  type: typeof ACTION.DELETE_PRODUCT
  payload: string
}

export interface ProductsState {
  products: IProduct[]
}

export type ActionTypes =
  | SetProductAction
  | AddNewProductAction
  | EditProductAction
  | DeleteProductAction
