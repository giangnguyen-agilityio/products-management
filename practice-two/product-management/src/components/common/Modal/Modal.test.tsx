import { render, screen, fireEvent } from '@testing-library/react'
import { MODAL } from '@constants'
import Modal, { ModalProps } from './'

// Mock the dependencies and props
jest.mock('@components/Form', () => {
  return function MockedForm() {
    return <div data-testid="mocked-form"></div>
  }
})

const mockCloseModal = jest.fn()
const mockHandleAdd = jest.fn()
const mockHandleEdit = jest.fn()

const defaultProps: ModalProps = {
  isOpen: true,
  closeModal: mockCloseModal,
  modalType: MODAL.ADD,
  onAdd: mockHandleAdd,
  onEdit: mockHandleEdit,
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

  it('renders the form when modalType is add', () => {
    render(<Modal {...defaultProps} />)
    const form = screen.getByTestId('mocked-form')
    // Assertions
    expect(form).toBeInTheDocument()
  })

  it('renders the form when modalType is edit', () => {
    render(<Modal {...defaultProps} modalType={MODAL.EDIT} />)
    const form = screen.getByTestId('mocked-form')
    expect(form).toBeInTheDocument()
  })

  it('does not render the form when modalType is delete', () => {
    render(<Modal {...defaultProps} modalType={MODAL.DELETE} />)
    const form = screen.queryByTestId('mocked-form')
    expect(form).toBeNull()
  })
})
