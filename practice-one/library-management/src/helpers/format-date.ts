const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`

  return formattedDate
}

// Helper function to parse date string in the format "21/3/2023 15:52:13"
const parseDateString = (dateString: string): Date => {
  const [day, month, year, hour, minute, second] = dateString.split(/[/ :]/)
  return new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute),
    Number(second)
  )
}

export { formatDate, parseDateString }
