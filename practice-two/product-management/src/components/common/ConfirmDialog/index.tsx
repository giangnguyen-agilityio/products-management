import React, { useRef, useCallback } from 'react'
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
  useDisclosure,
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import deleteAction from '@assets/images/delete_Action.gif'

interface ConfirmDialogProps {
  id: string
  onDelete: (id: string) => void
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ id, onDelete }) => {
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef<HTMLButtonElement | null>(null)

  const handleDelete = useCallback(async () => {
    try {
      await onDelete(id)
      onClose()
      showSuccessToast(id)
    } catch (error) {
      showErrorToast(id)
    }
  }, [id, onDelete, onClose])

  const showSuccessToast = (itemId: string) => {
    toast({
      title: 'Success',
      description: `Item with ID ${itemId} has been deleted.`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

  const showErrorToast = (itemId: string) => {
    toast({
      title: 'Error',
      description: `An error occurred while deleting item with ID ${itemId}.`,
      status: 'error',
      duration: 5000,
      isClosable: true,
    })
  }

  return (
    <>
      <Button colorScheme="red" onClick={onOpen} aria-label="Delete Item">
        <DeleteIcon w="20px" h="20px" />
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>Confirmation</AlertDialogHeader>
          <AlertDialogCloseButton className="close-dialog-button" />
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
            <Button className="cancel-button" ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button
              className="delete-button"
              colorScheme="red"
              onClick={handleDelete}
              ml={3}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default ConfirmDialog
