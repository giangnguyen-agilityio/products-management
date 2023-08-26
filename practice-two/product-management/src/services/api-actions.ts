import axios from 'axios'
import { API_URL, ENDPOINT } from '@constants'
import { IProduct, IProductData } from '@types'

// API method for fetching
export const swrFetcher = async (url: string) => {
  const res = await axios.get(url)
  return res.data
}

// API method for add a new product
export const addNewProductAPI = async (
  product: IProductData
): Promise<IProduct> => {
  const res = await axios.post(`${API_URL}/${ENDPOINT.PRODUCTS}`, product)
  return res.data
}

// API method for editing a product
export const editProductAPI = async (
  id: string,
  product: IProductData
): Promise<IProduct> => {
  const res = await axios.put(`${API_URL}/${ENDPOINT.PRODUCTS}/${id}`, product)
  return res.data
}

// API method for deleting a product
export const deleteProductAPI = async (id: string): Promise<IProduct> => {
  const res = await axios.delete(`${API_URL}/${ENDPOINT.PRODUCTS}/${id}`)
  return res.data
}
