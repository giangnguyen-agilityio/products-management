import {type StoryFn, type Meta} from '@storybook/react'
import Input from './index'
import React from 'react'

export default {
  title: 'Example/Input',
  component: Input,
} as Meta<typeof Input>

const Template: StoryFn<typeof Input> = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Username',
  classNameLabel: 'username',
  type: 'text',
  name: 'username',
  placeholder: 'Enter your username',
  className: 'username-input',
  id: 'username',
  errorMessage: 'Please enter your username',
}
