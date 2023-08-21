import { render } from '@testing-library/react'
import Loading from './'

describe('Loading Component', () => {
  it('should render the loading spinner', () => {
    const { container } = render(<Loading />)
    expect(container).toMatchSnapshot()
  })
})
