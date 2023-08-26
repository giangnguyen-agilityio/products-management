import axios from 'axios'
import { act } from 'react-dom/test-utils'
import {
  swrFetcher,
  addNewProductAPI,
  editProductAPI,
  deleteProductAPI,
} from '../api-actions'

jest.mock('axios')

describe('Product Reducer', () => {
  const mockProduct = {
    id: 'P01',
    name: 'iPhone 14 Pro Max',
    image: 'https://assets.nicepagecdn.com/d2cc3eaa/3159880/images/yttyy.jpg',
    discount: 11,
    oldPrice: 1263.8,
    newPrice: 1116.31,
    rate: 4.5,
    description:
      "The iPhone 14 Pro Max is Apple's flagship smartphone, featuring a Super Retina XDR display, A16 Bionic chip for powerful performance, and an advanced triple-camera system for exceptional photography. With premium design, Face ID, and MagSafe technology, it offers a top-tier user experience.",
  }

  it('fetches all products', async () => {
    const mockResponse = { data: [mockProduct] }
    jest
      .spyOn(axios, 'get')
      .mockImplementation(() => Promise.resolve(mockResponse))

    let products
    await act(async () => {
      products = await swrFetcher('')
    })

    expect(products).toEqual([mockProduct])
  })

  it('fetches a product by id', async () => {
    jest
      .spyOn(axios, 'get')
      .mockImplementation(() => Promise.resolve({ data: mockProduct }))

    let product
    await act(async () => {
      product = await swrFetcher('P01')
    })

    expect(product).toEqual(mockProduct)
  })

  it('adds a new product', async () => {
    jest
      .spyOn(axios, 'post')
      .mockImplementation(() => Promise.resolve({ data: mockProduct }))

    let addedProduct
    await act(async () => {
      addedProduct = await addNewProductAPI(mockProduct)
    })

    expect(addedProduct).toEqual(mockProduct)
  })

  it('edits a product', async () => {
    jest
      .spyOn(axios, 'put')
      .mockImplementation(() => Promise.resolve({ data: mockProduct }))

    let editedProduct
    await act(async () => {
      editedProduct = await editProductAPI('P01', mockProduct)
    })

    expect(editedProduct).toEqual(mockProduct)
  })

  it('deletes a product', async () => {
    jest
      .spyOn(axios, 'delete')
      .mockImplementation(() => Promise.resolve({ data: mockProduct }))

    let deletedProduct
    await act(async () => {
      deletedProduct = await deleteProductAPI('P01')
    })

    expect(deletedProduct).toEqual(mockProduct)
  })
})
