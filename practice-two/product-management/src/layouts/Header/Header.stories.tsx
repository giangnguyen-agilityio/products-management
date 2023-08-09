import type { Meta, StoryObj } from '@storybook/react'
import Header from './index'

const meta = {
  title: 'Practice Two/Header Component',
  component: Header,
  decorators: [
    Story => (
      <div
        style={{
          backgroundColor: '#532EE7',
          color: '#FFF',
        }}
      >
        <Story />
      </div>
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
