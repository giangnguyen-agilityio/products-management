import {type StoryFn, type Meta} from '@storybook/react'
import {BrowserRouter} from 'react-router-dom'
import Footer from './index'
import React from 'react'

export default {
  title: 'Example/Footer',
  component: Footer,
} as Meta<typeof Footer>

const Template: StoryFn<typeof Footer> = () => (
  <BrowserRouter>
    <Footer />
  </BrowserRouter>
)
export const Default = Template.bind({})
