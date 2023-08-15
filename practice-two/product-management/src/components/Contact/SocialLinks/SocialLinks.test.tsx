import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import SocialLink from '.'

describe('SocialLink component', () => {
  const props = {
    href: '/',
    icon: 'icon-url',
    alt: 'Social Icon',
  }

  it('renders link with correct attributes', () => {
    const { container, getByRole } = render(
      <MemoryRouter>
        <SocialLink {...props} />
      </MemoryRouter>
    )

    const linkElement = getByRole('link', { name: props.alt })

    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', props.href)
    expect(container).toMatchSnapshot()
  })

  it('renders image with correct attributes', () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <SocialLink {...props} />
      </MemoryRouter>
    )

    const imageElement = getByAltText(props.alt)

    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute('src', props.icon)
  })
})
