import type { Meta, StoryObj } from '@storybook/react'
import ProductDesc from './index'

const meta = {
  title: 'Practice Two/ProductDesc Component',
  component: ProductDesc,
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
} satisfies Meta<typeof ProductDesc>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    productDesc:
      "The iPhone 14 Pro is Apple's latest flagship, featuring a Super Retina XDR display, A16 Bionic chip, and advanced triple-camera system. With 5G capabilities and impressive battery life, it offers a top-tier smartphone experience.",
  },
}
