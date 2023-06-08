import {type StoryFn, type Meta} from '@storybook/react'
import TableHead from './index'
import React from 'react'

export default {
  title: 'Example/TableHead',
  component: TableHead,
} as Meta<typeof TableHead>

const Template: StoryFn<typeof TableHead> = args => <TableHead {...args} />
export const Default = Template.bind({})
Default.args = {
  columns: [
    {field: 'id', headerName: 'ID'},
    {field: 'bookId', headerName: 'Book ID'},
    {field: 'memberId', headerName: 'Member ID'},
    {field: 'fromDate', headerName: 'From Date'},
    {field: 'toDate', headerName: 'To Date'},
    {field: 'status', headerName: 'Status'},
  ],
}
