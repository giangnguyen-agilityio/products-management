import React from 'react'
import Button from '@components/commons/Button'
import {FaSignOutAlt} from 'react-icons/fa'
import './user-profile.css'

interface UserProfileProps {
  avatarUrl?: string
  email?: string
  onLogout: () => void
}

const UserProfile: React.FC<UserProfileProps> = props => {
  const {avatarUrl, email, onLogout} = props

  return (
    <div className="user-profile-wrapper">
      <div id="user-info" className="user-info">
        {/* Render the user's avatar image */}
        <img
          className="user-avatar"
          id="user-avatar"
          src={avatarUrl}
          alt="The avatar of the user"
        />
        {/* Render the user's email */}
        <span className="user-email" id="user-email">
          {email}
        </span>
      </div>
      <div className="logout-action" onClick={onLogout}>
        {/* Render the logout button */}
        <Button
          className="logout-button"
          size="medium"
          ariaLabel="logout-button"
          onClick={onLogout}
        >
          {/* Render the logout icon */}
          <FaSignOutAlt />
        </Button>
        <span className="logout-text">Logout</span>
      </div>
    </div>
  )
}

export default UserProfile
