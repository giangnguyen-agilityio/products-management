import { memo, useCallback, useContext, useState } from 'react'
import { Box, Flex, Button, Image, Text } from '@chakra-ui/react'

import ProductList from '@components/ProductList'
import ProductListHeader from '@components/ProductList/ProductListHeader'
import Contact from '@components/Contact'
import Modal from '@components/common/Modal'
import EmptyProduct from '@components/common/EmptyProduct'
import Loading from '@components/common/Loading'
import Hero from '@components/common/Hero'

import { useCustomToasts } from '@utils/toast'
import { MODAL, NOTIFICATIONS, heroSectionContent } from '@constants'
import { IProduct } from '@types'
import ProductContext, {
  IProductContext,
} from '@stores/products/ProductContext'
import arrowDownIcon from '@assets/icons/Arrow_down.svg'
import ProductListControl from '@components/ProductList/ProductListControl'

const Homepage = () => {
  const { listProduct, addNewProduct, isLoading, isError, handleLoadMore } =
    useContext(ProductContext) as IProductContext

  // State to manage modal open/close
  const [isModalOpen, setIsModalOpen] = useState(false)

  // State to manage modal type: add or edit product
  const [modalType, setModalType] = useState<MODAL.ADD | MODAL.EDIT>(MODAL.ADD)

  // Use custom toasts for displaying notifications
  const { showSuccessToast, showErrorToast } = useCustomToasts()

  // Function to open the modal for adding a new product
  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true)
    setModalType(MODAL.ADD)
  }, [])

  // Function to close the modal
  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  // // Handle the addition of a new product
  const handleAdd = useCallback(
    async (formData: IProduct): Promise<void> => {
      try {
        addNewProduct(formData)
        showSuccessToast(
          'Success',
          `${NOTIFICATIONS.PRODUCT_ADDED_SUCCESSFULLY}`
        )
      } catch (error) {
        showErrorToast('Error', `${NOTIFICATIONS.PRODUCT_ADDED_FAILED}`)
      } finally {
        handleCloseModal()
      }
    },
    [addNewProduct, handleCloseModal, showSuccessToast, showErrorToast]
  )

  // Handle case where fetching products resulted in an error
  if (isError) {
    return <EmptyProduct errorMessage={NOTIFICATIONS.API_ERROR} />
  }

  return (
    <>
      {/* Display the hero section */}
      <Hero
        imageUrl={heroSectionContent.imageUrl}
        imageExtraSmallUrl={heroSectionContent.imageExtraSmallUrl}
        imageSmallUrl={heroSectionContent.imageSmallUrl}
        imageMediumUrl={heroSectionContent.imageMediumUrl}
        imageLargeUrl={heroSectionContent.imageLargeUrl}
        buttonHref={heroSectionContent.link}
        title={heroSectionContent.title}
        description={heroSectionContent.description}
      />

      {/* Display the product list section */}
      <Box
        as="section"
        className="product-list-section"
        width="full"
        margin="0 auto 150px"
        padding={{ base: '0 50px', md: '0' }}
      >
        <ProductListHeader />
        <ProductListControl onOpenModal={handleOpenModal} />

        {/* Display the product list */}
        {isLoading ? <Loading /> : <ProductList listProduct={listProduct} />}

        <Flex justifyContent="center" margin="50px auto">
          <Button
            onClick={handleLoadMore}
            className="load-more-btn"
            name="button"
            aria-label="Button for loading more products"
            fontFamily="Oswald-Regular"
            padding="12px 40px"
            variant="tertiary"
            height="fit-content"
          >
            <Image
              src={arrowDownIcon}
              width="20px"
              height="20px"
              alt="Arrow down icon"
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

      {/* Display the contact section */}
      <Contact />

      {/* Display the modal */}
      <Modal
        isOpen={isModalOpen}
        onCloseModal={handleCloseModal}
        modalType={modalType}
        onAdd={handleAdd}
      />
    </>
  )
}

export default memo(Homepage)
