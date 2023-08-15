import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Hero from '.'

describe('Hero Component', () => {
  const testProps = {
    imageUrl: 'test-image-url',
    title: 'Test Title',
    description: 'Test Description',
    buttonHref: '/test-link',
  }

  it('matches snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <Hero {...testProps} />
      </MemoryRouter>
    )
    expect(container).toMatchSnapshot()
  })

  it('renders HeroImage and HeroDetail components', () => {
    render(
      <MemoryRouter>
        <Hero {...testProps} />
      </MemoryRouter>
    )

    const heroImageElement = screen.getByAltText(
      'This is the image of hero section'
    )
    expect(heroImageElement).toBeInTheDocument()

    const heroTitleElement = screen.getByText('Test Title')
    const heroDescriptionElement = screen.getByText('Test Description')
    const learnMoreButtonElement = screen.getByText('Learn more')
    expect(heroTitleElement).toBeInTheDocument()
    expect(heroDescriptionElement).toBeInTheDocument()
    expect(learnMoreButtonElement).toBeInTheDocument()
  })
})
