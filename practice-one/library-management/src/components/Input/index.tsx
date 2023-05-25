import React from 'react'

// Importing the CSS file for styling
import './input.css'

// Define the props for the Input component
interface InputProps {
  label?: string
  classNameLabel?: string
  type: string
  name: string
  placeholder?: string
  className?: string
  value: string
  id: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  errorMessage?: string
}

const Input: React.FC<InputProps> = (props): JSX.Element => {
  const {
    classNameLabel,
    label,
    type,
    name,
    placeholder,
    className,
    value,
    id,
    onChange,
    errorMessage
  } = props
  return (
    <div className="input-wrapper">
      <label htmlFor={id} className={`label ${classNameLabel ?? ''}`}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        className={`input ${className ?? ''}`}
        id={id}
        onChange={onChange}
      />
      {errorMessage != null && <p className="error-message">{errorMessage}</p>}
    </div>
  )
}

export default Input
