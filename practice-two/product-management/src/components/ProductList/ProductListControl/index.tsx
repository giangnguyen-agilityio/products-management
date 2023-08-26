import React, { useCallback, useRef } from 'react'
import FilterMenu from '@components/FilterMenu'
import { SmallAddIcon, ChevronDownIcon } from '@chakra-ui/icons'
import {
  Button,
  Container,
  useDisclosure,
  useOutsideClick,
} from '@chakra-ui/react'

interface ProductListControlProps {
  onOpenModal: () => void
}

const ProductListControl: React.FC<ProductListControlProps> = ({
  onOpenModal,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const filterMenuRef = useRef(null)

  useOutsideClick({
    ref: filterMenuRef,
    handler: useCallback(() => onClose(), [onClose]),
  })

  return (
    <>
      <Container
        display="flex"
        className="product-list-control"
        alignItems="center"
        justifyContent="space-between"
        gap={{ sm: 8 }}
      >
        <Button
          height={10}
          name="button"
          className="filter-menu-btn"
          aria-label="Button for select category"
          onClick={onOpen}
          bgColor="primary"
          border="1px solid"
          borderColor="background"
          fontFamily="Oswald-Regular"
          color="textSecondary"
          marginRight="10px"
          ref={filterMenuRef}
        >
          Select category <ChevronDownIcon w={8} h={8} />
        </Button>

        <Button w={8} h={8} aria-label="Add Product" onClick={onOpenModal}>
          <SmallAddIcon w={8} h={8} color="primary" />
        </Button>
      </Container>

      <FilterMenu isOpen={isOpen} customRef={filterMenuRef} />
    </>
  )
}

export default ProductListControl
