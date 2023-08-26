import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Hero from '.'

describe('Hero Component', () => {
  jest.mock('@assets/images/hero_img_320.webp', () => ({
    default: 'imageHeroExtraSmall',
  }))

  jest.mock('@assets/images/hero_img_480.webp', () => ({
    default: 'imageHeroSmall',
  }))

  jest.mock('@assets/images/hero_img_768.webp', () => ({
    default: 'imageHeroMedium',
  }))

  jest.mock('@assets/images/hero_img_992.webp', () => ({
    default: 'imageHeroLarge',
  }))

  const testProps = {
    imageUrl: 'test-image-url',
    imageExtraSmallUrl: 'test-image-xs-url',
    imageSmallUrl: 'test-image-sm-url',
    imageMediumUrl: 'test-image-md-url',
    imageLargeUrl: 'test-image-lg-url',
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
})
