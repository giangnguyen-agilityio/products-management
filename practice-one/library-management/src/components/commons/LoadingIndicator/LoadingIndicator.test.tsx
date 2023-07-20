import React from 'react'
import {render} from '@testing-library/react'
import Loading from '.'

describe('Loading component', () => {
  it('should render the loading indicator when isLoading is true', () => {
    const {container} = render(<Loading isLoading={true} />)
    expect(container).toMatchSnapshot()
  })

  it('should not render the loading indicator when isLoading is false', () => {
    const {container} = render(<Loading isLoading={false} />)
    expect(container).toMatchSnapshot()
  })

  it('should have the correct CSS class when isLoading is true', () => {
    const {container} = render(<Loading isLoading={true} />)
    const loadingIndicator = container.querySelector('.loading-indicator')

    expect(loadingIndicator).toHaveClass('loading-indicator')
  })

  it('should render the correct number of wave elements when isLoading is true', () => {
    const {container} = render(<Loading isLoading={true} />)
    const waveElements = container.querySelectorAll('.wave')

    expect(waveElements.length).toBe(6)
  })

  it('should not render any wave elements when isLoading is false', () => {
    const {container} = render(<Loading isLoading={false} />)
    const waveElements = container.querySelectorAll('.wave')

    expect(waveElements.length).toBe(0)
  })
})
