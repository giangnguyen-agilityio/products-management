import {type StoryFn, type Meta} from '@storybook/react'
import Banner from './index'
import BookContext from '@stores/books/BookContext'
import React from 'react'

export default {
  title: 'Example/Banner',
  component: Banner,
  argTypes: {
    onRent: {action: 'Rent button clicked'},
  },
} as Meta<typeof Banner>

const Template: StoryFn<typeof Banner> = args => {
  const bookState = {
    books: [
      {
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
      {
        id: 'B2',
        image: 'src/assets/images/book-2.jpg',
        alt: 'Harry Potter and the Chamber of Secrets book cover',
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K.Rowling',
        description:
          "'Harry Potter and the Chamber of Secrets' follows the second year of Harry Potter's adventures at Hogwarts School of Witchcraft and Wizardry. When strange events occur, including mysterious messages written on the walls and students being petrified, Harry and his friends Ron and Hermione delve into the mystery of the Chamber of Secrets. They discover that an ancient monster, the Basilisk, has been unleashed and is threatening the students. As Harry uncovers the truth behind the Chamber's secrets, he must confront his own abilities and face the dark forces that lurk within Hogwarts, ultimately saving the day once again.",
        price: 15.5,
        availableQuantity: 24,
        totalQuantity: 80,
      },
      {
        id: 'B3',
        image: 'src/assets/images/book-3.jpg',
        alt: 'Harry Potter and the Goblet of Fire book cover',
        title: 'Harry Potter and the Goblet of Fire',
        author: 'J.K.Rowling',
        description:
          "Harry Potter's world takes a dramatic turn. As he enters his fourth year at Hogwarts School of Witchcraft and Wizardry, the school is abuzz with excitement over the Triwizard Tournament. However, Harry finds himself unexpectedly thrust into the competition when his name is mysteriously chosen, even though he is underage. As he faces perilous challenges and encounters new dangers, Harry realizes that darker forces are at play. With the return of Lord Voldemort, Harry's journey becomes a battle for survival, testing his courage and resolve like never before. Amidst this thrilling adventure, friendships are forged, secrets are unraveled, and the wizarding world braces itself for the impending darkness.",
        price: 12.08,
        availableQuantity: 32,
        totalQuantity: 67,
      },
    ],
  }
  return (
    <BookContext.Provider value={{bookState}}>
      <Banner {...args} />
    </BookContext.Provider>
  )
}

export const Default = Template.bind({})
Default.args = {}
