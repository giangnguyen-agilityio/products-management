import type { Meta, StoryObj } from '@storybook/react'
import ContactInfo from './index'

const meta = {
  title: 'Practice Two/ContactInfo Component',
  component: ContactInfo,
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
} satisfies Meta<typeof ContactInfo>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
