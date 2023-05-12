import './header.css'
import Logo from '../Logo/index'
import logo from '../../assets/images/logo-website.png'
import Navigation from '../Navigation/index'
import UserProfile from '../UserProfile/index'
import { BrowserRouter as Router } from 'react-router-dom'
import Button from '../Button/index'

const Header = () => {
    const links = [
        { id: 'book', label: 'book', url: '/book' },
        { id: 'member', label: 'member', url: '/member' },
        { id: 'hire request', label: 'hire request', url: '/request' }
    ]

    const isLogin = false

    return (
        <header className="site-header">
            <div className="site-header-content">
                {/* The website logo */}
                <Logo imageSrc={logo} altText={'This is the logo website'} size={150} />
                {/* The website navigation */}
                <nav className="site-navigation">
                    <Router>
                        <Navigation links={links} />
                    </Router>
                    {/* The website actions */}
                    <div className="site-actions-wrapper">
                        {isLogin
                            ? (
                                <UserProfile avatarUrl={logo} email={'useremail@gmail.com'} />
                            )
                            : (
                                <div className="site-actions">
                                    <Button
                                        size="large"
                                        variant="secondary"
                                        className="sign-up"
                                        ariaLabel="Sign up"
                                    >
                                        SIGN UP
                                    </Button>
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
