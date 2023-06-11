const setItemInLocalStorage = <T>(key: string, value: T) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    // Handle error
    console.error('Error setting to localStorage:', error)
  }
}

const getItemInLocalStorage = (key: string) => {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  } catch (error) {
    // Handle error
    console.error('Error retrieving from localStorage:', error)
    return null
  }
}

const clearLocalStorage = () => {
  try {
    localStorage.clear()
  } catch (error) {
    // Handle error
    console.error('Error clearing localStorage:', error)
  }
}

export {getItemInLocalStorage, setItemInLocalStorage, clearLocalStorage}
