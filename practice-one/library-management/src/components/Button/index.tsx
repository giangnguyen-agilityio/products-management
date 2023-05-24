import { memo } from 'react'
import './button.css'

interface ButtonProps {
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

const Button = (
  props: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
): JSX.Element => {
  const { children, size, variant, className, ariaLabel, onClick, ...rest } =
    props

  return (
    <button
      className={`btn btn-${variant ?? 'primary'} btn-${size ?? 'medium'} ${className ?? ''}`}
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
