import type { Meta, StoryObj } from '@storybook/react'
import ContactInfoItem from './index'
import locationIcon from '@assets/icons/Location_Icon.svg'

const meta = {
  title: 'Practice Two/ContactInfoItem Component',
  component: ContactInfoItem,
  decorators: [
    Story => (
      <div
        style={{
          backgroundColor: '#ECB203',
          width: '100vw',
          height: '100%',
          padding: '20px',
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
} satisfies Meta<typeof ContactInfoItem>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    icon: locationIcon,
    title: 'our main office',
    content: 'SoHo 94 Broadway St New York, NY 1001',
  },
}
