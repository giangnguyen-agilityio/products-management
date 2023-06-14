const API_URL = import.meta.env.VITE_API_URL

enum ENDPOINT {
  BOOKS = 'books',
  HIRE_REQUEST = 'hireRequests',
  MEMBERS = 'members',
}

export {API_URL, ENDPOINT}
