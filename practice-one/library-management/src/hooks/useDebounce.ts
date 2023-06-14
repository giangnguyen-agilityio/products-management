import {useState, useEffect} from 'react'

const useDebounce = (delayMs: number): boolean => {
  const [debouncedValue, setDebouncedValue] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(true)
    }, delayMs)

    return () => {
      clearTimeout(timer)
    }
  }, [delayMs])

  return debouncedValue
}

export default useDebounce
