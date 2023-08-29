import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ErrorBoundary } from './'
import { NOTIFICATIONS } from '@constants'

describe('ErrorBoundary', () => {
  it('should render children when there is no error', () => {
    const ChildComponent = () => <div>Child Component</div>

    render(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>
    )

    const childElement = screen.getByText('Child Component')
    expect(childElement).toBeInTheDocument()
  })

  it('should render error message and image when an error is caught', () => {
    const ThrowErrorComponent = () => {
      throw new Error('Test error')
    }

    render(
      <ErrorBoundary>
        <ThrowErrorComponent />
      </ErrorBoundary>
    )

    const errorMessage = screen.getByText(NOTIFICATIONS.API_ERROR)
    expect(errorMessage).toBeInTheDocument()

    const errorImage = screen.getByAltText('This is the error image')
    expect(errorImage).toBeInTheDocument()
  })

  it('should render a link to the homepage when there is an error', () => {
    const ThrowErrorComponent = () => {
      throw new Error('Test error')
    }

    render(
      <ErrorBoundary>
        <ThrowErrorComponent />
      </ErrorBoundary>
    )

    const link = screen.getByRole('link', {
      name: NOTIFICATIONS.BACK_TO_HOMEPAGE,
    })
    expect(link).toBeInTheDocument()

    userEvent.click(link)
  })
})
