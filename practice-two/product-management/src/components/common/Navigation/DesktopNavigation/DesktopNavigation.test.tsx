import { render } from '@testing-library/react'
import DesktopNavigation from '.'

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
  { label: 'Home', href: '/home' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

test('renders DesktopNavigation component with links', () => {
  const { getByText, container } = render(
    <DesktopNavigation links={mockLinks} />
  )

  // Check if navigation element is rendered
  const navigationElement = container.querySelector('.navigation')
  expect(navigationElement).toBeInTheDocument()

  // Check if links are rendered
  mockLinks.forEach(link => {
    const linkElement = getByText(link.label)
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', link.href)
  })

  expect(container).toMatchSnapshot()
})
