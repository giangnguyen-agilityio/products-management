import React from 'react'

// Importing the image URL as the variable
import logo from '@assets/images/logo-website.png'

// Importing the Logo, Navigation, UserProfile, and Button components
import Logo from '@components/Logo'
import Navigation from '@components/Navigation'
import UserProfile from '@components/UserProfile'
import Button from '@components/Button'

// Importing the links to navigation
import {linksForAdmin, linksForUser} from '@constants/navigationLinks'

// Importing the helper functions
import {getItemInLocalStorage} from '@helpers'

// Importing the CSS file for styling
import './header.css'
// Define the props for the Header component
interface HeaderProps {
  isLogin: boolean
  onSignIn: () => void
  onLogout: () => void
}

const Header: React.FC<HeaderProps> = props => {
  // Destructuring props to get specific variables ('isLogin', 'onSignIn', and 'onLogout') from an object passed as props.
  const {isLogin, onSignIn, onLogout} = props

  // Checking if the value of 'memberRole' in local storage is equal to 'admin', then storing a boolean result in the 'isAdmin' variable.
  const isAdmin = getItemInLocalStorage('memberRole') === 'admin'
  return (
    <header className="site-header">
      <div className="site-header-content">
        {/* The website logo */}
        <Logo
          imageSrc={logo}
          altText="This is the logo website"
          widthSize={150}
          heightSize={150}
        />
        {/* The website navigation */}
        <nav className="site-navigation">
          {/* Render navigation links */}
          <Navigation links={isAdmin ? linksForAdmin : linksForUser} />
          {/* The website actions */}
          <div className="site-actions-wrapper">
            {/* Render user profile if logged in */}
            {isLogin ? (
              <UserProfile
                avatarUrl={logo}
                email="useremail@gmail.com"
                onLogout={onLogout}
              />
            ) : (
              <div className="site-actions">
                {/* Render sign up button */}
                <Button
                  size="large"
                  variant="secondary"
                  className="sign-up"
                  ariaLabel="Sign up"
                >
                  SIGN UP
                </Button>
                {/* Render sign in button */}
                <Button
                  size="large"
                  variant="primary"
                  className="sign-in"
                  ariaLabel="Sign in"
                  onClick={onSignIn}
                >
                  SIGN IN
                </Button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
