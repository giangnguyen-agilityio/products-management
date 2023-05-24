import { type StoryFn, type Meta } from "@storybook/react";

import Typography from "./index";

export default {
  title: "Example/Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4", "h5", "h6", "p"],
      },
    },
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
  },
} as Meta<typeof Typography>;

const Template: StoryFn<typeof Typography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "This is a paragraph",
};
