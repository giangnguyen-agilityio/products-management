import './typography.css'
import { memo } from 'react'

export interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  color?: 'primary' | 'secondary'
  className?: string
  children: React.ReactNode
}

const Typography = ({
  variant,
  color,
  children,
  className
}: TypographyProps) => {
  const textClasses = `text-${variant} text-${color ?? 'default'} ${
    className ?? ''
  }`

  switch (variant) {
    case 'h1':
      return <h1 className={textClasses}>{children}</h1>
    case 'h2':
      return <h2 className={textClasses}>{children}</h2>
    case 'h3':
      return <h3 className={textClasses}>{children}</h3>
    case 'h4':
      return <h4 className={textClasses}>{children}</h4>
    case 'h5':
      return <h5 className={textClasses}>{children}</h5>
    case 'h6':
      return <h6 className={textClasses}>{children}</h6>
    default:
      return <p className={textClasses}>{children}</p>
  }
}

export default memo(Typography)
