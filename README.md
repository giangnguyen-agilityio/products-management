# React Training Plan

## OVERVIEW

A revision of React training plan which focuses on the latest version of [React(v18.2.0)](https://reactjs.org/docs/getting-started.html). It will help trainees learn React fundamentals step by step following the instructions and hands-on practices.

### Timeline

- Main Concepts (Overview)
  - 1 day (Mar 08, 2023)
- Advanced Guides (Overview)
  - 2 days (from Mar 09, 2023, to Mar 10, 2023)
- Hooks API (Overview)
  - 2 days (from Mar 13, 2023, to Mar 14, 2023)
- ES6
  - 1 day (Mar 15, 2023)
- Storybook
  - 2 days (Mar 16,2023, to Mar 17,2023)

## PREREQUISITE

- [ES6](https://www.javascripttutorial.net/es6/)
- [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html)
- Install [nvm](https://github.com/nvm-sh/nvm#install--update-script) and [Node.js](https://nodejs.org/en/download/) v18.x
- Install [pnpm](https://pnpm.io/) v7.x

## GETTING STARTED

### Build tool

We use [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) which is a build tool that aims to provide a faster and leaner development experience for modern web projects.

## MAIN CONCEPT

Step by step learning the main concepts. For any examples you found in the documentation, you can try it in your first React app created above.

While reading Main Concepts, you can also do [hands-on practice](https://gitlab.asoft-python.com/bgh/javascript/react/-/wikis/home#practice) at the same time.

- [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
- [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
- [Components and Props](https://reactjs.org/docs/components-and-props.html)
- [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [Handling Events](https://reactjs.org/docs/handling-events.html)
- [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
- [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)
- [Forms](https://reactjs.org/docs/forms.html)
- [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
- [Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)
- [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

### Storybook

[Story book](https://storybook.js.org/) is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing and documentation.
Init storybook into your first React app:

- init storybook
  > pnpx sb init -s
- install dependencies
  > pnpm install
- run it
  > pnpm storybook

Try to create a Storybook for your example components
https://storybook.js.org/tutorials/intro-to-storybook/react/en/simple-component/

### Practice

Apply what you have read to rewrite your previous HTML/CSS practice into React components.

- Apply Storybook into your practice.

## ADVANCE GUIDES

All the topics in the [Advanced Guides](https://reactjs.org/docs/accessibility.html#:~:text=MAIN%20CONCEPTS-,ADVANCED%20GUIDES,-Accessibility) need to be read. Some highlight topics need more focus:

- [Code-Splitting](https://reactjs.org/docs/code-splitting.html)
- [Context](https://reactjs.org/docs/context.html)
- [Error Boundaries](https://reactjs.org/docs/error-boundaries.html)
- [Higher-Order Components](https://reactjs.org/docs/higher-order-components.html)
- [Optimizing Performance](https://reactjs.org/docs/optimizing-performance.html)
- [Profiler](https://reactjs.org/docs/profiler.html)
- [Uncontrolled Components](https://reactjs.org/docs/uncontrolled-components.html)
- [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)

## REACT HOOKS

Hooks let you use state and other React features without writing a class.

- [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)
- [useState Hook](https://reactjs.org/docs/hooks-state.html)
- [useEffect Hook](https://reactjs.org/docs/hooks-effect.html)
- [useContext Hook](https://reactjs.org/docs/hooks-reference.html#usecontext)
- [useRef Hook](https://reactjs.org/docs/hooks-reference.html#useref)
- [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)
- [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)

### Debugging

- Debug tools: React DevTools. Supporters have to present how this tool works.
- Install the extension and use it to debug your practices.

### Practice

This practice will let you understand about simple flow in React:

- Using React hooks
- Filter and editing list of products
  - Create mocking data: write a JSON file and import it into your JSX
  - User filters by column values
  - User edits/deletes product item
    At the end of this step, trainees should be able to join projects for hot training and doing React Components.

### Data fetching

[SWR](https://swr.vercel.app/)- React Hooks for Data Fetching

- [Getting Started](https://swr.vercel.app/docs/getting-started) - use pnpm to install instead of npm/yarn
- [Global Configuration](https://swr.vercel.app/docs/global-configuration)
- [Data Fetching](https://swr.vercel.app/docs/data-fetching)
- [Error Handling](https://swr.vercel.app/docs/error-handling)
- [Auto Revalidation](https://swr.vercel.app/docs/revalidation)
- [Pagination](https://swr.vercel.app/docs/pagination)

### Unit testing

Supporters should give a brief introduction for unit testing and how to set it up.

- [Testing Overview](https://reactjs.org/docs/testing.html)
  - [Jest](https://jestjs.io/)
  - [React Test Library](https://testing-library.com/docs/react-testing-library/intro/)
  - [Test Utilities](https://reactjs.org/docs/test-utils.html)
- [Testing Recipes](https://reactjs.org/docs/testing-recipes.html)
- [Testing environments](https://reactjs.org/docs/testing-environments.html)

### Practice

- Adding more features for practice 2
  - User adds & deletes a product
  - User deletes a product
  - User opens product detail page
  - User edits product information in product detail page
  - Product data will be kept when refresh the page
  - Apply [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext) and [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer) for state management
  - Apply SWR for fetching data - from a simple [json-server](https://github.com/typicode/json-server)
- Unit test coverage should greater than 80%

## REFERENCES

This is not in the plan, trainees may want to read more about debugging tools, state management, etc.

### Debugging Tools

- [React perf](https://facebook.github.io/react/docs/perf.html)
- [Reactotron](https://github.com/infinitered/reactotron)

### State Management

- [Redux](https://redux.js.org/)
  - [Redux logger](https://github.com/evgenyrodionov/redux-logger)
  - [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
- [Mobx](https://mobx.js.org/)

### React Component libraries

- [Chakra UI](https://chakra-ui.com/)
- [Material UI](https://mui.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Ant Design](https://ant.design/)

### React Router

- [React Router v6](https://reactrouter.com/)
