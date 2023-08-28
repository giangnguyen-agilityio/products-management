// import { axiosInstance, swrFetcher } from '../api'

// // Mock axiosInstance.get to simulate successful and error responses
// jest.mock('axios')
// const mockedAxiosInstance = axiosInstance as jest.Mocked<typeof axiosInstance>

// describe('swrFetcher function', () => {
//   it('fetches successfully data from an API', async () => {
//     const data = { key: 'value' }
//     const url = '/test-url'

//     // Mock successful axios response
//     mockedAxiosInstance.get.mockResolvedValueOnce({ data })

//     const result = await swrFetcher(url)

//     expect(result).toEqual(data)
//     expect(mockedAxiosInstance.get).toHaveBeenCalledWith(url)
//   })

//   it('throws an error when fetching data from API', async () => {
//     const url = '/test-url'

//     // Mock axios response with an error
//     mockedAxiosInstance.get.mockRejectedValueOnce(new Error('API Error'))

//     await expect(swrFetcher(url)).rejects.toThrow('API Error')
//     expect(mockedAxiosInstance.get).toHaveBeenCalledWith(url)
//   })
// })
