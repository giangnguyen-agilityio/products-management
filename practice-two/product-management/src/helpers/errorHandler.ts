import { AxiosError } from 'axios'

// Function to handle server errors
export const handleServerError = (error: AxiosError): string => {
  // Checking the response status from the error object
  switch (error?.response?.status) {
    case 400:
      return 'Invalid request' // Return this message for a 400 status code
    case 401:
      return 'Failed to authenticate with the server' // Return this message for a 401 status code
    case 403:
      return 'Not have permission to access' // Return this message for a 403 status code
    case 404:
      return 'Not Found - the requested resource does not exist' // Return this message for a 404 status code
    default:
      return 'Something went wrong' // Return this message for any other status code or if the error object is not defined
  }
}
