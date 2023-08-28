import { render, screen, fireEvent } from '@testing-library/react'
import Modal, { ModalProps } from './'

// Mock the dependencies and props
jest.mock('@components/Form', () => {
  return function MockedForm() {
    return <div data-testid="mocked-form"></div>
  }
})

const mockCloseModal = jest.fn()

const defaultProps: ModalProps = {
  isOpen: true,
  onCloseModal: mockCloseModal,
}

describe('Modal Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Modal {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })

  it('calls closeModal when close button is clicked', () => {
    render(<Modal {...defaultProps} />)
    const closeButton = screen.getByLabelText('Close')
    fireEvent.click(closeButton)
    expect(mockCloseModal).toHaveBeenCalledTimes(1)
  })
})
