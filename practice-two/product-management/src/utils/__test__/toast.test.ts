import { useCustomToasts } from '../toast'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useCallback: jest.fn(callback => callback),
}))

const mockUseToast = jest.fn()

// Mocking @chakra-ui/react module
jest.mock('@chakra-ui/react', () => ({
  __esModule: true,
  useToast: () => mockUseToast,
}))

describe('useCustomToasts', () => {
  it('should show success toast', () => {
    const { showSuccessToast } = useCustomToasts()

    showSuccessToast('Custom Title', 'Custom Description')

    expect(mockUseToast).toHaveBeenCalledWith({
      title: 'Custom Title',
      description: 'Custom Description',
      duration: 2000,
      status: 'success',
      isClosable: true,
    })
  })

  it('should show error toast', () => {
    const { showErrorToast } = useCustomToasts()

    showErrorToast('Custom Error Title', 'Custom Error Description')

    expect(mockUseToast).toHaveBeenCalledWith({
      title: 'Custom Error Title',
      description: 'Custom Error Description',
      duration: 2000,
      status: 'error',
      isClosable: true,
    })
  })

  it('should show success toast with default title', () => {
    const { showSuccessToast } = useCustomToasts()

    showSuccessToast('', 'Custom Description')

    expect(mockUseToast).toHaveBeenCalledWith({
      title: 'Success',
      description: 'Custom Description',
      duration: 2000,
      status: 'success',
      isClosable: true,
    })
  })

  it('should show success toast with provided title', () => {
    const { showSuccessToast } = useCustomToasts()

    showSuccessToast('Custom Title', 'Custom Description')

    expect(mockUseToast).toHaveBeenCalledWith({
      title: 'Custom Title',
      description: 'Custom Description',
      duration: 2000,
      status: 'success',
      isClosable: true,
    })
  })

  it('should show error toast with default title', () => {
    const { showErrorToast } = useCustomToasts()

    showErrorToast('', 'Custom Description')

    expect(mockUseToast).toHaveBeenCalledWith({
      title: 'Error',
      description: 'Custom Description',
      duration: 2000,
      status: 'error',
      isClosable: true,
    })
  })

  it('should show error toast with provided title', () => {
    const { showErrorToast } = useCustomToasts()

    showErrorToast('Custom Title', 'Custom Description')

    expect(mockUseToast).toHaveBeenCalledWith({
      title: 'Custom Title',
      description: 'Custom Description',
      duration: 2000,
      status: 'error',
      isClosable: true,
    })
  })
})
