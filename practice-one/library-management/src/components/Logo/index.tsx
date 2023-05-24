import './logo.css'

interface LogoProps {
  text?: string
  imageSrc?: string
  altText?: string
  widthSize?: number
  heightSize?: number
}

const Logo = (props: LogoProps) => {
  const { text, imageSrc, altText, widthSize, heightSize } = props
  return (
    <div className="logo">
      {text != null && <h1>{text}</h1>}
      {imageSrc != null && (
        <img
          src={imageSrc}
          alt={altText}
          style={{
            width: `${widthSize ?? 50}px`,
            height: `${heightSize ?? 50}px`
          }}
        />
      )}
    </div>
  )
}

export default Logo
