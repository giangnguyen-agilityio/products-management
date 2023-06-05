import { type StoryFn, type Meta } from "@storybook/react";
import Table from "./index";
import React from "react";

export default {
  title: "Example/Table",
  component: Table,
  argTypes: {
    onToggleCompletion: { action: "Toggle completion button clicked" },
    onEdit: { action: "Edit button clicked" },
    onDelete: { action: "Delete button clicked" },
  },
} as Meta<typeof Table>;

const Template: StoryFn<typeof Table> = (args) => <Table {...args} />;
export const Default = Template.bind({});
Default.args = {
  columns: [
    { field: "id", headerName: "ID" },
    { field: "bookId", headerName: "Book ID" },
    { field: "memberId", headerName: "Member ID" },
    { field: "fromDate", headerName: "From Date" },
    { field: "toDate", headerName: "To Date" },
    { field: "status", headerName: "Status" },
  ],
  data: [
    {
      id: "HR1",
      bookId: "B1",
      memberId: "M1",
      fromDate: "2023-03-21T08:52:13.000Z",
      toDate: "2023-07-24T08:52:13.000Z",
      status: "completed",
    },
    {
      id: "HR2",
      bookId: "B2",
      memberId: "M2",
      fromDate: "2023-03-21T08:52:13.000Z",
      toDate: "2023-03-24T08:52:13.000Z",
      status: "incomplete",
    },
    {
      id: "HR3",
      bookId: "B3",
      memberId: "M2",
      fromDate: "2023-03-21T08:52:13.000Z",
      toDate: "2023-03-24T08:52:13.000Z",
      status: "completed",
    },
    {
      id: "HR4",
      bookId: "B4",
      memberId: "M1",
      fromDate: "2023-03-21T08:52:13.000Z",
      toDate: "2023-03-24T08:52:13.000Z",
      status: "incomplete",
    },
  ],
};
