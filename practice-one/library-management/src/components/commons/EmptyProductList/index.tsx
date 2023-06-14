import React from 'react'
import errorImage from '@assets/images/error-image.png'
import Typography from '@components/commons/Typography'
import './empty-list.css'

interface EmptyProductListProps {
  errorMessage?: string
}

const EmptyProductList: React.FC<EmptyProductListProps> = props => {
  const {errorMessage} = props
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
