import {type StoryFn, type Meta} from '@storybook/react'
import {BrowserRouter} from 'react-router-dom'
import Header from './index'
import React from 'react'

export default {
  title: 'Example/Header',
  component: Header,
} as Meta<typeof Header>

const Template: StoryFn<typeof Header> = args => (
  <BrowserRouter>
    <Header {...args} />
  </BrowserRouter>
)
export const Default = Template.bind({})
Default.args = {
  isLogin: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
  isLogin: true,
}
