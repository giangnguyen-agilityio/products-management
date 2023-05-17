import { type StoryFn, type Meta } from '@storybook/react'
import Banner from './index'

export default {
  title: 'Example/Banner',
  component: Banner
} as Meta<typeof Banner>

const Template: StoryFn<typeof Banner> = (args) => <Banner {...args} />

export const Default = Template.bind({})
