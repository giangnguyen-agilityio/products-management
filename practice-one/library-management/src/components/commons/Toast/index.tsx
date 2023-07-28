import React, {useState, useEffect} from 'react'
import {AiOutlineCheckCircle, AiOutlineExclamationCircle} from 'react-icons/ai'
import './toast.css'

interface ToastProps {
  message: string
  duration: number
  status: boolean
}

const Toast: React.FC<ToastProps> = props => {
  const {message, duration, status} = props

  // State to manage the visibility of the toast
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, duration)

    // Clean up the timer when the component is unmounted or duration changes
    return () => {
      clearTimeout(timer)
    }
  }, [duration])

  if (!isVisible) {
    return null
  }

  return (
    <div
      className={`toast ${status ? 'success' : 'failure'} ${
        isVisible && 'slide-in'
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
