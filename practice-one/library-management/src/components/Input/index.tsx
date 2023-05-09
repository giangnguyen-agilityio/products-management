import './input.css'

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

const Input = (props: InputProps): JSX.Element => {
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
            <label htmlFor={id} className={`label ${classNameLabel}`}>
                {label}
            </label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                className={`input ${className}`}
                id={id}
                onChange={onChange}
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
  )
}

export default Input
