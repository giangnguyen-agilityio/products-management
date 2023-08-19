import { useContext, useRef, useState } from 'react'
import {
  Box,
  Text,
  Flex,
  Button,
  Grid,
  Image,
  useDisclosure,
  useOutsideClick,
  Container,
} from '@chakra-ui/react'
import { SmallAddIcon, ChevronDownIcon } from '@chakra-ui/icons'

import arrowDownIcon from '@assets/icons/Arrow_down.svg'
import ProductListHeader from './ProductListHeader'
import ProductItem from '@components/ProductItem'
import FilterMenu from '@components/FilterMenu'
import ProductContext from '@stores/products/ProductContext'
import { IProduct } from '@types'
import Modal from '@components/common/Modal'
import { MODAL } from '@constants'
import { memo } from 'react'

// Define the ProductList component
const ProductList = () => {
  // State and context initialization
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState<MODAL.ADD | MODAL.EDIT>(MODAL.ADD)
  const { productState } = useContext(ProductContext)
  const productList: IProduct[] = productState.products
  const filterMenuRef = useRef(null)

  // Handle clicks outside the FilterMenu to close it
  useOutsideClick({
    ref: filterMenuRef,
    handler: () => onClose(),
  })

  // Function to open the modal for adding a product
  const openModal = () => {
    setIsModalOpen(true)
    setModalType(MODAL.ADD)
  }

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Render the ProductList component
  return (
    <Box
      as="section"
      className="product-list-section"
      width="full"
      mb={32}
      padding={{ base: '0 50px', md: '0' }}
    >
      {/* Render the header */}
      <ProductListHeader />

      {/* Control buttons section */}
      <Container
        display="flex"
        className="product-list-control"
        alignItems="center"
        justifyContent="space-between"
        gap={{ sm: 8 }}
      >
        {/* Button to open the FilterMenu */}
        <Button
          h={10}
          aria-label="Select category"
          onClick={onOpen}
          bgColor="primary"
          border="1px solid"
          borderColor="background"
          opacity="0.7"
          fontFamily="Oswald-Regular"
          color="textSecondary"
          _hover={{ opacity: '1' }}
          marginRight="10px"
        >
          Select category <ChevronDownIcon w={8} h={8} />
        </Button>

        {/* Button to open the modal */}
        <Button w={8} h={8} aria-label="Add Product" onClick={openModal}>
          <SmallAddIcon w={8} h={8} color="primary" />
        </Button>

        {/* Modal component */}
        <Modal
          isOpen={isModalOpen}
          closeModal={closeModal}
          modalType={modalType}
        />
      </Container>

      {/* FilterMenu section */}
      <FilterMenu isOpen={isOpen} customRef={filterMenuRef} />

      {/* Product list section */}
      <Container padding={0}>
        <Grid
          as="ul"
          className="product-list"
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(4,1fr)',
          }}
          gap={{ base: '4', md: '8' }}
          margin={{ base: '0 -50px', sm: '0 auto' }}
          rowGap={{ md: '0' }}
        >
          {/* Render each product */}
          {productList.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </Grid>
      </Container>

      {/* Load more button */}
      <Flex>
        <Button
          aria-label="Load More"
          className="load-more"
          fontFamily="Oswald-Regular"
          padding={{ base: '15px 84px', xl: '20px 60px' }}
          margin="50px auto"
          variant="tertiary"
        >
          <Image
            src={arrowDownIcon}
            w="20px"
            alt="The arrow down icon"
            margin="0 auto"
            loading="eager"
          />
          <Text
            as="span"
            display="flex"
            color="textSecondary"
            justifyContent="center"
            fontSize="18px"
            textTransform="uppercase"
            marginLeft={2}
          >
            load more
          </Text>
        </Button>
      </Flex>
    </Box>
  )
}

export default memo(ProductList)
