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
      {(text != null) && <h1>{text}</h1>}
      {(imageSrc != null) && (
        <img
          src={imageSrc}
          alt={altText}
          style={{ width: `${size ?? 50}px`, height: `${size ?? 50}px` }}
        />
      )}
    </div>
  )
}

export default Logo
