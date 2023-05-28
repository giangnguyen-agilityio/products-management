import { type StoryFn, type Meta } from "@storybook/react";
import Modal from "./index";

export default {
  title: "Example/Modal",
  component: Modal,
  argTypes: {
    closeModal: { action: "Close modal button clicked" }
  },
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => (
  <Modal {...args} />
);

export const Default = Template.bind({});
Default.args = {
    showModal: true,
    modalType: 'add'
};
