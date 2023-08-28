// Libraries
import { useCallback } from 'react'
import { useToast } from '@chakra-ui/react'

export const useCustomToasts = () => {
  const toast = useToast()

  const showSuccessToast = useCallback(
    (title: string, description: string) => {
      toast({
        title: title || 'Success',
        description: description,
        duration: 2000,
        status: 'success',
        isClosable: true,
      })
    },
    [toast]
  )

  const showErrorToast = useCallback(
    (title: string, description: string) => {
      toast({
        title: title || 'Error',
        description: description,
        duration: 2000,
        status: 'error',
        isClosable: true,
      })
    },
    [toast]
  )

  return { showSuccessToast, showErrorToast }
}
