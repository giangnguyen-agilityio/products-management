import React from 'react'

// Importing the image URL as the variable
import errorImage from '../../assets/images/error-image.png'

// Importing the Typography component
import Typography from '../Typography/index'

// Importing the CSS file for styling
import './empty-list.css'

// Define the props for the EmptyProductList component
interface EmptyProductListProps {
  errorMessage?: string
}

const EmptyProductList: React.FC<EmptyProductListProps> = (props) => {
  const { errorMessage } = props
  return (
    <div className="empty-product-list">
      <div className="error-list-image">
        <img src={errorImage} alt="This is the error image" />
      </div>
      <Typography variant="p" className="error-list-title">
        {errorMessage}
      </Typography>
    </div>
  )
}

export default EmptyProductList
