import React, { useCallback, useContext, useRef, useState } from 'react'
import {
  Modal as ChakraModal,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from '@chakra-ui/react'
import { MODAL } from '@constants'
import Form from '../Form'
import { IProduct } from '@types'
import ProductContext from '@stores/products/ProductContext'
import { addNewProductAPI, editProductAPI } from '@services/api-actions'

// Interface for the props that the Modal component receives
interface ModalProps {
  id: string | undefined
  isOpen: boolean
  closeModal: () => void
  modalType: MODAL.ADD | MODAL.EDIT | MODAL.DELETE
}

// The Modal component
const Modal: React.FC<ModalProps> = ({ id, isOpen, closeModal, modalType }) => {
  const btnRef = useRef(null)

  // State to manage the product data
  const [productData] = useState<IProduct | undefined>()

  // Getting productState from ProductContext using useContext hook
  const { addNewProductState, editProductState } = useContext(ProductContext)

  // Function to handle adding a new product
  const handleAdd = useCallback(
    async (formData: IProduct): Promise<void> => {
      try {
        const result: IProduct = await addNewProductAPI(formData)
        if (result) {
          addNewProductState(formData)
          console.log('Add success')
        }
      } catch (error) {
        console.log('Add fail')
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
          console.log('Edit success')
        }
      } catch (error) {
        console.log('Edit fail')
      } finally {
        closeModal()
      }
    },
    [editProductState, closeModal]
  )

  return (
    <ChakraModal
      id={id}
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
          ) : (
            <></>
          )}
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  )
}

export default React.memo(Modal)
