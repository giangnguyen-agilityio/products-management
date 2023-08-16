import React, { useRef, useCallback, useState } from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  useToast,
  Center,
  Image,
  Text,
} from '@chakra-ui/react'
import deleteAction from '@assets/images/delete_Action.gif'

interface ConfirmDialogProps {
  id: string | undefined
  onDelete: (id: string) => void
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ id, onDelete }) => {
  const toast = useToast()
  const [isOpen, setIsOpen] = useState(true)
  const cancelRef = useRef<HTMLButtonElement | null>(null)

  const handleDelete = useCallback(async () => {
    try {
      if (id !== undefined) {
        await onDelete(id)
        setIsOpen(false)
        showSuccessToast(id)
      } else {
        showErrorToast(id)
        setIsOpen(false)
      }
    } catch (error) {
      showErrorToast(id)
    }
  }, [id, onDelete, setIsOpen])

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  const showSuccessToast = (itemId: string) => {
    toast({
      title: 'Success',
      description: `Item with ID ${itemId} has been deleted.`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

  const showErrorToast = (itemId: string | undefined) => {
    toast({
      title: 'Error',
      description: `An error occurred while deleting item with ID ${itemId}.`,
      status: 'error',
      duration: 5000,
      isClosable: true,
    })
  }

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={handleCloseModal}
      isCentered
    >
      <AlertDialogOverlay />
      <AlertDialogContent background="background" color="primary">
        <AlertDialogHeader>Confirmation</AlertDialogHeader>
        <AlertDialogCloseButton
          className="close-dialog-button"
          border="2px solid transparent"
          color="primary"
          borderRadius="full"
          _hover={{
            borderColor: 'primary',
          }}
          onClick={handleCloseModal}
        />
        <AlertDialogBody
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        >
          <Center>
            <Image
              loading="eager"
              src={deleteAction}
              alt="The image for delete action"
              w="200px"
              h="150px"
            />
          </Center>
          <Text mt={5} fontWeight="semibold">
            Do you really want to delete this item?
            <br />
            This process cannot be undone.
          </Text>
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button
            className="cancel-button"
            ref={cancelRef}
            onClick={handleCloseModal}
            backgroundColor="gray.100"
            color="textPrimary"
            _hover={{
              backgroundColor: 'gray.300',
            }}
          >
            Cancel
          </Button>
          <Button
            className="delete-button"
            backgroundColor="red.300"
            color="textSecondary"
            _hover={{
              backgroundColor: 'red.500',
            }}
            onClick={handleDelete}
            ml={3}
          >
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ConfirmDialog
