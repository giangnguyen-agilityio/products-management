import './user-profile.css'
import Button from '../Button/index'
import { FaSignOutAlt } from 'react-icons/fa'

interface UserProfileProps {
  avatarUrl?: string
  email?: string
  onLogout?: () => void
}

const UserProfile = (props: UserProfileProps) => {
  const { avatarUrl, email, onLogout } = props
  return (
    <div className="user-profile-wrapper">
      <div id="user-info" className="user-info">
        <img
          className="user-avatar"
          id="user-avatar"
          src={avatarUrl}
          alt="The avatar of the user"
        />
        <span className="user-email" id="user-email">
          {email}
        </span>
      </div>
      <div className="logout-action" onClick={onLogout}>
        <Button
          className="logout-button"
          size={'medium'}
          ariaLabel="logout-button"
          onClick={onLogout}
        >
          <FaSignOutAlt />
        </Button>
        Logout
      </div>
    </div>
  )
}

export default UserProfile
