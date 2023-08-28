// Constants
import { ENDPOINT } from '@constants'

// Types
import { IProduct, IProductData } from '@types'

// Utils
import { axiosInstance } from '@utils/api'

// API method for add a new product
export const addNewProductAPI = async (
  product: IProductData
): Promise<IProduct> => {
  return axiosInstance.post(`/${ENDPOINT.PRODUCTS}`, product)
}

// API method for editing a product
export const editProductAPI = async (
  id: string,
  product: IProductData
): Promise<IProduct> => {
  return axiosInstance.put(`/${ENDPOINT.PRODUCTS}/${id}`, product)
}

// API method for deleting a product
export const deleteProductAPI = async (id: string): Promise<IProduct> => {
  return axiosInstance.delete(`/${ENDPOINT.PRODUCTS}/${id}`)
}
