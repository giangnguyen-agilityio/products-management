import { IProduct } from '@types'
import { createContext } from 'react'

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
