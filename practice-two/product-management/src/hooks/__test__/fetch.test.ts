import useSWR from 'swr'
import { renderHook } from '@testing-library/react-hooks'
import { useProductById } from '../fetch'
import { handleServerError } from '@helpers'

// Mocking the SWR function and other dependencies
jest.mock('swr', () => ({
  __esModule: true,
  default: jest.fn(),
}))

jest.mock('@helpers', () => ({
  handleServerError: jest.fn(),
}))

jest.mock('@constants', () => ({
  ENDPOINT: {
    PRODUCTS: 'products',
  },
}))

// Mock the actual product data for testing
const mockProductData = {
  id: '1',
  name: 'Test Product',
  price: 10,
}

describe('useProductById', () => {
  it('should return product data when data is available', () => {
    const mockUseSWR = jest.fn(() => ({
      data: mockProductData,
      error: null,
      isLoading: false,
    }))
    ;(useSWR as jest.Mock).mockImplementation(mockUseSWR)

    const { result } = renderHook(() => useProductById('1'))

    expect(result.current.data).toEqual(mockProductData)
    expect(result.current.isLoading).toBe(false)
    expect(result.current.error).toBe(null)
    expect(result.current.errorMessage).toBe(null)
  })

  it('should handle server error', () => {
    const mockError = new Error('Server error')
    const mockHandleServerError = jest.fn(() => 'Server error message')
    ;(handleServerError as jest.Mock).mockImplementation(mockHandleServerError)

    const mockUseSWR = jest.fn(() => ({
      data: null,
      error: mockError,
      isLoading: false,
    }))
    ;(useSWR as jest.Mock).mockImplementation(mockUseSWR)

    const { result } = renderHook(() => useProductById('1'))

    expect(result.current.data).toBe(null)
    expect(result.current.isLoading).toBe(false)
    expect(result.current.error).toBe(mockError)
    expect(result.current.errorMessage).toBe('Server error message')
  })

  it('should return loading state', () => {
    const mockUseSWR = jest.fn(() => ({
      data: null,
      error: null,
      isLoading: true,
    }))
    ;(useSWR as jest.Mock).mockImplementation(mockUseSWR)

    const { result } = renderHook(() => useProductById('1'))

    expect(result.current.data).toBe(null)
    expect(result.current.isLoading).toBe(true)
    expect(result.current.error).toBe(null)
    expect(result.current.errorMessage).toBe(null)
  })
})
