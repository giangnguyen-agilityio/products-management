import type { Meta, StoryObj } from '@storybook/react'
import Navigation from './index'

const meta = {
  title: 'Practice Two/Navigation Component',
  component: Navigation,
  tags: ['autodocs'],
} satisfies Meta<typeof Navigation>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    links: [
      { label: 'home', href: 'javascript:void(0)' },
      { label: 'about us', href: 'javascript:void(0)' },
      { label: 'contact', href: 'javascript:void(0)' },
    ],
  },
}
