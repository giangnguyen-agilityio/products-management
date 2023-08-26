import type { Meta, StoryObj } from '@storybook/react'
import Modal from './index'
import { MODAL } from '@constants'

const meta = {
  title: 'Practice Two/Modal Component',
  component: Modal,
  argTypes: {
    onCloseModal: { action: 'Close the modal button clicked' },
    onAdd: { action: 'Add a new product button clicked' },
    onEdit: { action: 'Edit a product button clicked' },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

const productDataSample = {
  id: 'P01',
  name: 'iPhone 14 Pro Max',
  image: 'https://assets.nicepagecdn.com/d2cc3eaa/3159880/images/yttyy.jpg',
  discount: 11,
  oldPrice: 1263.8,
  newPrice: 1116.31,
  rate: 4.5,
  description:
    "The iPhone 14 Pro Max is Apple's flagship smartphone, featuring a Super Retina XDR display, A16 Bionic chip for powerful performance, and an advanced triple-camera system for exceptional photography. With premium design, Face ID, and MagSafe technology, it offers a top-tier user experience.",
}

export const ModalAdd: Story = {
  args: {
    isOpen: false,
    modalType: MODAL.ADD,
  },
}

export const ModalEdit: Story = {
  args: {
    isOpen: false,
    modalType: MODAL.EDIT,
    productData: productDataSample,
  },
}
