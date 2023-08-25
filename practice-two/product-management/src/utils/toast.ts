import { useToast } from '@chakra-ui/react'
import { useCallback } from 'react'

export const useCustomToasts = () => {
  const toast = useToast()

  const showSuccessToast = useCallback((title: string, description: string) => {
    toast({
      title: title || 'Success',
      description: description,
      duration: 2000,
      status: 'success',
      isClosable: true,
    })
  }, [])

  const showErrorToast = useCallback((title: string, description: string) => {
    toast({
      title: title || 'Error',
      description: description,
      duration: 2000,
      status: 'error',
      isClosable: true,
    })
  }, [])

  return { showSuccessToast, showErrorToast }
}
