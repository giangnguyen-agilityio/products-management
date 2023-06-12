import {type StoryFn, type Meta} from '@storybook/react'
import Card from './index'
import React from 'react'

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    onRent: {action: 'Rent button clicked'},
    onEdit: {action: 'Edit button clicked'},
    onDelete: {action: 'Delete button clicked'},
  },
} as Meta<typeof Card>

const Template: StoryFn<typeof Card> = args => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  book: {
    id: 'B1',
    image: 'src/assets/images/book-1.jpg',
    alt: 'Harry Potter and the Prisoner of Azkaban book cover',
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J.K.Rowling',
    description:
      "The story follows Harry Potter during his third year at Hogwarts School of Witchcraft and Wizardry, where he learns that Sirius Black, an infamous wizard and convicted murderer, has escaped from the wizarding prison of Azkaban. As Harry delves into the mystery, aided by his friends Ron and Hermione, they encounter time travel, terrifying creatures called Dementors, and the truth about Harry's own past. Filled with adventure, friendship, and the complexities of the wizarding world, this captivating script takes readers on a thrilling magical journey.",
    price: 10.99,
    availableQuantity: 20,
    totalQuantity: 50,
  },
  isAdmin: false,
}
