import { render, screen, fireEvent } from '@testing-library/react'
import FilterLink from '.'

describe('FilterLink Component', () => {
  const testProps = {
    href: '/test',
    icon: '/test-icon.png',
    label: 'Test Label',
  }

  it('renders the link with correct href', () => {
    render(<FilterLink {...testProps} />)
    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveAttribute('href', '/test')
  })

  it('renders the icon with correct alt text', () => {
    render(<FilterLink {...testProps} />)
    const iconElement = screen.getByRole('img')
    expect(iconElement).toHaveAttribute('alt', 'The Test Label icon')
  })

  it('renders the label text', () => {
    render(<FilterLink {...testProps} />)
    const labelElement = screen.getByText('Test Label')
    expect(labelElement).toBeInTheDocument()
  })

  it('applies hover styles on mouse hover', () => {
    render(<FilterLink {...testProps} />)
    const linkElement = screen.getByRole('link')
    fireEvent.mouseEnter(linkElement)
    expect(linkElement).toHaveStyle('text-decoration: unset; opacity: 1')
  })

  it('matches snapshot', () => {
    const { container } = render(<FilterLink {...testProps} />)
    expect(container).toMatchSnapshot()
  })
})
