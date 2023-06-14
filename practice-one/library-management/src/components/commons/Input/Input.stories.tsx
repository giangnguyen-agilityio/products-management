import {type StoryFn, type Meta} from '@storybook/react'
import Input from './index'
import React from 'react'

export default {
  title: 'Example/Input',
  component: Input,
} as Meta<typeof Input>

const Template: StoryFn<typeof Input> = args => <Input {...args} />

export const TextInput = Template.bind({})
TextInput.args = {
  label: 'Username:',
  classNameLabel: 'username',
  type: 'text',
  name: 'username',
  placeholder: 'Enter your username',
  className: 'username-input',
  id: 'username',
  errorMessage: 'Please enter your username',
}

export const DateTimeInput = Template.bind({})
DateTimeInput.args = {
  label: 'Date Time Local:',
  classNameLabel: 'datetime-local-label',
  type: 'datetime-local',
  className: 'datetime-local',
}

export const UploadImageInput = Template.bind({})
UploadImageInput.args = {
  label: 'Upload Your Image:',
  classNameLabel: 'upload-image-label',
  className: 'upload-file',
  type: 'file',
  accept: 'image/*',
}

export const NumberInput = Template.bind({})
NumberInput.args = {
  label: 'Enter your quantity:',
  classNameLabel: 'quantity-input-label',
  className: 'quantity-input',
  type: 'number',
  min: 0,
}
