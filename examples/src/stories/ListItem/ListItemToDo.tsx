import React from 'react';
import './ListItemToDo.css';

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export interface ListItemTodoProps {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const ListItemTodo = ({ todo, onToggle, onDelete }: ListItemTodoProps) => {
    const handleToggle = () => {
        onToggle(todo.id);
        window.alert(`The task ${todo.text} is ${todo.completed ? 'completed' : 'not completed'}`)
    };

    const handleDelete = () => {
        onDelete(todo.id);
        window.alert(`Delete the task ${todo.text}`)
    };

    return (
        <li className={`ListItemTodo ${todo.completed ? 'completed' : ''}`}>
            <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
            <span className="text">{todo.text}</span>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
};

export default ListItemTodo;
