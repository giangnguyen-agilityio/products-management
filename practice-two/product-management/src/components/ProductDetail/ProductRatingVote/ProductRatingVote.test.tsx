import { render } from '@testing-library/react'
import ProductRatingVote from './'

jest.mock('@assets/icons/empty_star_icon.svg', () => ({
  default: 'emptyStar',
}))

jest.mock('@assets/icons/half_star_icon.svg', () => ({
  default: 'halfStar',
}))

jest.mock('@assets/icons/half_star_icon.svg', () => ({
  default: 'fullStar',
}))

describe('ProductRatingVote Component', () => {
  it('renders correct number of stars for a given rating', () => {
    const ratingVote = 3.5
    const { container } = render(<ProductRatingVote ratingVote={ratingVote} />)

    expect(container).toMatchSnapshot()
  })
})
