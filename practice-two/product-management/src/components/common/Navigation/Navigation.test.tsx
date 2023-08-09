import { render } from '@testing-library/react'
import Navigation from './'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

const mockLinks = [
  { label: 'Home', href: 'javascript:void(0)' },
  { label: 'About', href: 'javascript:void(0)' },
]

test('renders correctly when props are provided.', () => {
  const { container } = render(<Navigation links={mockLinks} />)
  expect(container).toMatchSnapshot()
})
