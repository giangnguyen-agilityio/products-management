import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import ConfirmDialog from './index'

const meta = {
  title: 'Practice Two/ConfirmDialog Component',
  component: ConfirmDialog,
  decorators: [
    Story => (
      <MemoryRouter>
        <div
          style={{
            backgroundColor: '#ECB203',
            width: '100vw',
            height: '100%',
          }}
        >
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    closeConfirmDialog: { action: 'The close confirm dialog button clicked' },
  },
} satisfies Meta<typeof ConfirmDialog>

export default meta
type Story = StoryObj<typeof meta>

export const TheConfirmDialog: Story = {
  args: {
    id: 'id_123',
    isConfirmDialogOpen: true,
  },
}
