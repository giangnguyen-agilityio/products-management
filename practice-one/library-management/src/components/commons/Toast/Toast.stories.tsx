import {type StoryFn, type Meta} from '@storybook/react'

import Toast from './index'

export default {
  title: 'Example/Toast',
  component: Toast,
} as Meta<typeof Toast>

const Template: StoryFn<typeof Toast> = args => <Toast {...args} />

export const Default = Template.bind({})
Default.args = {
  duration: 5000,
  message: 'Book added successfully',
  status: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
  duration: 5000,
  message: 'Failed to add a new book',
  status: false,
}
