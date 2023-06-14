import React from 'react'
import './loading-indicator.css'

interface LoadingIndicatorProps {
  isLoading: boolean
}

const Loading: React.FC<LoadingIndicatorProps> = props => {
  const {isLoading} = props
  return isLoading ? (
    <div className="loading-indicator">
      <ul className="loading-icon">
        <li className="wave"></li>
        <li className="wave"></li>
        <li className="wave"></li>
        <li className="wave"></li>
        <li className="wave"></li>
        <li className="wave"></li>
      </ul>
    </div>
  ) : null
}
export default Loading
