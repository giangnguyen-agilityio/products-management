import { memo, useCallback, useContext, useState } from 'react'
import { Container, Grid } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'

// Import components and utilities
import ProductImage from '@components/ProductDetail/ProductImage'
import ProductInfo from '@components/ProductDetail/ProductInfo'
import ProductDesc from '@components/ProductDetail/ProductDesc'
import EmptyProduct from '@components/common/EmptyProduct'
import Loading from '@components/common/Loading'
import Modal from '@components/common/Modal'
import ConfirmDialog from '@components/common/ConfirmDialog'
import ProductContext from '@stores/products/ProductContext'
import { useProductById } from '@hooks/fetch'
import { deleteProductAPI, editProductAPI } from '@services/api-actions'
import { handleServerError } from '@helpers'
import { AxiosError } from 'axios'
import { MODAL, NOTIFICATIONS } from '@constants'
import { IProductData } from '@types'
import { useCustomToasts } from '@utils/toast'

// Define the ProductDetailPage component
const ProductDetailPage = () => {
  // Get the 'id' parameter from the URL
  const { id } = useParams()

  const productId = String(id)

  // Set up navigation and toast
  const navigate = useNavigate()

  // Access product-related states using context
  const { editProductState, deleteProductState } = useContext(ProductContext)

  // Manage modal and dialog state
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false)
  const [modalType, setModalType] = useState<MODAL.ADD | MODAL.EDIT>(MODAL.ADD)
  const { showSuccessToast, showErrorToast } = useCustomToasts()

  // Fetch product data using the custom hook 'useProductById'
  const { data, error, isLoading, mutate } = useProductById(productId)

  // Function to open the edit modal
  const openModal = () => {
    setIsModalOpen(true)
    setModalType(MODAL.EDIT)
  }

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Function to open the confirmation dialog
  const openConfirmDialog = () => {
    setIsConfirmDialogOpen(true)
  }

  // Function to close the confirmation dialog
  const closeConfirmDialog = () => {
    setIsConfirmDialogOpen(false)
  }

  // Handle editing a product
  const handleEdit = useCallback(
    async (id: string, formData: IProductData): Promise<void> => {
      try {
        const result: IProductData = await editProductAPI(id, formData)
        if (result) {
          editProductState(formData)
          showSuccessToast('Success', `Product with ID ${id} has been updated.`)
          mutate()
          closeModal()
        }
      } catch (error) {
        showErrorToast('Error', `${NOTIFICATIONS.PRODUCT_EDITED_FAILED} ${id}`)
      }
    },
    [editProductState, closeModal, showSuccessToast, showErrorToast]
  )

  // Handle deleting a product
  const handleDelete = useCallback(
    async (id: string) => {
      try {
        await deleteProductAPI(id)
        deleteProductState(id)
        closeConfirmDialog()
        navigate('/')
        showSuccessToast('Success', `Item with ID ${id} has been deleted.`)
      } catch (error) {
        showErrorToast('Error', `${NOTIFICATIONS.PRODUCT_DELETED_FAILED} ${id}`)
      }
    },
    [
      deleteProductState,
      closeConfirmDialog,
      navigate,
      showSuccessToast,
      showErrorToast,
    ]
  )

  // Handle different scenarios based on data and loading status
  if (!id) {
    return (
      <EmptyProduct errorMessage={`${NOTIFICATIONS.PRODUCT_ID_IS_MISSING}`} />
    )
  }

  if (error) {
    const message = handleServerError(error as AxiosError)
    return (
      <EmptyProduct
        errorMessage={`${NOTIFICATIONS.ERROR_WHILE_FETCHING} ${message}`}
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
      <Modal
        id={productId}
        isOpen={isModalOpen}
        closeModal={closeModal}
        modalType={modalType}
        productData={data}
        onEdit={handleEdit}
      />

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
