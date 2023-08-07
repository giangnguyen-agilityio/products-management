import type { Meta, StoryObj } from '@storybook/react'
import ConfirmDialog from './index'

const meta = {
  title: 'Practice Two/ConfirmDialog Component',
  component: ConfirmDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onDelete: { action: 'The Delete button clicked' },
  },
} satisfies Meta<typeof ConfirmDialog>

export default meta
type Story = StoryObj<typeof meta>

export const TheConfirmDialog: Story = {
  args: {
    id: 'id_123',
  },
}
