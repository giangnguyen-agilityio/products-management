import React, { memo, type InputHTMLAttributes } from 'react'

// Importing the CSS file for styling
import './input.css'

// Define the props for the Input component
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  classNameLabel?: string
  errorMessage?: string
}

const Input: React.FC<InputProps> = (props): JSX.Element => {
  const { classNameLabel, label, errorMessage, ...inputProps } = props
  return (
    <div className="input-wrapper">
      <label className={`label ${classNameLabel ?? ''}`}>{label}</label>
      <input
        className={`input ${inputProps.className ?? ''}`}
        {...inputProps}
      />
      {errorMessage != null && <p className="error-message">{errorMessage}</p>}
    </div>
  )
}

export default memo(Input)
