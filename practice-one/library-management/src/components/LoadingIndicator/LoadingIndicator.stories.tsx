import { type StoryFn, type Meta } from '@storybook/react'

import LoadingIndicator from './index'

export default {
  title: 'Example/LoadingIndicator',
  component: LoadingIndicator
} as Meta<typeof LoadingIndicator>

const Template: StoryFn<typeof LoadingIndicator> = (args) => (
  <LoadingIndicator {...args} />
)

export const Default = Template.bind({})
Default.args = {
  isLoading: true
}
