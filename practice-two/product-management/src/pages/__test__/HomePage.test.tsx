// import { render, screen, fireEvent } from '@testing-library/react'
// import Homepage from '../HomePage'

// describe('Homepage Component', () => {
//   it('renders hero section', () => {
//     render(<Homepage />)
//     expect(screen.getByText('Hero Title')).toBeInTheDocument()
//     expect(screen.getByText('Load more')).toBeInTheDocument()
//   })

//   it('opens modal when "Load more" button is clicked', () => {
//     render(<Homepage />)
//     fireEvent.click(screen.getByLabelText('Button for loading more products'))
//     expect(screen.getByTestId('modal')).toBeInTheDocument()
//   })

//   it('closes modal when the close button is clicked', () => {
//     render(<Homepage />)
//     fireEvent.click(screen.getByLabelText('Button for loading more products'))
//     fireEvent.click(screen.getByLabelText('Close Modal'))
//     expect(screen.queryByTestId('modal')).not.toBeInTheDocument()
//   })

//   it('displays a loading state while loading products', () => {
//     // Mock the ProductContext to simulate loading state
//     const mockContext = {
//       isLoading: true,
//       listProduct: [],
//     }
//     jest.mock('@context/ProductContext/ProductContext', () => ({
//       __esModule: true,
//       default: mockContext,
//     }))

//     render(<Homepage />)
//     expect(screen.getByTestId('loading-indicator')).toBeInTheDocument()
//   })

//   it('displays a list of products when not loading', () => {
//     const mockContext = {
//       isLoading: false,
//       listProduct: [],
//     }
//     jest.mock('@context/ProductContext/ProductContext', () => ({
//       __esModule: true,
//       default: mockContext,
//     }))

//     render(<Homepage />)
//     expect(screen.getByTestId('product-list')).toBeInTheDocument()
//   })

//   it('displays an error message when fetching products results in an error', () => {
//     const mockContext = {
//       isLoading: false,
//       isError: true,
//     }
//     jest.mock('@context/ProductContext/ProductContext', () => ({
//       __esModule: true,
//       default: mockContext,
//     }))

//     render(<Homepage />)
//     expect(screen.getByText('API Error Message')).toBeInTheDocument()
//   })

//   it('matches snapshot', () => {
//     const { asFragment } = render(<Homepage />)
//     expect(asFragment()).toMatchSnapshot()
//   })
// })
