import React, { useRef, useCallback, useContext } from 'react'
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
import { deleteProductAPI } from '@services/api-actions'
import ProductContext from '@stores/products/ProductContext'
import { useNavigate } from 'react-router-dom'

// Define the props interface for the ConfirmDialog component
interface ConfirmDialogProps {
  id: string
  isConfirmDialogOpen: boolean
  closeConfirmDialog: () => void
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  id,
  isConfirmDialogOpen,
  closeConfirmDialog,
}) => {
  // Initialize necessary hooks and context
  const toast = useToast()
  const cancelRef = useRef<HTMLButtonElement | null>(null)
  const navigate = useNavigate()
  const { deleteProductState } = useContext(ProductContext)

  // Function to show a success toast message
  const showSuccessToast = (itemId: string) => {
    toast({
      title: 'Success',
      description: `Item with ID ${itemId} has been deleted.`,
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
  }

  // Function to show an error toast message
  const showErrorToast = (itemId: string | undefined) => {
    toast({
      title: 'Error',
      description: `An error occurred while deleting item with ID ${itemId}.`,
      status: 'error',
      duration: 2000,
      isClosable: true,
    })
  }

  // Function to handle the delete action
  const handleDelete = useCallback(async () => {
    try {
      await deleteProductAPI(id)
      deleteProductState(id)
      closeConfirmDialog()
      navigate('/')
      showSuccessToast(id)
    } catch (error) {
      console.error(error)
      showErrorToast(id)
    } finally {
      closeConfirmDialog()
    }
  }, [deleteProductState, closeConfirmDialog])

  // Render the ConfirmDialog component
  return (
    <AlertDialog
      isOpen={isConfirmDialogOpen}
      leastDestructiveRef={cancelRef}
      onClose={closeConfirmDialog}
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
          onClick={closeConfirmDialog}
        />
        <AlertDialogBody
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        >
          {/* Display image and text to confirm deletion */}
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
          {/* Cancel button */}
          <Button
            className="cancel-button"
            ref={cancelRef}
            onClick={closeConfirmDialog}
            backgroundColor="gray.100"
            color="textPrimary"
            _hover={{
              backgroundColor: 'gray.300',
            }}
          >
            Cancel
          </Button>
          {/* Delete button */}
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
