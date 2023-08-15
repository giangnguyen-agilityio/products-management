export interface IProduct {
  id: string
  name: string
  image: string | null
  discount: number
  oldPrice: number
  newPrice: number
  description: string
  rate: number
}

export interface IProductData extends Omit<IProduct, 'description'> {}
