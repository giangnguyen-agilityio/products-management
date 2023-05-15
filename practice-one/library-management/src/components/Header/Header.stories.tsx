import { type StoryFn, type Meta } from '@storybook/react'
import Header from './index'

export default {
  title: 'Example/Header',
  component: Header
} as Meta<typeof Header>

const Template: StoryFn<typeof Header> = (args) => <Header {...args} />
export const Default = Template.bind({})
Default.args = {
  isLogin: false
}
