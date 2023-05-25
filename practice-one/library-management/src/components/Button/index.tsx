import React, { memo } from 'react'

// Importing the CSS file for styling
import './button.css'

// Define the props for the Button component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large'
  variant?:
  | 'primary'
  | 'secondary'
  | 'default'
  | 'success'
  | 'warning'
  | 'danger'
  className?: string
  ariaLabel?: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = (props) => {
  // Destructure the props
  const { children, size, variant, className, ariaLabel, onClick, ...rest } =
    props

  return (
    <button
      className={`btn btn-${variant ?? 'primary'} btn-${size ?? 'medium'} ${
        className ?? ''
      }`}
      onClick={onClick}
      type="button"
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </button>
  )
}

export default memo(Button)
