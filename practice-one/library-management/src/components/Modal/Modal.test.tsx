import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import {MODAL} from '@constants/modal'
import Modal from '.'

describe('Modal component', () => {
  it('should render the modal when `showModal` is true', () => {
    const {container} = render(
      <Modal
        closeModal={() => {}}
        showModal={true}
        modalType={MODAL.ADD}
        modalTitle="Test Modal"
      >
        Modal Content
      </Modal>
    )

    const modalContainer = container.querySelector('.modal-container')
    expect(modalContainer).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should not render the modal when `showModal` is false', () => {
    const {container} = render(
      <Modal
        closeModal={() => {}}
        showModal={false}
        modalType={MODAL.ADD}
        modalTitle="Test Modal"
      >
        Modal Content
      </Modal>
    )

    const modalContainer = container.querySelector('.modal-container')
    expect(modalContainer).not.toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should render the correct modal type based on `modalType` prop', () => {
    const {container} = render(
      <Modal
        closeModal={() => {}}
        showModal={true}
        modalType={MODAL.DELETE}
        modalTitle="Test Modal"
      >
        Modal Content
      </Modal>
    )

    const modalContainer = container.querySelector('.modal-delete')
    expect(modalContainer).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should call `closeModal` when the close button is clicked', () => {
    const closeModalMock = jest.fn()
    const {container} = render(
      <Modal
        closeModal={closeModalMock}
        showModal={true}
        modalType={MODAL.ADD}
        modalTitle="Test Modal"
      >
        Modal Content
      </Modal>
    )

    const closeButton = container.querySelector('.close-modal-btn')
    fireEvent.click(closeButton!)
    expect(closeModalMock).toHaveBeenCalledTimes(1)
  })

  it('should call `closeModal` when the Escape key is pressed', () => {
    const closeModalMock = jest.fn()
    const {container} = render(
      <Modal
        closeModal={closeModalMock}
        showModal={true}
        modalType={MODAL.ADD}
        modalTitle="Test Modal"
      >
        Modal Content
      </Modal>
    )

    const modalOverlay = container.querySelector('.modal-overlay')
    fireEvent.keyDown(modalOverlay!, {key: 'Escape'})
    expect(closeModalMock).toHaveBeenCalledTimes(1)
  })

  it('should not call `closeModal` when a key other than Escape is pressed', () => {
    const closeModalMock = jest.fn()
    const {container} = render(
      <Modal
        closeModal={closeModalMock}
        showModal={true}
        modalType={MODAL.ADD}
        modalTitle="Test Modal"
      >
        Modal Content
      </Modal>
    )

    const modalOverlay = container.querySelector('.modal-overlay')
    fireEvent.keyDown(modalOverlay!, {key: 'Enter'})
    expect(closeModalMock).not.toHaveBeenCalled()
  })
})
