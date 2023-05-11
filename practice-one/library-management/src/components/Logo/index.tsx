import './logo.css'

interface LogoProps {
  text?: string
  imageSrc?: string
  altText?: string
  size?: number
}

const Logo = (props: LogoProps) => {
  const { text, imageSrc, altText, size } = props
  return (
    <div className="logo">
      {text && <h1>{text}</h1>}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={altText}
          style={{ width: `${size}px`, height: `${size}px` }}
        />
      )}
    </div>
  )
}

export default Logo
