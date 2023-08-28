import { render } from '@testing-library/react'
import { ErrorBoundary } from './'

describe('ErrorBoundary Component', () => {
  // Mock children components
  const MockChild = () => <div>Mock Child Component</div>

  it('renders children when no error is caught', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <MockChild />
      </ErrorBoundary>
    )

    expect(getByText('Mock Child Component')).toBeInTheDocument()
  })
})
