import type { Meta, StoryObj } from '@storybook/react'
import ProductRatingVote from './index'
const meta = {
  title: 'Practice Two/ProductRatingVote Component',
  component: ProductRatingVote,
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
} satisfies Meta<typeof ProductRatingVote>
export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {
  args: {
    ratingVote: 5,
  },
}
export const Secondary: Story = {
  args: {
    ratingVote: 3.5,
  },
}
