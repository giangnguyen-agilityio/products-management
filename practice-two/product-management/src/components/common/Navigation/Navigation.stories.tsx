import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './index'

const meta = {
  title: 'Practice Two/Navigation Component',
  component: Navigation,
  decorators: [
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Navigation>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    links: [
      { label: 'home', href: '/' },
      { label: 'about us', href: '/' },
      { label: 'contact', href: '/' },
    ],
  },
}
