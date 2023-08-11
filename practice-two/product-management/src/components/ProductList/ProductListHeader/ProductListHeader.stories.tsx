import type { Meta, StoryObj } from '@storybook/react'
import ProductListHeader from './index'

const meta = {
  title: 'Practice Two/ProductListHeader Component',
  component: ProductListHeader,
  decorators: [
    Story => (
      <div
        className="storybook-test"
        style={{
          backgroundColor: '#532EE7',
          color: '#FFF',
        }}
      >
        <Story />
      </div>
    ),
  ],

  tags: ['autodocs'],
} satisfies Meta<typeof ProductListHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
