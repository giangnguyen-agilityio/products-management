import type { Meta, StoryObj } from '@storybook/react'
import ImageUploader from './index'

const meta = {
  title: 'Practice Two/ImageUploader Component',
  component: ImageUploader,
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
  argTypes: {
    handleImageUpload: { action: 'This image was uploaded' },
  },
} satisfies Meta<typeof ImageUploader>
export default meta
type Story = StoryObj<typeof meta>
export const FieldWithoutErrorMessage: Story = {
  args: {
    formData: {
      image: 'https://assets.nicepagecdn.com/d2cc3eaa/3159880/images/yttyy.jpg',
      name: 'The image alt description',
    },
    errorMessage: '',
  },
}

export const FieldWithErrorMessage: Story = {
  args: {
    formData: {
      image: '',
      name: '',
    },
    errorMessage: 'Please select an image',
  },
}
