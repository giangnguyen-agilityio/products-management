// Libraries
import React, { useRef, useState } from 'react'
import {
  Text,
  Image,
  Center,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from '@chakra-ui/react'

// Assets
import deleteAction from '@assets/images/delete_Action.gif'

// Define the props interface for the ConfirmDialog component
interface ConfirmDialogProps {
  id: string
  isConfirmDialogOpen: boolean
  closeConfirmDialog: () => void
  onDelete: (id: string) => void
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  id,
  isConfirmDialogOpen,
  closeConfirmDialog,
  onDelete,
}) => {
  const cancelRef = useRef<HTMLButtonElement | null>(null)
  const [disableButton, setDisableButton] = useState(false)

  // Function to handle delete
  const handleDelete = async () => {
    setDisableButton(true)
    await onDelete(id)
    setDisableButton(false)
    closeConfirmDialog()
  }

  // Render the ConfirmDialog component
  return (
    <AlertDialog
      isOpen={isConfirmDialogOpen}
      leastDestructiveRef={cancelRef}
      onClose={closeConfirmDialog}
      isCentered
      motionPreset="slideInBottom"
    >
      <AlertDialogOverlay />
      <AlertDialogContent background="background" color="primary">
        <AlertDialogHeader>Confirmation</AlertDialogHeader>
        <AlertDialogCloseButton
          className="close-dialog-button"
          border="small"
          color="primary"
          borderRadius="circle"
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
              width="200px"
              height="150px"
            />
          </Center>
          <Text marginTop={5} fontWeight="semibold" color="primary">
            Do you really want to delete this item?
            <br />
            This process cannot be undone.
          </Text>
        </AlertDialogBody>
        <AlertDialogFooter>
          {/* Cancel button */}
          <Button
            className="cancel-btn"
            aria-label="Cancel button"
            ref={cancelRef}
            onClick={closeConfirmDialog}
            color="textPrimary"
            variant="minimal"
          >
            Cancel
          </Button>
          {/* Delete button */}
          <Button
            className="delete-btn"
            aria-label="Delete button"
            onClick={handleDelete}
            marginLeft={3}
            isLoading={disableButton}
            variant="danger"
            _hover={{ opacity: 1 }}
          >
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ConfirmDialog
