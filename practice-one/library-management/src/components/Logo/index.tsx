import React from 'react'

// Importing the CSS file for styling
import './logo.css'

// Define the props for the Logo component
interface LogoProps {
  text?: string
  imageSrc?: string
  altText?: string
  widthSize?: number
  heightSize?: number
}

const Logo: React.FC<LogoProps> = (props) => {
  const { text, imageSrc, altText, widthSize, heightSize } = props
  return (
    <div className="logo">
      {/* Render the text if provided */}
      {text != null && <h1>{text}</h1>}
      {/* Render the image if provided */}
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
