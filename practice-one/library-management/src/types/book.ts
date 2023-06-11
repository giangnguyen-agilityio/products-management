export interface IBook {
  id: string
  title: string
  author: string
  price: number
  description: string
  image: string | null
  alt: string
  availableQuantity: number
  totalQuantity: number
}
