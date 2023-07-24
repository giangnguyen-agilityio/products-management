import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import UserProfile from '.'

describe('UserProfile component', () => {
  const userProfileProps = {
    mockAvatarUrl: 'https://example.com/user_avatar.jpg',
    mockEmail: 'user_email@example.com',
    mockOnLogout: jest.fn(),
  }

  it('should renders with user avatar and email', () => {
    const {container} = render(
      <UserProfile
        avatarUrl={userProfileProps.mockAvatarUrl}
        email={userProfileProps.mockEmail}
        onLogout={userProfileProps.mockOnLogout}
      />
    )

    const userAvatar = screen.getByAltText('The avatar of the user')
    const userEmail = screen.getByText(userProfileProps.mockEmail)
    const logoutButton = screen.getByLabelText('logout-button')

    expect(userAvatar).toBeInTheDocument()
    expect(userAvatar).toHaveAttribute('src', userProfileProps.mockAvatarUrl)
    expect(userEmail).toBeInTheDocument()
    expect(logoutButton).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('should calls onLogout function when logout button is clicked', () => {
    render(
      <UserProfile
        avatarUrl={userProfileProps.mockAvatarUrl}
        email={userProfileProps.mockEmail}
        onLogout={userProfileProps.mockOnLogout}
      />
    )

    const logoutButton = screen.getByLabelText('logout-button')
    fireEvent.click(logoutButton)

    expect(userProfileProps.mockOnLogout).toHaveBeenCalledTimes(2)
  })
})
