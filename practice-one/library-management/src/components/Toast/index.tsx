import React, {useState, useEffect} from 'react'

// Importing the Icons form the React-icons library
import {AiOutlineCheckCircle, AiOutlineExclamationCircle} from 'react-icons/ai'

// Importing the CSS file for styling
import './toast.css'

// Define the props for the Toast component
interface ToastProps {
  message: string
  duration: number
  status: boolean
}

const Toast: React.FC<ToastProps> = props => {
  // Destructure the props
  const {message, duration, status} = props

  // State to manage the visibility of the toast
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Set the visibility to true when the component is mounted
    setIsVisible(true)

    // Set a timer to hide the toast after the specified duration
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, duration)

    // Clean up the timer when the component is unmounted or duration changes
    return () => {
      clearTimeout(timer)
    }
  }, [duration])

  // If the toast is not visible, don't render anything
  if (!isVisible) {
    return null
  }

  // Render the toast component with appropriate styling and content
  return (
    <div
      className={`toast ${status ? 'success' : 'failure'} ${
        isVisible ? 'slide-in' : 'slide-out'
      }`}
    >
      <div className="toast-content">
        {/* Render success or failure icon based on the status prop */}
        {status ? <AiOutlineCheckCircle /> : <AiOutlineExclamationCircle />}
        {message}
      </div>
      <div className="border-bottom"></div>
    </div>
  )
}

export default Toast
