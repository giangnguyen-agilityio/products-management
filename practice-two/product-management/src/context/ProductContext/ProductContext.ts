import { createContext } from 'react'
import { IProduct } from '@types'

export interface IProductContext {
  listProduct: IProduct[]
  isLoading: boolean
  isLoadingMore: boolean | undefined
  isReachingEnd: boolean | undefined
  isError: any
  addNewProduct: (payload: IProduct) => Promise<void>
  handleLoadMore: () => void
}

const ProductContext = createContext<IProductContext | null>(null)

export default ProductContext
