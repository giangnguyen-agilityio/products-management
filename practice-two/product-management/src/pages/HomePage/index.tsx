import { memo, useCallback, useContext, useEffect, useState } from 'react'
import ProductList from '@components/ProductList'
import Contact from '@components/Contact'
import Modal from '@components/common/Modal'
import EmptyProduct from '@components/common/EmptyProduct'
import { useProducts } from '@hooks/fetch'
import { addNewProductAPI } from '@services/api-actions'
import { useCustomToasts } from '@utils/toast'
import ProductContext from '@stores/products/ProductContext'
import { MODAL, NOTIFICATIONS } from '@constants'
import { IProduct } from '@types'
import Loading from '@components/common/Loading'

const Homepage = () => {
  const { setProductState, addNewProductState } = useContext(ProductContext)

  // State to manage modal open/close
  const [isModalOpen, setIsModalOpen] = useState(false)

  // State to manage modal type: add or edit product
  const [modalType, setModalType] = useState<MODAL.ADD | MODAL.EDIT>(MODAL.ADD)

  // Use custom toasts for displaying notifications
  const { showSuccessToast, showErrorToast } = useCustomToasts()

  // Use custom hook to fetch product list and handle errors
  const { allProducts, error, isLoading } = useProducts()

  // Update product state when there are changes in the product list
  useEffect(() => {
    if (allProducts) {
      setProductState(allProducts)
    }
  }, [allProducts])

  // Function to open the modal for adding a new product
  const openModal = useCallback(() => {
    setIsModalOpen(true)
    setModalType(MODAL.ADD)
  }, [])

  // Function to close the modal
  const closeModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  // Handle the addition of a new product
  const handleAdd = useCallback(
    async (formData: IProduct): Promise<void> => {
      try {
        const result: IProduct = await addNewProductAPI(formData)
        if (result) {
          formData.id = result.id
          addNewProductState(formData)
          showSuccessToast(
            'Success',
            `${NOTIFICATIONS.PRODUCT_ADDED_SUCCESSFULLY}`
          )
        }
      } catch (error) {
        showErrorToast('Error', `${NOTIFICATIONS.PRODUCT_ADDED_FAILED}`)
      } finally {
        closeModal()
      }
    },
    [addNewProductState, closeModal, showSuccessToast, showErrorToast]
  )

  if (isLoading) {
    return <Loading />
  }

  // Handle case where fetching products resulted in an error
  if (error) {
    return <EmptyProduct errorMessage={NOTIFICATIONS.API_ERROR} />
  }

  return (
    <>
      <ProductList openModal={openModal} />

      {/* Display the modal */}
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        modalType={modalType}
        onAdd={handleAdd}
      />
      <Contact />
    </>
  )
}

export default memo(Homepage)
