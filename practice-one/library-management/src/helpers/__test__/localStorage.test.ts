import {
  getItemInLocalStorage,
  setItemInLocalStorage,
  clearLocalStorage,
} from '../localStorage'

describe('LocalStorage Utilities Tests', () => {
  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
  }

  beforeEach(() => {
    jest.resetAllMocks() // Reset mock function calls before each test
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    })
  })

  it('should set an item in localStorage', () => {
    const key = 'testKey'
    const value = {memberID: 'memberID'}
    setItemInLocalStorage(key, value)

    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify(value)
    )
  })

  it('should handle error when setting to localStorage', () => {
    // Mocking localStorage.setItem to throw an error
    localStorageMock.setItem.mockImplementation(() => {
      throw new Error('Failed to set item')
    })

    console.error = jest.fn()

    const key = 'testKey'
    const value = {memberID: 'MemberID'}

    setItemInLocalStorage(key, value)

    expect(console.error).toHaveBeenCalledWith(
      'Error setting to localStorage:',
      expect.any(Error)
    )
  })

  it('should retrieve an item from localStorage', () => {
    const key = 'testKey'
    const value = {memberID: 'memberID'}
    localStorageMock.getItem.mockReturnValue(JSON.stringify(value))

    const result = getItemInLocalStorage(key)

    expect(localStorageMock.getItem).toHaveBeenCalledWith(key)
    expect(result).toEqual(value)
  })

  it('should handle error when retrieving from localStorage', () => {
    // Mocking localStorage.getItem to throw an error
    localStorageMock.getItem.mockImplementation(() => {
      throw new Error('Failed to get item')
    })

    console.error = jest.fn()

    const key = 'testKey'
    const retrievedValue = getItemInLocalStorage(key)

    expect(console.error).toHaveBeenCalledWith(
      'Error retrieving from localStorage:',
      expect.any(Error)
    )
    expect(retrievedValue).toBeNull()
  })

  it('should return null when retrieving an item not in localStorage', () => {
    const key = 'testKey'
    localStorageMock.getItem.mockReturnValue(null)

    const retrievedValue = getItemInLocalStorage(key)

    expect(localStorageMock.getItem).toHaveBeenCalledWith(key)
    expect(retrievedValue).toBeNull()
  })

  it('should clear all items in localStorage', () => {
    clearLocalStorage()

    expect(localStorageMock.clear).toHaveBeenCalled()
  })

  it('should handle error when clearing localStorage', () => {
    // Mocking localStorage.clear to throw an error
    localStorageMock.clear.mockImplementation(() => {
      throw new Error('Failed to clear localStorage')
    })

    console.error = jest.fn()

    clearLocalStorage()

    expect(console.error).toHaveBeenCalledWith(
      'Error clearing localStorage:',
      expect.any(Error)
    )
  })
})
