import { type StoryFn, type Meta } from "@storybook/react";
import Footer from "./index";

export default {
  title: "Example/Footer",
  component: Footer,
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = () => <Footer />;
export const Default = Template.bind({});
