import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import Footer from './index'

const meta = {
  title: 'Practice Two/Footer Component',
  component: Footer,
  decorators: [
    Story => (
      <BrowserRouter>
        <div
          style={{
            backgroundColor: '#532EE7',
            color: '#FFF',
            padding: '20px',
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
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
