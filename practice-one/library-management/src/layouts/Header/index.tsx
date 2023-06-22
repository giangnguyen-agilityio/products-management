import React from 'react'
import logo from '@assets/images/logo-website.png'
import Logo from '@components/commons/Logo'
import Navigation from '@components/Navigation'
import UserProfile from '@components/UserProfile'
import Button from '@components/commons/Button'
import {linksForAdmin, linksForUser} from '@constants/navigationLinks'
import {getItemInLocalStorage} from '@helpers'
import {ROLE} from '@constants'
import './header.css'

interface HeaderProps {
  isLogin: boolean
  onSignIn: () => void
  onLogout: () => void
}

const Header: React.FC<HeaderProps> = props => {
  const {isLogin, onSignIn, onLogout} = props
  const isAdmin: boolean = getItemInLocalStorage('memberRole') === ROLE.ADMIN

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
