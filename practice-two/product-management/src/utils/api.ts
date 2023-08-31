// Libraries
import axios from 'axios'

// Constants
import { API_URL, NOTIFICATIONS } from '@constants'

// Create instance and define base API url
export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export const swrFetcher = async (url: string) => {
  try {
    const res = await axiosInstance.get(url)
    return res.data
  } catch (error) {
    throw NOTIFICATIONS.API_ERROR
  }
}
