import { axiosInstance } from '@utils/api'
import {
  addNewProductAPI,
  deleteProductAPI,
  editProductAPI,
} from '../api-actions'
import { ENDPOINT } from '@constants'

// Mock axiosInstance
jest.mock('@utils/api', () => ({
  axiosInstance: {
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
  },
}))

describe('API Methods', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('addNewProductAPI should call axiosInstance.post', async () => {
    const expectedUrl = `/${ENDPOINT.PRODUCTS}`
    const productData = {
      id: 'P123',
      name: 'Added Product',
      image: 'image-url-test',
      discount: 20,
      oldPrice: 100,
      newPrice: 80,
      description: 'description-test',
      rate: 4.5,
    }

    const axiosPostMock = jest.spyOn(axiosInstance, 'post')
    axiosPostMock.mockResolvedValueOnce(productData)

    const result = await addNewProductAPI(productData)

    expect(result).toEqual(productData)

    // Verify that the put method is called with the correct URL and data
    expect(axiosPostMock).toHaveBeenCalledWith(expectedUrl, productData)
  })

  it('editProductAPI should call axiosInstance.put', async () => {
    const productId = 'P123'
    const expectedUrl = `/${ENDPOINT.PRODUCTS}/${productId}`
    const productData = {
      id: 'P123',
      name: 'Updated Product',
      image: 'image-url-test',
      discount: 20,
      oldPrice: 100,
      newPrice: 80,
      description: 'Updated description',
      rate: 4.5,
    }

    const axiosPutMock = jest.spyOn(axiosInstance, 'put')
    axiosPutMock.mockResolvedValueOnce(productData)

    const result = await editProductAPI(productId, productData)

    expect(result).toEqual(productData)

    // Verify that the put method is called with the correct URL and data
    expect(axiosPutMock).toHaveBeenCalledWith(expectedUrl, productData)
  })

  it('deleteProductAPI should call axiosInstance.delete', async () => {
    const productId = 'P123'
    const expectedUrl = `/${ENDPOINT.PRODUCTS}/${productId}`

    const axiosDeleteMock = jest.spyOn(axiosInstance, 'delete')

    axiosDeleteMock.mockResolvedValueOnce({ status: 200 })

    await deleteProductAPI(productId)

    // Verify that the delete method is called with the correct URL
    expect(axiosDeleteMock).toHaveBeenCalledWith(expectedUrl)
  })
})
