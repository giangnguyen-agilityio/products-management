import axios from 'axios'
import { API_URL, ENDPOINT } from '@constants'
import { IProduct } from '@types'

// API method for fetching all products
export const fetchAllProducts = async (): Promise<IProduct[]> => {
  const res = await axios.get(`${API_URL}/${ENDPOINT.PRODUCTS}`)
  return res.data
}

// API method for fetching the product by id
export const fetchProductById = async (id: string): Promise<IProduct> => {
  const res = await axios.get(id)
  return res.data
}

// API method for add a new product
export const addNewProductAPI = async (
  product: IProduct
): Promise<IProduct> => {
  const res = await axios.post(`${API_URL}/${ENDPOINT.PRODUCTS}`, product)
  return res.data
}

// API method for editing a product
export const editProductAPI = async (
  id: string,
  product: IProduct
): Promise<IProduct> => {
  const res = await axios.put(`${API_URL}/${ENDPOINT.PRODUCTS}/${id}`, product)
  return res.data
}

// API method for deleting a product
export const deleteProductAPI = async (id: string): Promise<IProduct> => {
  const res = await axios.delete(`${API_URL}/${ENDPOINT.PRODUCTS}/${id}`)
  return res.data
}
