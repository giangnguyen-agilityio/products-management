import { createContext } from 'react'
import { IProduct } from '@types'

export interface IProductContext {
  listProduct: IProduct[]
  isLoading: boolean
  isError: any
  addNewProduct: (payload: IProduct) => Promise<void>
  editProduct: (id: string, payload: IProduct) => Promise<void>
  deleteProduct: (id: string) => Promise<void>
  handleLoadMore: () => void
}

const ProductContext = createContext<IProductContext | null>(null)

export default ProductContext
