import {formatDate, formatDatetimeLocal, parseDateString} from '../formatDate' // replace with the actual file name

describe('formatDate function', () => {
  it('should format date string in the format "21/3/2023 15:52:13" correctly', () => {
    const dateString = '03/21/2023 15:52:13'
    const expectedFormattedDate = '21/3/2023 15:52:13'

    const formattedDate = formatDate(dateString)

    expect(formattedDate).toEqual(expectedFormattedDate)
  })

  it('should format date string with single-digit day and month', () => {
    const dateString = '06/08/2023 09:07:22'
    const expectedFormattedDate = '8/6/2023 9:7:22'

    const formattedDate = formatDate(dateString)

    expect(formattedDate).toEqual(expectedFormattedDate)
  })

  it('should handle invalid date string and return "Invalid Date"', () => {
    const dateString = 'invalid-date-string'
    const expectedFormattedDate = 'Invalid Date'

    const formattedDate = formatDate(dateString)

    expect(formattedDate).toEqual(expectedFormattedDate)
  })
})

describe('formatDatetimeLocal function', () => {
  it('should format date string to "YYYY-MM-DD THH:MM" format correctly', () => {
    const dateString = '2023-07-28 10:30:25'
    const expectedFormattedDate = '2023-07-28T10:30'

    const formattedDate = formatDatetimeLocal(dateString)

    expect(formattedDate).toEqual(expectedFormattedDate)
  })

  it('should handle single-digit month and day in the input string', () => {
    const dateString = '2023-7-5 09:07:10' // The input date string has single-digit month and day (5th of July, 2023)

    // Expected output should format the date and time with leading zeros for single-digit month and day
    const expectedFormattedDate = '2023-07-05T09:07'

    const formattedDate = formatDatetimeLocal(dateString)

    expect(formattedDate).toEqual(expectedFormattedDate)
  })

  it('should handle invalid date string and return "Invalid Date"', () => {
    const dateString = 'invalid-date-string'
    const expectedFormattedDate = 'Invalid Date'

    const formattedDate = formatDatetimeLocal(dateString)

    expect(formattedDate).toEqual(expectedFormattedDate)
  })
})

describe('parseDateString function', () => {
  it('should parse date string "28/7/2023 15:52:13" correctly', () => {
    const dateString = '28/7/2023 15:52:13'
    const expectedDate = new Date(2023, 6, 28, 15, 52, 13)

    const parsedDate = parseDateString(dateString)

    expect(parsedDate).toEqual(expectedDate)
  })

  it('should handle invalid date string and return "Invalid Date"', () => {
    const dateString = 'invalid-date-string'
    const expectedDate = 'Invalid Date'

    const parsedDate = parseDateString(dateString)

    expect(parsedDate).toEqual(expectedDate)
  })
})
