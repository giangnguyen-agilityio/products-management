import { type StoryFn, type Meta } from '@storybook/react'
import UserProfile from './index'

export default {
  title: 'Example/User Profile',
  component: UserProfile,
  argTypes: {
    onLogout: { action: 'clicked' }
  }
} as Meta<typeof UserProfile>

const Template: StoryFn<typeof UserProfile> = (args) => (
  <UserProfile {...args} />
)

export const Default = Template.bind({})
Default.args = {
  avatarUrl: 'src/assets/images/logo-website.png',
  email: 'useremail@gmail.com'
}
