import { type StoryFn, type Meta } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import Navigation from './index'

export default {
  title: 'Example/Navigation',
  component: Navigation
} as Meta<typeof Navigation>

const Template: StoryFn<typeof Navigation> = (args) => (
  <MemoryRouter>
    <Navigation {...args} />
  </MemoryRouter>
)

export const Default = Template.bind({})
Default.args = {
  links: [
    { id: 'book', label: 'Book', url: '/book' },
    { id: 'member', label: 'Member', url: '/member' },
    { id: 'hire-request', label: 'Hire Request', url: '/request' }
  ]
}
