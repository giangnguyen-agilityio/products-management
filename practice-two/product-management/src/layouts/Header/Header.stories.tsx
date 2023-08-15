import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import Header from './index'

const meta = {
  title: 'Practice Two/Header Component',
  component: Header,
  decorators: [
    Story => (
      <BrowserRouter>
        <div
          style={{
            backgroundColor: '#532EE7',
            color: '#FFF',
          }}
        >
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: 'top',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
