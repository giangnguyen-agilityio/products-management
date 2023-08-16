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
} from '@chakra-ui/react'
import { SmallAddIcon, ChevronDownIcon } from '@chakra-ui/icons'

import arrowDownIcon from '@assets/icons/Arrow_down.svg'
import ProductListHeader from './ProductListHeader'
import ProductItem from '@components/ProductItem'
import FilterMenu from '@components/FilterMenu'
import ProductContext from '@stores/products/ProductContext'
import { IProduct } from '@types'

import Modal from '@components/common/Modal'
import { useParams } from 'react-router-dom'
import { MODAL } from '@constants'

const ProductList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { productState } = useContext(ProductContext)
  const productList: IProduct[] = productState.products
  const ref = useRef(null)
  const { id } = useParams()

  const [modalType, setModalType] = useState<
    MODAL.ADD | MODAL.EDIT | MODAL.DELETE
  >(MODAL.ADD)

  useOutsideClick({
    ref: ref,
    handler: () => onClose(),
  })

  const openModal = () => {
    setIsModalOpen(true)
    setModalType(MODAL.ADD)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <Box
      as="section"
      className="product-list-section"
      width="full"
      mb={32}
      padding={{ base: '0 50px', md: '0' }}
    >
      <ProductListHeader />
      <Flex
        className="product-list-control"
        alignItems="center"
        justifyContent="space-between"
        gap={{ sm: 8 }}
        maxWidth={{
          sm: '340px',
          md: '720px',
          lg: '940px',
          xl: '1140px',
        }}
        margin="0 auto"
      >
        <Button
          h={10}
          onClick={onOpen}
          backgroundColor="primary"
          border="1px solid"
          borderColor="background"
          color="textSecondary"
          opacity="0.7"
          fontFamily="Oswald-Regular"
          _hover={{ opacity: '1' }}
        >
          Select category <ChevronDownIcon w={8} h={8} />
        </Button>
        <Button w={8} h={8} aria-label="Add Product" onClick={openModal}>
          <SmallAddIcon w={8} h={8} />
        </Button>

        <Modal
          isOpen={isModalOpen}
          closeModal={closeModal}
          id={id}
          modalType={modalType}
        />
      </Flex>

      <FilterMenu isOpen={isOpen} customRef={ref} />
      <Grid
        as="ul"
        className="product-list"
        templateColumns={{
          base: '1fr',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(4,1fr)',
        }}
        gap={{ base: '4', md: '8' }}
        maxWidth={{
          sm: '340px',
          md: '720px',
          lg: '940px',
          xl: '1140px',
        }}
        margin={{ base: '0 -50px', sm: '0 auto' }}
        rowGap={{ md: '0' }}
      >
        {productList.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Grid>

      <Flex>
        <Button
          aria-label="Load More"
          className="load-more"
          fontFamily="Oswald-Regular"
          padding={{ base: '15px 84px', xl: '20px 60px' }}
          borderRadius="full"
          margin="50px auto"
          borderColor="secondary"
          border="1px solid"
          color="textSecondary"
          backgroundColor="transparent"
          _hover={{
            backgroundColor: 'secondary',
          }}
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

export default ProductList
