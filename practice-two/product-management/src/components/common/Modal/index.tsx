// Libraries
import React, { memo } from 'react'
import {
  Modal as ChakraModal,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from '@chakra-ui/react'

// Interface for the props that the Modal component receives
export interface ModalProps {
  isOpen: boolean
  onCloseModal: () => void
  children?: React.ReactNode
}

// The Modal component
const Modal: React.FC<ModalProps> = ({ isOpen, onCloseModal, children }) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onCloseModal} size="lg">
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

        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ChakraModal>
  )
}

export default memo(Modal)
