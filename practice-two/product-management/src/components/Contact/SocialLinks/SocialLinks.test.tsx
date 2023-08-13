import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SocialLink from '.'

describe('SocialLink component', () => {
  const props = {
    href: '#',
    icon: 'icon-url',
    alt: 'Social Icon',
  }

  it('renders link with correct attributes', () => {
    const { container, getByRole } = render(<SocialLink {...props} />)

    const linkElement = getByRole('link', { name: props.alt })

    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', props.href)
    expect(container).toMatchSnapshot()
  })

  it('renders image with correct attributes', () => {
    const { getByAltText } = render(<SocialLink {...props} />)

    const imageElement = getByAltText(props.alt)

    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute('src', props.icon)
  })

  it('renders external link', () => {
    const { getByRole } = render(<SocialLink {...props} />)

    const linkElement = getByRole('link', { name: props.alt })

    expect(linkElement).toHaveAttribute('target', '_blank')
  })
})
