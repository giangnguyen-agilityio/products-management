import {useState, useEffect} from 'react'

const useDelay = (delay: number): boolean => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [delay])

  return isLoading
}

export default useDelay
