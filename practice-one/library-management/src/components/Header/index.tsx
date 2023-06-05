import React from 'react'

// Importing the image URL as the variable
import logo from '../../assets/images/logo-website.png'

// Importing the Logo, Navigation, UserProfile, and Button components
import Logo from '../Logo/index'
import Navigation from '../Navigation/index'
import UserProfile from '../UserProfile/index'
import Button from '../Button/index'

// Importing the Router to navigation the application
import { BrowserRouter as Router } from 'react-router-dom'

// Importing the links to navigation
import links from '../../constants/navigation-links'

// Importing the CSS file for styling
import './header.css'

// Define the props for the Header component
interface HeaderProps {
  isLogin: boolean
}

const Header: React.FC<HeaderProps> = (props) => {
  const { isLogin } = props

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
          <Router>
            {/* Render navigation links */}
            <Navigation links={links} />
          </Router>
          {/* The website actions */}
          <div className="site-actions-wrapper">
            {/* Render user profile if logged in */}
            {isLogin ? (
              <UserProfile avatarUrl={logo} email="useremail@gmail.com" />
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
