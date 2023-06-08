import {type StoryFn, type Meta} from '@storybook/react'

import Button from './index'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'default',
          'success',
          'warning',
          'danger',
        ],
      },
    },
    onClick: {action: 'clicked'},
  },
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Button',
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Disabled Button',
  disabled: true,
}
