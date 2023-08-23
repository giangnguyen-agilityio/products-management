import { ACTION } from '@constants'
import reducer from '../reducer'

describe('reducer', () => {
  const initialState = {
    products: [
      {
        id: 'P01',
        name: 'iPhone 14 Pro Max',
        image:
          'https://assets.nicepagecdn.com/d2cc3eaa/3159880/images/yttyy.jpg',
        discount: 11,
        oldPrice: 1263.8,
        newPrice: 1116.31,
        rate: 4.5,
        description:
          "The iPhone 14 Pro Max is Apple's flagship smartphone, featuring a Super Retina XDR display, A16 Bionic chip for powerful performance, and an advanced triple-camera system for exceptional photography. With premium design, Face ID, and MagSafe technology, it offers a top-tier user experience.",
      },
    ],
  }

  it('handles ACTION.SET_PRODUCT correctly', () => {
    const newProduct = {
      id: 'P02',
      name: 'Samsung Galaxy S22 Ultra',
      image: 'https://example.com/samsung.jpg',
      discount: 15,
      oldPrice: 1299.99,
      newPrice: 1104.99,
      rate: 4.8,
      description:
        'The Samsung Galaxy S22 Ultra is a powerful Android smartphone with a stunning display and advanced camera features.',
    }

    const action = {
      type: ACTION.SET_PRODUCT,
      payload: [newProduct],
    }

    const newState = reducer(initialState, action)

    expect(newState.products).toEqual([newProduct])
  })

  it('handles ACTION.ADD_NEW_PRODUCT correctly', () => {
    const newProduct = {
      id: 'P03',
      name: 'Google Pixel 6 Pro',
      image: 'https://example.com/pixel.jpg',
      discount: 10,
      oldPrice: 899.99,
      newPrice: 809.99,
      rate: 4.6,
      description:
        'The Google Pixel 6 Pro is a flagship Android phone with excellent camera capabilities.',
    }

    const action = {
      type: ACTION.ADD_NEW_PRODUCT,
      payload: newProduct,
    }

    const newState = reducer(initialState, action)

    expect(newState.products).toEqual([newProduct, ...initialState.products])
  })

  it('handles ACTION.EDIT_PRODUCT correctly', () => {
    const editedProduct = {
      id: 'P01',
      name: 'Updated iPhone 14 Pro Max',
      image: 'https://assets.nicepagecdn.com/updated-image.jpg',
      discount: 10,
      oldPrice: 1263.8,
      newPrice: 1137.42,
      rate: 4.7,
      description: 'Updated description for the iPhone 14 Pro Max.',
    }

    const action = {
      type: ACTION.EDIT_PRODUCT,
      payload: editedProduct,
    }

    const newState = reducer(initialState, action)

    const updatedProducts = initialState.products.map(product =>
      product.id === editedProduct.id ? editedProduct : product
    )

    expect(newState.products).toEqual(updatedProducts)
  })

  it('handles ACTION.EDIT_PRODUCT correctly when product ID does not match', () => {
    const editedProduct = {
      id: 'P02', // Using a different product ID
      name: 'Updated Samsung Galaxy S22 Ultra',
      image: 'https://assets.nicepagecdn.com/updated-samsung.jpg',
      discount: 12,
      oldPrice: 1299.99,
      newPrice: 1143.99,
      rate: 4.7,
      description: 'Updated description for the Samsung Galaxy S22 Ultra.',
    }

    const action = {
      type: ACTION.EDIT_PRODUCT,
      payload: editedProduct,
    }

    const newState = reducer(initialState, action)

    expect(newState.products).toEqual(initialState.products)
  })

  it('handles ACTION.DELETE_PRODUCT correctly', () => {
    const productIdToDelete = 'P01'

    const action = {
      type: ACTION.DELETE_PRODUCT,
      payload: productIdToDelete,
    }

    const newState = reducer(initialState, action)

    const updatedProducts = initialState.products.filter(
      product => product.id !== productIdToDelete
    )

    expect(newState.products).toEqual(updatedProducts)
  })

  it('throws error for invalid action type', () => {
    const action = {
      type: 'Invalid action',
    }

    expect(() => reducer(initialState, action as any)).toThrow(
      ACTION.INVALID_ACTION
    )
  })
})
