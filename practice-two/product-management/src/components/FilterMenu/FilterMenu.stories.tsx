import { Meta, Story } from '@storybook/react'
import FilterMenu from './index'

const meta: Meta = {
  title: 'Practice Two/FilterMenu Component',
  component: FilterMenu,
  decorators: [
    Story => (
      <div
        style={{
          backgroundColor: '#532EE7',
          padding: '20px',
          height: '200px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
}

export default meta

const Template: Story<any> = args => <FilterMenu {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isOpen: true,
  customRef: null,
}
