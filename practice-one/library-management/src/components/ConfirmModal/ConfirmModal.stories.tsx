import { type StoryFn, type Meta } from "@storybook/react";
import ConfirmModal from "./index";

export default {
  title: "Example/ConfirmModal",
  component: ConfirmModal,
  argTypes: {
    onConfirm: { action: "Confirm button clicked" },
    onCancel: { action: "Cancel button clicked" },
  },
} as Meta<typeof ConfirmModal>;

const Template: StoryFn<typeof ConfirmModal> = (args) => (
  <ConfirmModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "book",
};
