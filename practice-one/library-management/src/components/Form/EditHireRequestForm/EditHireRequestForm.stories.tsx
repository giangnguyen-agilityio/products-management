import {type StoryFn, type Meta} from '@storybook/react'
import EditHireRequestForm from './index'
import React from 'react'

export default {
  title: 'Example/EditHireRequestForm',
  component: EditHireRequestForm,
  argTypes: {
    onEdit: {action: 'Edit button clicked'},
  },
} as Meta<typeof EditHireRequestForm>

const Template: StoryFn<typeof EditHireRequestForm> = args => {
  return <EditHireRequestForm {...args} />
}

export const Primary = Template.bind({})
Primary.args = {
  id: 'Selected ID',
}
