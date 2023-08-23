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

export interface IProductItem extends Pick<IProduct, 'id' | 'name' | 'image'> {}
export interface IProductData extends Omit<IProduct, 'id'> {}
