import {type StoryFn, type Meta} from '@storybook/react'
import Modal from './index'
import React from 'react'

export default {
  title: 'Example/Modal',
  component: Modal,
  argTypes: {
    closeModal: {action: 'Close modal button clicked'},
  },
} as Meta<typeof Modal>

const Template: StoryFn<typeof Modal> = args => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  modalTitle: 'Modal title',
  showModal: true,
  modalType: 'add',
}
