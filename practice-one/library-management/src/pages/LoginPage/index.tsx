import React, {useState, useContext, useCallback} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import loginPageImage from '@assets/images/login-page-image.jpg'
import Button from '@components/commons/Button'
import Input from '@components/commons/Input'
import Loading from '@components/commons/LoadingIndicator'
import Typography from '@components/commons/Typography'
import {ERROR_MESSAGES, VALIDATION_REGEX} from '@constants'
import {setItemInLocalStorage} from '@helpers'
import MembersContext from '@stores/members/MemberContext'
import {IMember} from '@types'
import './login-page.css'

const LoginPage: React.FC = (): JSX.Element => {
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false)
  const [signInError, setSignInError] = useState({
    emailError: '',
    passwordError: '',
  })
  const [signInForm, setSignInForm] = useState({
    email: '',
    password: '',
  })
  const {memberState} = useContext(MembersContext)
  const memberList: IMember[] = memberState.members
  const navigate = useNavigate()

  // Function to handle the input change event
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const {name, value} = event.target
      setSignInForm(prev => ({
        ...prev,
        [name]: value,
      }))
      setSignInError(prev => ({
        ...prev,
        [`${name}Error`]: '',
      }))
    },
    [setSignInForm, setSignInError]
  )

  // Function to handle login
  const handleLogin = (): void => {
    setIsLoggingIn(true)
    const {email, password} = signInForm

    if (email === '' || password === '') {
      setSignInError(prev => ({
        ...prev,
        emailError: email ? '' : ERROR_MESSAGES.EMAIL_IS_MISSING,
        passwordError: password ? '' : ERROR_MESSAGES.PASSWORD_IS_MISSING,
      }))
      setIsLoggingIn(false)
      return
    }

    // Check the validity of the email address
    if (!VALIDATION_REGEX.EMAIL_FORMAT.test(email)) {
      // If the email address is invalid
      setSignInError(prev => ({
        ...prev,
        emailError: ERROR_MESSAGES.EMAIL_IS_INVALID,
        passwordError: '',
      }))
      setIsLoggingIn(false)
      return
    }

    setTimeout(() => {
      const isValid: boolean = memberList.some(
        member => member.email === email && member.password === password
      )

      if (isValid) {
        // Find the memberId based on the email
        const member = memberList.find(member => member.email === email)
        if (!member) {
          return false
        }

        // Save the memberId to localStorage
        setItemInLocalStorage('memberId', member.id)
        setItemInLocalStorage('memberRole', member.role)
        navigate('/')
      } else {
        setSignInError({
          emailError: ERROR_MESSAGES.EMAIL_AND_PASSWORD_IS_INCORRECT,
          passwordError: ERROR_MESSAGES.EMAIL_AND_PASSWORD_IS_INCORRECT,
        })
        setSignInForm({
          email: '',
          password: '',
        })
      }
      setIsLoggingIn(false)
    }, 1000)
  }

  return (
    <div className="container-login-page">
      <section className="login-page">
        <div className={`overlay-login-page ${!isLoggingIn ? 'hide' : ''}`}>
          <Loading isLoading={true} />
          <Typography variant={'h2'} className="loading-title">
            signing in
          </Typography>
        </div>
        <div className="login-page-left">
          <img
            src={loginPageImage}
            alt="The image of the login page"
            className="login-page-image"
          />
        </div>
        <div className="login-page-right">
          <form className="login-form">
            <Typography variant={'h2'} className="login-form-title">
              Welcome back,
            </Typography>
            <Typography variant={'h3'} className="login-form-sub-title">
              Sign in to your account
            </Typography>
            <Input
              className="login-form-input"
              name="email"
              label="Email:"
              classNameLabel="login-form-label"
              type="text"
              value={signInForm.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              errorMessage={signInError.emailError}
            />
            <Input
              className="login-form-input"
              name="password"
              label="Password:"
              classNameLabel="login-form-label"
              type="password"
              value={signInForm.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              errorMessage={signInError.passwordError}
            />
            <div className="login-form-action">
              <Link to="/login" className="reset-password-link">
                Forgot password?
              </Link>
            </div>
            <Button
              className="login-button"
              size="large"
              ariaLabel="login-button"
              onClick={handleLogin}
            >
              Login
            </Button>
            <Typography variant={'p'} className="login-form-question">
              Don&apos;t have an account?
              <Link to="/login" className="register-link">
                Sign up
              </Link>
            </Typography>
          </form>
        </div>
      </section>
    </div>
  )
}

export default LoginPage
