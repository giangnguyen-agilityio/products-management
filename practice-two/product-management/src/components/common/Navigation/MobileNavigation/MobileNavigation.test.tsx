import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import MobileContent from './'

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

test('renders MobileContent component with navigation links', () => {
  const toggleDrawer = jest.fn()
  const { container } = render(
    <MemoryRouter>
      <MobileContent
        isOpen={true}
        toggleDrawer={toggleDrawer}
        links={mockLinks}
      />
    </MemoryRouter>
  )

  // Ensure Drawer is open
  expect(screen.getByRole('dialog')).toBeInTheDocument()

  // Ensure navigation links are rendered
  mockLinks.forEach(link => {
    expect(screen.getByText(link.label)).toBeInTheDocument()
  })

  expect(container).toMatchSnapshot()
})
