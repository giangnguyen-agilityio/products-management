import React, {
  useState,
  useCallback,
  useRef,
  useContext,
  useMemo,
  memo,
} from 'react'
import EmptyProductList from '@components/commons/EmptyProductList'
import Pagination from '@components/commons/Pagination'
import Typography from '@components/commons/Typography'
import Card from '@components/Card'
import Button from '@components/commons/Button'
import Modal from '@components/Modal'
import AddAndEditForm from '@components/Form/AddAndEditBookForm'
import ConfirmModal from '@components/ConfirmModal'
import {AiOutlineFileAdd} from 'react-icons/ai'
import {getItemInLocalStorage} from '@helpers'
import {BookData, IBook} from '@types'
import BookContext from '@stores/books/BookContext'
import {
  addNewBookAPI,
  deleteBookAPI,
  editBookAPI,
  fetchBookById,
} from '@services/api-actions'
import {MODAL, LIST, MODAL_TITLE, NOTIFICATIONS, ROLE} from '@constants'
import './product-list.css'

interface ProductListProps {
  onRent: (id: string) => void
  onHandleToast: (message: string, status: boolean) => void
}

const ProductList: React.FC<ProductListProps> = props => {
  const {onRent, onHandleToast} = props

  // Getting bookState from BookContext using useContext hook
  const {bookState, addNewBookState, editBookState, deleteBookState} =
    useContext(BookContext)
  const bookList: IBook[] = bookState.books
  const isBookListNotEmpty = bookList.length > 0

  // Setting maximum number of items to display on each page
  const itemsPerPage = LIST.ITEMS_PER_PAGE

  // Setting currentPage to initially be the first page
  const [currentPage, setCurrentPage] = useState<number>(1)

  // Modal configuration
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [modalType, setModalType] = useState<
    MODAL.ADD | MODAL.EDIT | MODAL.DELETE
  >(MODAL.ADD)
  const [modalId, setModalId] = useState<string>('')
  const [bookData, setBookData] = useState<BookData>()

  // Setting up scroll position hook for returning to previous scroll position when modal is closed
  const [previousScrollPosition, setPreviousScrollPosition] =
    useState<number>(0)

  // Creating reference to product section div element
  const productSectionRef = useRef<HTMLDivElement>(null)

  // Checking if user is an admin
  const isAdmin: boolean = getItemInLocalStorage('memberRole') === ROLE.ADMIN

  // Function to handle renting a book by calling onRent function from props
  const handleRentBook = useCallback(
    (id: string) => {
      onRent(id)
    },
    [onRent]
  )

  // Calculate the total number of pages
  const totalPages: number = Math.ceil(bookList.length / itemsPerPage)
  const hasMorePages = currentPage < totalPages

  // Function to get the current books and pagination range based on the current page
  const getBooksAndPaginationRange = useCallback((): {
    currentBooks: IBook[]
    paginationRange: number
  } => {
    const startIndex: number = (currentPage - 1) * itemsPerPage
    const endIndex: number = startIndex + itemsPerPage
    const currentBooks: IBook[] = bookList.slice(0, endIndex)
    const paginationRange: number = bookList.length / itemsPerPage
    return {currentBooks, paginationRange}
  }, [bookList, currentPage, itemsPerPage])

  // Get the current books and pagination range
  const {currentBooks, paginationRange} = useMemo(
    () => getBooksAndPaginationRange(),
    [bookList, currentPage, itemsPerPage]
  )

  // Function to handle showing more books
  const handleShowMore = useCallback((): void => {
    setCurrentPage((prevPage: number) => prevPage + 1)
  }, [])

  // Function to handle opening modal dialogs
  const handleOpenModal = useCallback(
    (type: MODAL.ADD | MODAL.EDIT | MODAL.DELETE, id?: string) => {
      setIsOpenModal(true)
      setModalType(type)
      setModalId(id || '')

      // If it's an EDIT or DELETE modal, sets the previous scroll position and scrolls into view a product section reference
      if (MODAL.EDIT || MODAL.DELETE) {
        setPreviousScrollPosition(window.scrollY)
        productSectionRef.current?.scrollIntoView({behavior: 'smooth'})
      }
      // Otherwise only sets the previous scroll position
      else {
        setPreviousScrollPosition(window.scrollY)
      }
      // Clears any current toast notification
      onHandleToast('', false)
    },
    []
  )

  // Function to handle close the modal
  const handleCloseModal = useCallback(() => {
    setIsOpenModal(false)
    window.scrollTo({top: previousScrollPosition, behavior: 'smooth'})
    setModalId('')
  }, [isOpenModal])

  // Function to handle opening the modal add
  const handleOpenModalAdd = useCallback(() => {
    handleOpenModal(MODAL.ADD)
  }, [handleOpenModal])

  // Function to handle opening the modal edit
  const handleOpenModalEdit = useCallback(
    async (id: string) => {
      if (id) {
        try {
          const data: IBook = await fetchBookById(id)
          setBookData(data)
        } catch (error) {
          onHandleToast(NOTIFICATIONS.FAILED_TO_GET_BOOK, false)
        }
      }
      handleOpenModal(MODAL.EDIT, id)
    },
    [handleOpenModal]
  )

  // Function to handle opening the modal delete
  const handleOpenModalDelete = useCallback(
    (id: string) => {
      handleOpenModal(MODAL.DELETE, id)
    },
    [handleOpenModal]
  )

  // Function to handle add a new book
  const handleAdd = useCallback(
    async (formData: IBook): Promise<void> => {
      try {
        const result: IBook = await addNewBookAPI(formData)
        if (result) {
          addNewBookState(formData)
          onHandleToast(NOTIFICATIONS.BOOK_ADDED_SUCCESSFULLY, true)
        }
      } catch (error) {
        onHandleToast(NOTIFICATIONS.BOOK_ADDED_FAILED, false)
      } finally {
        handleCloseModal()
      }
    },
    [addNewBookState, onHandleToast, handleCloseModal]
  )

  // Function to handle edit the book
  const handleEdit = useCallback(
    async (id: string, formData: IBook): Promise<void> => {
      try {
        const result: IBook = await editBookAPI(id, formData)
        if (result) {
          editBookState(formData)
          onHandleToast(NOTIFICATIONS.BOOK_EDITED_SUCCESSFULLY, true)
        }
      } catch (error) {
        onHandleToast(NOTIFICATIONS.BOOK_EDITED_FAILED, false)
      } finally {
        handleCloseModal()
      }
    },
    [editBookState, editBookAPI, onHandleToast, handleCloseModal]
  )

  // Function to handle confirm (delete)
  const handleDelete = useCallback(
    async (id: string): Promise<void> => {
      try {
        const result: IBook = await deleteBookAPI(id)
        if (result) {
          deleteBookState(id)
          onHandleToast(NOTIFICATIONS.BOOK_DELETED_SUCCESSFULLY, true)
        }
      } catch (error) {
        onHandleToast(NOTIFICATIONS.BOOK_DELETED_FAILED, false)
      } finally {
        handleCloseModal()
      }
    },
    [deleteBookState, deleteBookAPI, onHandleToast, handleCloseModal]
  )

  return (
    <>
      {isBookListNotEmpty ? (
        <section className="product-list-section" ref={productSectionRef}>
          {/* The product list title */}
          <Typography variant="h2" className="product-list-title">
            {isAdmin ? 'product list' : 'popular books'}
          </Typography>
          <div className="product-list-controls">
            {/* Add new book button */}
            {isAdmin && (
              <Button
                size="large"
                variant="primary"
                className="add-new-btn"
                ariaLabel="Add new book button"
                onClick={handleOpenModalAdd}
              >
                Add new book <AiOutlineFileAdd size={30} />
              </Button>
            )}
          </div>
          <ul className="product-list">
            {/* Render cards for current books */}
            {currentBooks.map(book => (
              <Card
                isAdmin={isAdmin}
                key={`book-${book.id}`}
                book={book}
                onRent={handleRentBook}
                onEdit={handleOpenModalEdit}
                onDelete={handleOpenModalDelete}
              />
            ))}
          </ul>
          {hasMorePages && (
            <>
              {/* Pagination */}
              <Pagination
                length={paginationRange}
                activeIndex={currentPage - 1}
              />
              <div className="product-list-controls">
                {/* Show more button */}
                <Button
                  size="large"
                  variant="primary"
                  className="show-more-btn"
                  ariaLabel="Show more button"
                  onClick={handleShowMore}
                >
                  View more products
                </Button>
              </div>
            </>
          )}
          {/* Modal */}
          <Modal
            modalType={modalType}
            showModal={isOpenModal}
            closeModal={handleCloseModal}
            modalTitle={
              modalType === MODAL.ADD
                ? MODAL_TITLE.MODAl_ADD_BOOK_TITLE
                : modalType === MODAL.EDIT
                ? MODAL_TITLE.MODAL_EDIT_BOOK_TITLE
                : null
            }
          >
            {/* Render the appropriate content based on the modalType */}
            {modalType === MODAL.ADD || modalType === MODAL.EDIT ? (
              <AddAndEditForm
                id={modalId}
                formType={modalType === MODAL.ADD ? MODAL.ADD : MODAL.EDIT}
                onAdd={handleAdd}
                onEdit={handleEdit}
                onHandleToast={onHandleToast}
                bookData={bookData}
              />
            ) : (
              <ConfirmModal
                id={modalId}
                text={'book'}
                onCloseModal={handleCloseModal}
                onDelete={handleDelete}
              />
            )}
          </Modal>
        </section>
      ) : (
        // Empty product list
        <EmptyProductList
          errorMessage={NOTIFICATIONS.FAILED_TO_GET_BOOK_LIST}
        />
      )}
    </>
  )
}

export default memo(ProductList)
