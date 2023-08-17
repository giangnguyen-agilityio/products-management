import type { Meta, StoryObj } from '@storybook/react'
import EmptyProduct from './index'

const meta = {
  title: 'Practice Two/EmptyProduct Component',
  component: EmptyProduct,
  decorators: [
    Story => (
      <div
        style={{
          color: '#ECB203',
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
} satisfies Meta<typeof EmptyProduct>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    errorMessage: "We couldn't find any product",
  },
}
