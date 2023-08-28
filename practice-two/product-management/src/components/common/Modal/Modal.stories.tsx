import type { Meta, StoryObj } from '@storybook/react'
import Modal from './index'

const meta = {
  title: 'Practice Two/Modal Component',
  component: Modal,
  argTypes: {
    onCloseModal: { action: 'Close the modal button clicked' },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

const children = () => <h1>This is the content of the modal</h1>

export const Default: Story = {
  args: {
    isOpen: false,
    children: children(),
  },
}
