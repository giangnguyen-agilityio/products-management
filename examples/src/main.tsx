import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ComponentsAndPropsExample,
  HandlingEventsExample,
  StateAndLifecycleExample,
  ConditionalRenderingExample,
  ListsAndKeysExample,
  FormsExample,
  LiftingStateUpExample,
  CompositionExample,
  InheritanceExample,
  KeyboardNavigationExample,
  FocusManagementExample,
  ContextExample,
  ErrorBoundaryExample,
  ForwardingRefs,
  FragmentsExample,
  KeyedFragmentsExample,
  EmbeddingExpressionsInJSX,
  PropsInJSX,
  ChildrenInJSX,
  JSXPreventsInjectionAttacks,
} from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ComponentsAndPropsExample />
    <StateAndLifecycleExample />
    <HandlingEventsExample />
    <ConditionalRenderingExample />
    <ListsAndKeysExample />
    <FormsExample />
    <LiftingStateUpExample />
    <CompositionExample
      title={'Composition Example'}
      content={'This is the content of composition example'}
      buttonLabel={'Click me !'}
      onButtonClick={function (): void {
        alert('This is example about Composition');
      }}
    />
    <InheritanceExample />
    <KeyboardNavigationExample />
    <FocusManagementExample />
    <ContextExample />
    <ErrorBoundaryExample />
    <ForwardingRefs />
    <FragmentsExample />
    <KeyedFragmentsExample items={[]} />
    <EmbeddingExpressionsInJSX />
    <PropsInJSX />
    <ChildrenInJSX />
    <JSXPreventsInjectionAttacks />
  </React.StrictMode>
);
