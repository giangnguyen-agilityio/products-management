import type { Meta, StoryObj } from '@storybook/react'
import Contact from './index'

const meta = {
  title: 'Practice Two/Contact Component',
  component: Contact,
  decorators: [
    Story => (
      <div
        style={{
          backgroundColor: '#ECB203',
          width: '100vw',
          height: '100%',
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
} satisfies Meta<typeof Contact>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
