import { Meta, Story } from '@storybook/react'
import FilterLink from './'
import phoneIcon from '@assets/icons/Phone_Icon.svg'
import laptopIcon from '@assets/icons/Laptop_Icon.svg'
import refrigeratorIcon from '@assets/icons/Refrigerator_Icon.svg'
import tvIcon from '@assets/icons/TV_Icon.svg'
import airConditionerIcon from '@assets/icons/Air_Conditioner_Icon.svg'

export default {
  title: 'Practice Two/FilterLink Component',
  component: FilterLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

const Template: Story = args => (
  <FilterLink href={''} icon={''} label={''} {...args} />
)

export const PhoneFilter = Template.bind({})
PhoneFilter.args = {
  href: '#',
  icon: phoneIcon,
  label: 'Phone',
}

export const LaptopFilter = Template.bind({})
LaptopFilter.args = {
  href: '#',
  icon: laptopIcon,
  label: 'Laptop',
}

export const RefrigeratorFilter = Template.bind({})
RefrigeratorFilter.args = {
  href: '#',
  icon: refrigeratorIcon,
  label: 'Refrigerator',
}

export const TVFilter = Template.bind({})
TVFilter.args = {
  href: '#',
  icon: tvIcon,
  label: 'TV',
}

export const AirConditionerFilter = Template.bind({})
AirConditionerFilter.args = {
  href: '#',
  icon: airConditionerIcon,
  label: 'Air Conditioner',
}
