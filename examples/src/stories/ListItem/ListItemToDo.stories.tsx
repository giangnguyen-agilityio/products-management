import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import ListItemToDo, { ListItemTodoProps } from './ListItemToDo';

export default {
    title: 'Example/ListItemToDo',
    component: ListItemToDo,
    argTypes: {
        onToggle: { action: 'toggled' },
        onDelete: { action: 'deleted' },
    },
} as Meta;

const Template: Story<ListItemTodoProps> = (args) => <ListItemToDo {...args} />;

export const Default = Template.bind({});
Default.args = {
    todo: {
        id: 1,
        text: 'Learn the HTML/CSS',
        completed: false,
    },
};

export const Completed = Template.bind({});
Completed.args = {
    todo: {
        id: 2,
        text: 'Learn the JavaScript',
        completed: true,
    },
};
