import React, { useCallback, useContext, useRef } from 'react'
import {
  Modal as ChakraModal,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useToast,
} from '@chakra-ui/react'
import { MODAL } from '@constants'
import Form from '@components/Form'
import { IProduct } from '@types'
import ProductContext from '@stores/products/ProductContext'
import { addNewProductAPI, editProductAPI } from '@services/api-actions'

// Interface for the props that the Modal component receives
interface ModalProps {
  id?: string
  isOpen: boolean
  closeModal: () => void
  modalType: MODAL.ADD | MODAL.EDIT | MODAL.DELETE
  productData?: IProduct | undefined
  mutate?: () => void
}

// The Modal component
const Modal: React.FC<ModalProps> = ({
  id,
  isOpen,
  productData,
  closeModal,
  modalType,
  mutate,
}) => {
  const btnRef = useRef(null)
  const toast = useToast()

  // Getting productState from ProductContext using useContext hook
  const { addNewProductState, editProductState } = useContext(ProductContext)

  // Function to handle show the success toast
  const showSuccessToast = (itemId?: string) => {
    toast({
      title: 'Success',
      description: itemId
        ? `Product with ID ${itemId} has been updated.`
        : 'A new product has been added successfully',
      duration: 2000,
      status: 'success',
      isClosable: true,
    })
  }

  // Function to handle show the success toast
  const showErrorToast = (itemId?: string) => {
    toast({
      title: 'Error',
      description: itemId
        ? `An error occurred while editing the product with ID ${itemId}`
        : 'An error occurred while adding a new product',
      duration: 2000,
      status: 'error',
      isClosable: true,
    })
  }

  // Function to handle adding a new product
  const handleAdd = useCallback(
    async (formData: IProduct): Promise<void> => {
      try {
        const result: IProduct = await addNewProductAPI(formData)
        if (result) {
          addNewProductState(formData)
          showSuccessToast(id)
        }
      } catch (error) {
        showErrorToast(id)
      } finally {
        closeModal()
      }
    },
    [addNewProductState, closeModal]
  )

  // Function to handle editing a product
  const handleEdit = useCallback(
    async (id: string, formData: IProduct): Promise<void> => {
      try {
        const result: IProduct = await editProductAPI(id, formData)
        if (result) {
          editProductState(formData)
          showSuccessToast(id)
          if (mutate) {
            mutate()
          }
        }
      } catch (error) {
        showErrorToast(id)
      } finally {
        closeModal()
      }
    },
    [editProductState, closeModal]
  )

  return (
    <ChakraModal
      finalFocusRef={btnRef}
      isOpen={isOpen}
      onClose={closeModal}
      scrollBehavior="inside"
      size="lg"
    >
      <ModalOverlay />

      <ModalContent background="background">
        <ModalHeader>
          {/* Close button */}
          <ModalCloseButton
            borderRadius="full"
            border="2px solid"
            borderColor="transparent"
            color="primary"
            _hover={{
              borderColor: 'primary',
            }}
          />
        </ModalHeader>

        <ModalBody>
          {/* Render the appropriate content based on the modalType */}
          {modalType === MODAL.ADD || modalType === MODAL.EDIT ? (
            <Form
              id={id}
              formType={modalType === MODAL.ADD ? MODAL.ADD : MODAL.EDIT}
              onAdd={handleAdd}
              onEdit={handleEdit}
              productData={productData}
            />
          ) : null}
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  )
}

export default React.memo(Modal)
