import HireRequestsContext from '@stores/hire-request/HireRequestsContext'
import {type StoryFn, type Meta} from '@storybook/react'
import EditHireRequestForm from './index'
import React from 'react'

export default {
  title: 'Example/EditHireRequestForm',
  component: EditHireRequestForm,
  argTypes: {
    onEdit: {action: 'Edit button clicked'},
  },
} as Meta<typeof EditHireRequestForm>

const Template: StoryFn<typeof EditHireRequestForm> = args => {
  const hireRequestContextValueDemo = {
    hireRequestListDemo: [
      {
        id: 'HR1',
        bookId: 'B1',
        memberId: 'M1',
        fromDate: '2023-03-21T08:52:13.000Z',
        toDate: '2023-07-24T08:52:13.000Z',
        status: 'completed',
      },
    ],
  }

  return (
    <HireRequestsContext.Provider value={hireRequestContextValueDemo}>
      <EditHireRequestForm {...args} />
    </HireRequestsContext.Provider>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  id: 'HR1',
}
