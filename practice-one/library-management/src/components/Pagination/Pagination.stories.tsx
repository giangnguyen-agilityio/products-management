import { type StoryFn, type Meta } from "@storybook/react";
import Pagination from "./index";
import React from "react";

export default {
  title: "Example/Pagination",
  component: Pagination,
} as Meta<typeof Pagination>;

const Template: StoryFn<typeof Pagination> = (args) => <Pagination {...args} />;
export const Default = Template.bind({});
Default.args = {
  length: 5,
  activeIndex: 1,
};
