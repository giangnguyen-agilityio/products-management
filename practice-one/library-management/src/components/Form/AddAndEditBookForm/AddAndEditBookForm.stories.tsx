import {type StoryFn, type Meta} from '@storybook/react'
import AddAndEditBookForm from './index'
import {MODAL} from '@constants'
import React from 'react'

export default {
  title: 'Example/AddAndEditBookForm',
  component: AddAndEditBookForm,
  argTypes: {
    onAdd: {action: 'The ADD button clicked'},
    onEdit: {action: 'The EDIT button clicked'},
  },
} as Meta<typeof AddAndEditBookForm>

const bookDataDemo = {
  image: 'src/assets/images/book-1.jpg',
  title: 'Harry Potter and the Prisoner of Azkaban',
  author: 'J.K.Rowling',
  description:
    'The story follows Harry Potter during his third year at Hogwarts School of Witchcraft and Wizardry...',
  price: 10.99,
  availableQuantity: 20,
  totalQuantity: 50,
}

const Template: StoryFn<typeof AddAndEditBookForm> = args => {
  return <AddAndEditBookForm {...args} />
}

export const AddForm = Template.bind({})
AddForm.args = {
  id: '',
  formType: MODAL.ADD,
}

export const EditForm = Template.bind({})
EditForm.args = {
  id: 'B1',
  formType: MODAL.EDIT,
  bookData: bookDataDemo,
}
