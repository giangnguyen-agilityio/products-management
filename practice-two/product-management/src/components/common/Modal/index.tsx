import React, { useRef } from 'react'
import {
  Modal as ChakraModal,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from '@chakra-ui/react'
import { MODAL } from '@constants'
import Form from '@components/Form'
import { IProduct } from '@types'

// Interface for the props that the Modal component receives
interface ModalProps {
  id?: string
  isOpen: boolean
  closeModal: () => void
  modalType: MODAL.ADD | MODAL.EDIT
  productData?: IProduct
  onAdd?: (formData: IProduct) => Promise<void>
  onEdit?: (id: string, formData: IProduct) => Promise<void>
}

// The Modal component
const Modal: React.FC<ModalProps> = ({
  id,
  isOpen,
  productData,
  closeModal,
  modalType,
  onAdd,
  onEdit,
}) => {
  const btnRef = useRef(null)

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
              onAdd={onAdd}
              onEdit={onEdit}
              productData={productData}
            />
          ) : null}
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  )
}

export default React.memo(Modal)
