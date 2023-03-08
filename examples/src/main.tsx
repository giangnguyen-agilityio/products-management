import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ComponentsAndPropsExample,
  HandlingEventsExample,
  StateAndLifecycleExample,
  ConditionalRenderingExample,
  ListsAndKeysExample,
  FormsExample,
} from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ComponentsAndPropsExample />
    <StateAndLifecycleExample />
    <HandlingEventsExample />
    <ConditionalRenderingExample />
    <ListsAndKeysExample />
    <FormsExample />
  </React.StrictMode>
);
