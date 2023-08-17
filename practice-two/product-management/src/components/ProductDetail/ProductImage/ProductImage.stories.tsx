import type { Meta, StoryObj } from '@storybook/react'
import ProductImage from './index'

const meta = {
  title: 'Practice Two/ProductImage Component',
  component: ProductImage,
  decorators: [
    Story => (
      <div
        style={{
          padding: '10px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductImage>

export default meta
type Story = StoryObj<typeof meta>

export const ProductWithImage: Story = {
  args: {
    src: 'https://assets.nicepagecdn.com/d2cc3eaa/3159880/images/yttyy.jpg',
  },
}

export const ProductWithoutImage: Story = {
  args: {
    src: null,
  },
}
