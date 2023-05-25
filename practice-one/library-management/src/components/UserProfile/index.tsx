import React from 'react'

// Importing the Button component
import Button from '../Button/index'

// Importing the Icon from the React-icons library
import { FaSignOutAlt } from 'react-icons/fa'

// Importing the CSS file for styling
import './user-profile.css'

// Define the props for the UserProfile component
interface UserProfileProps {
  avatarUrl?: string // URL of the user's avatar image
  email?: string // User's email address
  onLogout?: () => void // Callback function for logout action
}

const UserProfile: React.FC<UserProfileProps> = (props) => {
  const { avatarUrl, email, onLogout } = props

  return (
    <div className="user-profile-wrapper">
      <div id="user-info" className="user-info">
        {/* Render the user's avatar image */}
        <img
          className="user-avatar"
          id="user-avatar"
          src={typeof avatarUrl === 'string' ? avatarUrl : undefined}
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
        Logout
      </div>
    </div>
  )
}

export default UserProfile
