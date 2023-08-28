import { axiosInstance, swrFetcher } from '../api'

describe('swrFetcher', () => {
  it('fetches successfully data from an API', async () => {
    // Mock axiosInstance.get to return a successful response
    const mockResponse = { data: 'mocked data' }
    axiosInstance.get = jest.fn().mockResolvedValue(mockResponse)

    const url = '/some-url'
    const result = await swrFetcher(url)

    expect(result).toEqual(mockResponse.data)
    expect(axiosInstance.get).toHaveBeenCalledWith(url)
  })

  it('throws an error when API call fails', async () => {
    const errorMessage = 'Failed to fetch data'
    axiosInstance.get = jest.fn().mockRejectedValue(new Error(errorMessage))

    const url = '/some-url'
    let error = null
    try {
      await swrFetcher(url)
    } catch (e: any) {
      error = e
    }

    expect(error).not.toBeNull()
    expect(axiosInstance.get).toHaveBeenCalledWith(url)
  })
})
