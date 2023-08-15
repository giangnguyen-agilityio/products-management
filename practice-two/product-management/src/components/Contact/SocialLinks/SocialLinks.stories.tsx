import type { Meta, StoryObj } from '@storybook/react'
import SocialLink from './index'
import facebookLink from '@assets/icons/facebook_link_icon.svg'
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'Practice Two/SocialLink Component',
  component: SocialLink,
  decorators: [
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SocialLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    href: '#',
    icon: facebookLink,
    alt: 'The facebook icon',
  },
}
