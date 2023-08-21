import type { Meta, StoryObj } from '@storybook/react'
import InputField from './index'
const meta = {
  title: 'Practice Two/InputField Component',
  component: InputField,
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
} satisfies Meta<typeof InputField>
export default meta
type Story = StoryObj<typeof meta>
export const TextInput: Story = {
  args: {
    label: 'Name of product',
    name: 'productName',
    type: 'text',
    errorMessage: 'Please enter the name of the product',
  },
}
export const UploadImageInput: Story = {
  args: {
    label: 'Upload Your Image',
    name: 'productImage',
    type: 'file',
    accept: 'image/*',
    errorMessage: 'Please select the image to upload',
  },
}
export const NumberInput: Story = {
  args: {
    label: 'Enter your price',
    name: 'productPrice',
    type: 'number',
    min: 0,
    errorMessage: 'The value must be greater than 0',
  },
}
