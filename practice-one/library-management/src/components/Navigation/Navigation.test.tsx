import React from 'react'
import {render} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import * as helpers from '@helpers'
import Navigation from '.'

// Mocking getItemInLocalStorage function
jest.mock('@helpers', () => ({
  getItemInLocalStorage: jest.fn(() => 'memberId'),
}))

// Test data for navigation links
const testLinks = [
  {id: 'link1', label: 'Link 1', url: '/link1'},
  {id: 'link2', label: 'Link 2', url: '/link2'},
  {id: 'link3', label: 'Link 3', url: '/link3'},
]

describe('Navigation component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should renders navigation links for a member', () => {
    const {container, getByText} = render(
      <MemoryRouter>
        <Navigation links={testLinks} />
      </MemoryRouter>
    )

    testLinks.forEach(({id, label}) => {
      const linkElement = getByText(label)
      expect(linkElement.tagName).toBe('A') // Should render as NavLink
      expect(linkElement).toHaveAttribute('href', `/${id}`)
    })
    expect(container).toMatchSnapshot()
  })

  it('should renders navigation links as span for non-member', () => {
    // Simulate the user is not a member
    jest.spyOn(helpers, 'getItemInLocalStorage').mockReturnValueOnce('')

    const {container, getByText} = render(
      <MemoryRouter>
        <Navigation links={testLinks} />
      </MemoryRouter>
    )

    testLinks.forEach(({label}) => {
      const linkElement = getByText(label)
      expect(linkElement.tagName).toBe('SPAN') // Should render as span
    })
    expect(container).toMatchSnapshot()
  })
})
