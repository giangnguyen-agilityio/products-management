import { handleServerError } from '../'
import { AxiosError } from 'axios'

describe('handleServerError function', () => {
  it('should return "Invalid request" for 400 status code', () => {
    const error = { response: { status: 400 } } as AxiosError
    expect(handleServerError(error)).toBe('Invalid request')
  })

  it('should return "Failed to authenticate with the server" for 401 status code', () => {
    const error = { response: { status: 401 } } as AxiosError
    expect(handleServerError(error)).toBe(
      'Failed to authenticate with the server'
    )
  })

  it('should return "Not have permission to access" for 403 status code', () => {
    const error = { response: { status: 403 } } as AxiosError
    expect(handleServerError(error)).toBe('Not have permission to access')
  })

  it('should return "Not Found - the requested resource does not exist" for 404 status code', () => {
    const error = { response: { status: 404 } } as AxiosError
    expect(handleServerError(error)).toBe(
      'Not Found - the requested resource does not exist'
    )
  })

  it('should return "The image is too large" for 413 status code', () => {
    const error = { response: { status: 413 } } as AxiosError
    expect(handleServerError(error)).toBe('The image is too large')
  })

  it('should return "Something went wrong" for any other status code or if the error object is not defined', () => {
    const error = { response: { status: 500 } } as AxiosError
    expect(handleServerError(error)).toBe('Something went wrong')
  })
})
