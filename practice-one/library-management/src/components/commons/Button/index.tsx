import React, {memo} from 'react'
import './button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large'
  variant?:
    | 'primary'
    | 'secondary'
    | 'default'
    | 'success'
    | 'warning'
    | 'danger'
  className: string
  ariaLabel?: string
  onClick?: () => void
  disabled?: boolean
  children?: React.ReactNode | undefined
}

const Button: React.FC<ButtonProps> = props => {
  // Destructure the props
  const {children, size, variant, className, ariaLabel, onClick, disabled} =
    props

  return (
    <button
      className={`btn btn-${variant || 'primary'} btn-${
        size || 'medium'
      } ${className}`}
      onClick={onClick}
      type="button"
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default memo(Button)
