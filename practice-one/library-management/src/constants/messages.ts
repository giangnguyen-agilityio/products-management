export const ERROR_MESSAGES = {
  // For the login form
  EMAIL_IS_MISSING: 'Please enter your email',
  PASSWORD_IS_MISSING: 'Please enter your email',
  EMAIL_AND_PASSWORD_IS_INCORRECT: 'Your email or password is incorrect',
  EMAIL_IS_INVALID: 'Please make sure you enter a valid email address',

  // For the form ADD and EDIT the book
  BOOK_TITLE_IS_MISSING: 'Please enter the name of book for this field',
  BOOK_AUTHOR_IS_MISSING: 'Please enter the author for this field',
  BOOK_PRICE_IS_LESS_THAN_0: 'Please enter a value greater than 0',
  BOOK_DESCRIPTION_IS_MISSING: 'Please enter the description for this field',
  AVAILABLE_QUANTITY_IS_LESS_THAN_0: 'Please enter a value greater than 0',
  TOTAL_QUANTITY_IS_LESS_THAN_0: 'Please enter a value greater than 0',
  BOOK_IMAGE_IS_MISSING: 'Please select an image',
  REQUEST_RENT_BOOK_OVER_LIMIT:
    'Your request to rent the book is over the limit',

  // For the form EDIT the hire request
  INVALID_DATE: 'The end date cannot be the same as the start date',
}
