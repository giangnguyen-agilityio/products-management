import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import Logo from './index'

const meta = {
  title: 'Practice Two/Logo Component',
  component: Logo,
  decorators: [
    Story => (
      <BrowserRouter>
        <div
          style={{
            backgroundColor: '#532EE7',
            padding: '10px',
          }}
        >
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    textColor: { control: 'color' },
  },
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const LogoWithText: Story = {
  args: {
    text: 'Agility',
    textSize: 'md',
  },
}

export const LogoWithImage: Story = {
  args: {
    imageSrc: 'src/assets/images/logo_website.webp',
    widthSize: '100px',
    heightSize: '40px',
  },
}
