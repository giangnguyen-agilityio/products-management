import React from 'react'
import {Link} from 'react-router-dom'

// Importing the helper functions
import {getItemInLocalStorage} from '@helpers'

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

const Logo: React.FC<LogoProps> = props => {
  const isMember = getItemInLocalStorage('memberId')

  const {text, imageSrc, altText, widthSize, heightSize} = props
  return isMember ? (
    <Link to="/">
      <div className="logo">
        {/* Render the text if provided */}
        {text && <h1>{text}</h1>}
        {/* Render the image if provided */}
        {imageSrc && (
          <img
            src={imageSrc}
            alt={altText}
            style={{
              width: `${widthSize ?? 50}px`,
              height: `${heightSize ?? 50}px`,
            }}
          />
        )}
      </div>
    </Link>
  ) : (
    <div className="logo">
      {/* Render the text if provided */}
      {text && <h1>{text}</h1>}
      {/* Render the image if provided */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={altText}
          style={{
            width: `${widthSize ?? 50}px`,
            height: `${heightSize ?? 50}px`,
          }}
        />
      )}
    </div>
  )
}

export default Logo
