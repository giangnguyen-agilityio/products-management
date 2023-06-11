export interface IHireRequest {
  id: string
  bookId: string
  memberId: string
  fromDate: string
  toDate: string
  status: string
}

export interface TableColumn {
  field: string
  headerName: string
}
