import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import Card from '.'

const mockOnRent = jest.fn()
const mockOnEdit = jest.fn()
const mockOnDelete = jest.fn()

const mockBook = {
  id: '1',
  title: 'Mock Book Title',
  author: 'Mock Author',
  price: 10.99,
  description: 'Mock description',
  availableQuantity: 5,
  totalQuantity: 10,
  image: 'http://Book_image.example.com',
  alt: 'This is the book image',
}

describe('Card component', () => {
  it('should render the book details correctly', () => {
    const {container} = render(
      <Card
        book={mockBook}
        onRent={mockOnRent}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
        isAdmin={false}
      />
    )

    expect(container).toMatchSnapshot()
  })

  it('should renders the default data when book data is not provided', () => {
    const {container} = render(
      <Card
        book={null}
        onRent={mockOnRent}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
        isAdmin={true}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render "Rent" button if not an admin', () => {
    const {container} = render(
      <Card
        book={mockBook}
        onRent={mockOnRent}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
        isAdmin={false}
      />
    )
    const cardControls = container.querySelector('.card-controls')

    expect(screen.getByText(/Rent/i)).toBeInTheDocument()
    expect(cardControls).toMatchSnapshot()
  })

  it('should call onRent function when "Rent" button is clicked', () => {
    render(
      <Card
        book={mockBook}
        onRent={mockOnRent}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
        isAdmin={false}
      />
    )

    fireEvent.click(screen.getByLabelText(/Card rent button/i))
    expect(mockOnRent).toHaveBeenCalledWith(mockBook.id)
  })

  it('should render "Edit" and "Delete" buttons if isAdmin is true', () => {
    const {container} = render(
      <Card
        book={mockBook}
        onRent={mockOnRent}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
        isAdmin={true}
      />
    )
    const cardControls = container.querySelector('.card-controls')

    expect(screen.getByLabelText(/Edit button/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Delete button/i)).toBeInTheDocument()
    expect(cardControls).toMatchSnapshot()
  })

  it('should call onEdit function when "Edit" button is clicked', () => {
    render(
      <Card
        book={mockBook}
        onRent={mockOnRent}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
        isAdmin={true}
      />
    )

    fireEvent.click(screen.getByLabelText(/Edit button/i))
    expect(mockOnEdit).toHaveBeenCalledWith(mockBook.id)
  })

  it('should call onDelete function when "Delete" button is clicked', () => {
    render(
      <Card
        book={mockBook}
        onRent={mockOnRent}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
        isAdmin={true}
      />
    )

    fireEvent.click(screen.getByLabelText(/Delete button/i))
    expect(mockOnDelete).toHaveBeenCalledWith(mockBook.id)
  })

  it('should renders image alt attribute correctly with book title', () => {
    const {getByAltText} = render(
      <Card
        book={mockBook}
        onRent={mockOnRent}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
        isAdmin={true}
      />
    )
    const image = getByAltText(mockBook.title)
    expect(image).toBeInTheDocument()
  })
})
