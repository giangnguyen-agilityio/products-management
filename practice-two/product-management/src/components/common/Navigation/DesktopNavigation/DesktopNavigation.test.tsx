import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import DesktopNavigation from '.'

// Mock matchMedia
beforeAll(() => {
  window.matchMedia = jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }))
})

const mockLinks = [
  { label: 'Home', href: '/home' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

test('renders DesktopNavigation component with links', () => {
  const { getByText, container } = render(
    <MemoryRouter>
      <DesktopNavigation links={mockLinks} />
    </MemoryRouter>
  )

  // Check if navigation element is rendered
  const navigationElement = container.querySelector('.navigation')
  expect(navigationElement).toBeInTheDocument()

  // Check if links are rendered with correct text and href
  mockLinks.forEach(link => {
    const linkElement = getByText(link.label)
    expect(linkElement).toBeInTheDocument()
    expect(linkElement.getAttribute('href')).toBe(link.href) // Use getAttribute to check the actual href value
  })

  expect(container).toMatchSnapshot()
})

test('each link has the correct attributes', () => {
  const { getByText } = render(
    <MemoryRouter>
      <DesktopNavigation links={mockLinks} />
    </MemoryRouter>
  )

  // Check each link's attributes
  mockLinks.forEach(link => {
    const linkElement = getByText(link.label)
    expect(linkElement).toHaveAttribute('aria-label', link.label)
  })
})
