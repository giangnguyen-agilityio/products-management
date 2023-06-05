import { type StoryFn, type Meta } from "@storybook/react";
import BookContext from "../../store/books/BookContext";
import Form from "./index";
import React from "react";

export default {
  title: "Example/Form",
  component: Form,
} as Meta<typeof Form>;

const Template: StoryFn<typeof Form> = (args) => {
  const bookContextValue = {
    bookList: [
      {
        id: "B1",
        image: "src/assets/images/book-1.jpg",
        alt: "Harry Potter and the Prisoner of Azkaban book cover",
        title: "Harry Potter and the Prisoner of Azkaban",
        author: "J.K.Rowling",
        description:
          "The story follows Harry Potter during his third year at Hogwarts School of Witchcraft and Wizardry...",
        price: 10.99,
        availableQuantity: 20,
        totalQuantity: 50,
      },
    ],
  };

  return (
    <BookContext.Provider value={bookContextValue}>
      <Form {...args} />
    </BookContext.Provider>
  );
};

export const AddForm = Template.bind({});
AddForm.args = {
  id: "",
  formType: "add",
  onCloseModal: () => {},
  handleToast: (message, status) => {},
};

export const EditForm = Template.bind({});
EditForm.args = {
  id: "B1",
  formType: "edit",
  onCloseModal: () => {},
  handleToast: (message, status) => {},
};
