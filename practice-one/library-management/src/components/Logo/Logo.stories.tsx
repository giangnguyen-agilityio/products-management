import { type StoryFn, type Meta } from "@storybook/react";
import Logo from "./index";

export default {
  title: "Example/Logo",
  component: Logo,
} as Meta<typeof Logo>;

const Template: StoryFn<typeof Logo> = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  imageSrc: "src/assets/images/logo-website.png",
  altText: "This is the logo website",
  widthSize: 50,
  heightSize: 50,
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Logo Website",
};
