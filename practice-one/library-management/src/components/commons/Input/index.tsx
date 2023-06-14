import React, {memo, type InputHTMLAttributes} from 'react'
import './input.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  label?: string
  className?: string
  classNameLabel?: string
  value?: string | number
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  errorMessage?: string
  type?: string
  min?: number
  accept?: string
  placeholder?: string
}

const Input: React.FC<InputProps> = (props): JSX.Element => {
  const {
    name,
    label,
    className,
    classNameLabel,
    value,
    onChange,
    errorMessage,
    type,
    min,
    accept,
    placeholder,
  } = props
  return (
    <div className="input-wrapper">
      <label className={`label ${classNameLabel ?? ''}`}>{label}</label>
      <input
        className={`input ${className ?? ''}`}
        name={name}
        type={type ?? 'text'}
        value={value}
        onChange={onChange}
        min={min ?? 0}
        accept={accept}
        placeholder={placeholder}
      />
      {errorMessage != null && <p className="error-message">{errorMessage}</p>}
    </div>
  )
}

export default memo(Input)
