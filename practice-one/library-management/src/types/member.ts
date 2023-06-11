export interface IMember {
  id: string
  role: string
  firstName: string
  lastName: string
  email: string
  password: string
  phoneNumber: string
  address: string
  hiredBooks: Array<{bookId: string}>
}
