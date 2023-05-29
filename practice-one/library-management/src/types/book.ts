export interface Book {
  bookId: string
  title: string
  author: string
  price: number
  description: string
  image: string
  alt: string
  availableQuantity: number
  totalQuantity: number
}

export interface Member {
  memberId: string
  role: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  address: string
  hiredBooks: string[]
}

export interface HireRequest {
  bookId: string
  memberId: string
  fromDate: string
  toData: string
  status: boolean
}
