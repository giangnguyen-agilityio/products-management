import { useToast } from '@chakra-ui/react'

export const useCustomToasts = () => {
  const toast = useToast()

  const showSuccessToast = (
    title: string,
    description: string,
    itemId?: string
  ) => {
    toast({
      title: title || 'Success',
      description: itemId && description,
      duration: 2000,
      status: 'success',
      isClosable: true,
    })
  }

  const showErrorToast = (
    title: string,
    description: string,
    itemId?: string
  ) => {
    toast({
      title: title || 'Error',
      description: itemId && description,
      duration: 2000,
      status: 'error',
      isClosable: true,
    })
  }

  return { showSuccessToast, showErrorToast }
}
