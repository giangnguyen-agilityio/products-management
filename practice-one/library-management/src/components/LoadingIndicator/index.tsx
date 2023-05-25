import React from 'react'

// Importing the CSS file for styling
import './loading-indicator.css'

// Define the props for the Loading component
interface LoadingIndicatorProps {
  isLoading: boolean
}

const Loading: React.FC<LoadingIndicatorProps> = (props) => {
  const { isLoading } = props
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
