import { type StoryFn, type Meta } from "@storybook/react";
import TableRow from "./index";
import React from "react";

export default {
  title: "Example/TableRow",
  component: TableRow,
  argTypes: {
    onToggleCompletion: { action: "Toggle completion button clicked" },
    onEdit: { action: "Edit button clicked" },
    onDelete: { action: "Delete button clicked" },
  },
} as Meta<typeof TableRow>;

const Template: StoryFn<typeof TableRow> = (args) => <TableRow {...args} />;
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
  data: {
    id: "HR1",
    bookId: "B1",
    memberId: "M1",
    fromDate: "2023-05-28T08:52:13.000Z",
    toDate: "2023-06-01T08:52:13.000Z",
    status: "completed",
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  columns: [
    { field: "id", headerName: "ID" },
    { field: "bookId", headerName: "Book ID" },
    { field: "memberId", headerName: "Member ID" },
    { field: "fromDate", headerName: "From Date" },
    { field: "toDate", headerName: "To Date" },
    { field: "status", headerName: "Status" },
  ],
  data: {
    id: "HR1",
    bookId: "B1",
    memberId: "M1",
    fromDate: "2023-06-4T08:52:13.000Z",
    toDate: "2023-06-10T08:52:13.000Z",
    status: "incomplete",
  },
};
