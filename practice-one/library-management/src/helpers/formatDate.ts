const formatDate = (dateString: string): string => {
  const date = new Date(dateString)

  if (isNaN(date.getTime())) {
    return 'Invalid Date'
  }

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
const parseDateString = (dateString: string): Date | string => {
  const [day, month, year, hour, minute, second] = dateString.split(/[/ :]/)
  const parsedDate = new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute),
    Number(second)
  )

  if (isNaN(parsedDate.getTime())) {
    return 'Invalid Date'
  }

  return parsedDate
}

// This function takes in a string representing a date and time and formats it into a localized string, based on the user's preferences
const formatDatetimeLocal = (dateString: string) => {
  // Create a new JavaScript Date object based on the input date string
  const date = new Date(dateString)

  if (isNaN(date.getTime())) {
    return 'Invalid Date'
  }

  // Get the year from the date object
  const year = date.getFullYear()

  // Get the month from the date object, add 1 since getMonth() returns values 0-11 for January-December
  // Pad the month with a leading zero if it is less than 10 to ensure a consistent two-digit format
  const month = String(date.getMonth() + 1).padStart(2, '0')

  // Get the day of the month from the date object
  // Pad the day with a leading zero if it is less than 10 to ensure a consistent two-digit format
  const day = String(date.getDate()).padStart(2, '0')

  // Get the hours from the date object
  // Pad the hours with a leading zero if it is less than 10 to ensure a consistent two-digit format
  const hours = String(date.getHours()).padStart(2, '0')

  // Get the minutes from the date object
  // Pad the minutes with a leading zero if it is less than 10 to ensure a consistent two-digit format
  const minutes = String(date.getMinutes()).padStart(2, '0')

  // Return the formatted string in the format "YYYY-MM-DDTHH:MM" where T separates the date and time components
  return `${year}-${month}-${day}T${hours}:${minutes}`
}

export {formatDate, formatDatetimeLocal, parseDateString}
