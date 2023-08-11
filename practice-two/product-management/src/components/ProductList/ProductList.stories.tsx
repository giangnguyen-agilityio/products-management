import type { Meta, StoryObj } from '@storybook/react'
import ProductList from './index'

const meta = {
  title: 'Practice Two/ProductList Component',
  component: ProductList,
  decorators: [
    Story => (
      <div
        className="storybook-test"
        style={{
          backgroundColor: '#532EE7',
          padding: '10px',
        }}
      >
        <Story />
      </div>
    ),
  ],

  tags: ['autodocs'],
} satisfies Meta<typeof ProductList>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
