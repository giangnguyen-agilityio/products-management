import React from 'react'
import {act, render, waitFor} from '@testing-library/react'

import Toast from '.'

// Mock setTimeout to control timer behavior
jest.useFakeTimers()

describe('Toast component', () => {
  it('should renders with success status', () => {
    const props = {
      message: 'Success Message',
      duration: 3000,
      status: true,
    }

    const {container, getByText} = render(<Toast {...props} />)
    const svgElement = container.querySelector('svg')

    expect(getByText('Success Message')).toBeInTheDocument()
    expect(svgElement).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should renders with failure status', () => {
    const props = {
      message: 'Failure Message',
      duration: 3000,
      status: false,
    }

    const {container, getByText} = render(<Toast {...props} />)
    const svgElement = container.querySelector('svg')

    expect(getByText('Failure Message')).toBeInTheDocument()
    expect(svgElement).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should not apply the "slide-in" class when isVisible is false', async () => {
    const props = {
      message: 'Message',
      duration: 3000,
      status: true,
    }

    const {container} = render(<Toast {...props} />)

    // Fast-forward time to simulate the duration
    // Advance timers by the duration to trigger the useEffect cleanup function
    act(() => {
      jest.advanceTimersByTime(props.duration)
    })

    // Wait for the component to re-render after the state change
    await waitFor(() => {
      // After the duration: slide-in class should not be applied
      const toastElement = container.querySelector('.toast')
      expect(toastElement).toBeNull()
      expect(toastElement).toMatchSnapshot()
    })
  })
})
