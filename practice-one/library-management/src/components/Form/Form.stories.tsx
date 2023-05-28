import { type StoryFn, type Meta } from "@storybook/react";
import Form from "./index";

export default {
  title: "Example/Form",
  component: Form,
  argTypes: {
    onSubmit: { action: "Submit button clicked" }
  },
} as Meta<typeof Form>;

const Template: StoryFn<typeof Form> = (args) => (
  <Form {...args} />
);

export const Default = Template.bind({});
Default.args = {
  formType: "add",
};
