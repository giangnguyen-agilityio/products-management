const API_URL = process.env.VITE_BASE_URL

enum ENDPOINT {
  BOOKS = 'books',
  HIRE_REQUEST = 'hireRequests',
  MEMBERS = 'members',
}

export {API_URL, ENDPOINT}
