import React from 'react';
import { Header } from '../Header/Header';
import './page.css';
import ListItemTodo, { Todo } from '../ListItem/ListItemToDo';

type User = {
  name: string;
};

export const Page: React.VFC = () => {
  const [user, setUser] = React.useState<User>();
  const todos: Todo[] = [
    { id: 1, text: 'Learn the HTML/CSS', completed: false },
    { id: 2, text: 'Learn the JavaScript', completed: true },
    { id: 3, text: 'Learn the TypeScript', completed: false },
  ];

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Giang Nguyen' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Giang Nguyen' })}
      />

      <section>
        <h2>To Do List</h2>
        <ul>
          {todos.map((todo) => (
            <ListItemTodo
              key={todo.id}
              todo={todo}
              onToggle={() => window.alert(`The task ${todo.text} is ${todo.completed ? 'completed' : 'not completed'}`)}
              onDelete={() => window.alert(`Delete the task ${todo.text}`)}
            />
          ))}
        </ul>
      </section>
    </article>
  );
};
