// Libraries
import { memo, useCallback, useContext, useState } from 'react'
import { Box, Flex, Button, Image, Text } from '@chakra-ui/react'

// Components
import Form from '@components/Form'
import Contact from '@components/Contact'
import Hero from '@components/common/Hero'
import Modal from '@components/common/Modal'
import Loading from '@components/common/Loading'
import ProductList from '@components/ProductList'
import EmptyProduct from '@components/common/EmptyProduct'
import ProductListHeader from '@components/ProductList/ProductListHeader'
import ProductListControl from '@components/ProductList/ProductListControl'

// Context
import ProductContext, {
  IProductContext,
} from '@context/ProductContext/ProductContext'

// Types
import { IProduct } from '@types'

// Function helpers
import { handleServerError } from '@helpers'

// Utils
import { useCustomToasts } from '@utils/toast'

// Assets
import arrowDownIcon from '@assets/icons/Arrow_down.svg'

// Constants
import { MODAL, NOTIFICATIONS, heroSectionContent } from '@constants'

const Homepage = () => {
  const {
    listProduct,
    addNewProduct,
    isError,
    handleLoadMore,
    isLoadingMore,
    isReachingEnd,
  } = useContext(ProductContext) as IProductContext

  // State to manage modal open/close
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Use custom toasts for displaying notifications
  const { showSuccessToast, showErrorToast } = useCustomToasts()

  // Function to open the modal for adding a new product
  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true)
  }, [])

  // Function to close the modal
  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  // // Handle the addition of a new product
  const handleAdd = useCallback(
    async (formData: IProduct): Promise<void> => {
      try {
        await addNewProduct(formData)
        showSuccessToast(
          'Success',
          `${NOTIFICATIONS.PRODUCT_ADDED_SUCCESSFULLY}`
        )
        handleCloseModal()
      } catch (error) {
        const errorMessage = handleServerError(error as any)
        showErrorToast(
          'Error',
          `${NOTIFICATIONS.PRODUCT_ADDED_FAILED}: ${errorMessage}`
        )
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
        margin="0 auto 200px"
        padding={{ base: '0 50px', md: '0' }}
      >
        <ProductListHeader />
        <ProductListControl onOpenModal={handleOpenModal} />

        {/* Display the product list */}
        {isLoadingMore ? (
          <Loading />
        ) : (
          <ProductList listProduct={listProduct} />
        )}

        {!isReachingEnd && (
          <Flex justifyContent="center" margin="50px auto">
            <Button
              onClick={handleLoadMore}
              className="load-more-btn"
              name="button"
              aria-label="Load More in the list"
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
                fontSize="medium"
                textTransform="uppercase"
                marginLeft={2}
              >
                load more
              </Text>
            </Button>
          </Flex>
        )}
      </Box>

      {/* Display the contact section */}
      <Contact />

      {/* Display the modal */}
      <Modal isOpen={isModalOpen} onCloseModal={handleCloseModal}>
        <Form formType={MODAL.ADD} onAdd={handleAdd} />
      </Modal>
    </>
  )
}

export default memo(Homepage)
