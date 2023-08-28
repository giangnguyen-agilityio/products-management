// Libraries
import { memo, useCallback, useContext, useState } from 'react'
import { Container, Grid } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'

// Components
import Form from '@components/Form'
import Modal from '@components/common/Modal'
import Loading from '@components/common/Loading'
import EmptyProduct from '@components/common/EmptyProduct'
import ConfirmDialog from '@components/common/ConfirmDialog'
import ProductDesc from '@components/ProductDetail/ProductDesc'
import ProductInfo from '@components/ProductDetail/ProductInfo'
import ProductImage from '@components/ProductDetail/ProductImage'

// Types
import { IProduct } from '@types'

// Function helpers
import { handleServerError } from '@helpers'

// Custom hook
import { useProductById } from '@hooks/fetch'

// Utils
import { useCustomToasts } from '@utils/toast'

// Constants
import { MODAL, NOTIFICATIONS } from '@constants'

// Context
import ProductContext, {
  IProductContext,
} from '@context/ProductContext/ProductContext'

const ProductDetailPage = () => {
  // Get the 'id' parameter from the URL
  const { id } = useParams()
  const productId = String(id)

  // Set up navigation and toast
  const navigate = useNavigate()

  // Access product-related states using context
  const { editProduct, deleteProduct } = useContext(
    ProductContext
  ) as IProductContext

  // Manage modal and dialog state
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false)
  const { showSuccessToast, showErrorToast } = useCustomToasts()

  // Fetch product data using the custom hook 'useProductById'
  const { data, error, isLoading, mutate, errorMessage } =
    useProductById(productId)

  // Function to open the edit modal
  const openModal = useCallback(() => {
    setIsModalOpen(true)
  }, [])

  // Function to close the modal
  const closeModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  // Function to open the confirmation dialog
  const openConfirmDialog = useCallback(() => {
    setIsConfirmDialogOpen(true)
  }, [])

  // Function to close the confirmation dialog
  const closeConfirmDialog = useCallback(() => {
    setIsConfirmDialogOpen(false)
  }, [])

  // Handle editing a product
  const handleEdit = useCallback(
    async (id: string, formData: IProduct): Promise<void> => {
      try {
        await editProduct(id, formData)
        mutate(data)
        showSuccessToast('Success', `Product with ID ${id} has been updated.`)
        closeModal()
      } catch (error) {
        const errorMessage = handleServerError(error as any)
        showErrorToast(
          'Error',
          `${NOTIFICATIONS.PRODUCT_EDITED_FAILED} ${id}: ${errorMessage}`
        )
      }
    },
    [editProduct, mutate, data, showSuccessToast, closeModal, showErrorToast]
  )

  // Handle deleting a product
  const handleDelete = useCallback(
    async (id: string) => {
      try {
        await deleteProduct(id)
        navigate('/')
        showSuccessToast('Success', `Item with ID ${id} has been deleted.`)
      } catch (error) {
        showErrorToast('Error', `${NOTIFICATIONS.PRODUCT_DELETED_FAILED} ${id}`)
      }
    },
    [deleteProduct, navigate, showSuccessToast, showErrorToast]
  )

  // Handle different scenarios based on data and loading status
  if (!id) {
    return (
      <EmptyProduct errorMessage={`${NOTIFICATIONS.PRODUCT_ID_IS_MISSING}`} />
    )
  }

  if (error) {
    return (
      <EmptyProduct
        errorMessage={`${NOTIFICATIONS.ERROR_WHILE_FETCHING} ${errorMessage}`}
      />
    )
  }

  if (isLoading) {
    return <Loading />
  }

  if (!data) {
    return (
      <EmptyProduct
        errorMessage={`${NOTIFICATIONS.FAILED_TO_GET_PRODUCT} ${id}`}
      />
    )
  }

  const { image, description } = data

  return (
    <Container as="section" className="product-detail-section">
      <Grid
        padding={4}
        gridTemplateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
        margin="30px auto"
        background="background"
        borderRadius={10}
        fontFamily="Oswald-Regular"
      >
        {/* Display the product image */}
        <ProductImage src={image} />

        {/* Display the product information */}
        <ProductInfo
          productData={data}
          openModal={openModal}
          openConfirmDialog={openConfirmDialog}
        />

        {/* Display the product description */}
        <ProductDesc productDesc={description} />
      </Grid>

      {/* Modal component */}
      <Modal isOpen={isModalOpen} onCloseModal={closeModal}>
        <Form
          id={productId}
          formType={MODAL.EDIT}
          productData={data}
          onEdit={handleEdit}
        />
      </Modal>

      {/* Confirmation dialog component */}
      <ConfirmDialog
        id={productId}
        isConfirmDialogOpen={isConfirmDialogOpen}
        closeConfirmDialog={closeConfirmDialog}
        onDelete={handleDelete}
      />
    </Container>
  )
}

export default memo(ProductDetailPage)
