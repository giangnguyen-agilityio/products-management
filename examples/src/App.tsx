import React from 'react';
import './App.css';
import { Component } from 'react';

type CounterState = {
  count: number;
};

// Function Component Example
function Greeting(props: { name: string }) {
  return <h1>Hello, {props.name}!</h1>;
}

// Class Component Example
class Counter extends Component<{}, CounterState> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>You clicked the button {this.state.count} times.</p>
        <button onClick={() => this.handleClick()}>Click me!</button>
      </div>
    );
  }
}

// Composing Components Example
function ComponentsAndPropsExample() {
  return (
    <div className="components-and-props-example">
      <Greeting name="Giang" />
      <Counter />
    </div>
  );
}

// Default Prop Values Example
Greeting.defaultProps = {
  name: 'World',
};

/*--------------------State amd Lifecycle Example------------------------*/
interface ClockState {
  date: Date;
}

class Clock extends React.Component<{}, ClockState> {
  timerID: number | undefined;

  constructor(props: {}) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className="state-and-lifecycle-example">
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function StateAndLifecycleExample() {
  return (
    <div>
      <Clock />
    </div>
  );
}

/*--------------------Handling Events Example------------------------*/
type ToggleState = {
  isOn: boolean;
};

class Toggle extends Component<{}, ToggleState> {
  constructor(props: {}) {
    super(props);
    this.state = { isOn: false };
    // bind the event handler to the component instance
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    // prevent the default form submission behavior
    event.preventDefault();
    // update the component state
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    return (
      <div className="handling-events-example">
        <h2>The toggle is {this.state.isOn ? 'on' : 'off'}</h2>
        <button onClick={this.handleClick}>Toggle</button>
      </div>
    );
  }
}

function HandlingEventsExample() {
  return (
    <div>
      <Toggle />
    </div>
  );
}

/*--------------------Conditional Rendering Example------------------------*/
type Props = {};
type State = {
  isLoggedIn: boolean;
  count: number;
};

class ConditionalRenderingExample extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    const { isLoggedIn, count } = this.state;

    // Rendering with "if" statements
    let loginStatus;
    if (isLoggedIn) {
      loginStatus = <p>Welcome back, user!</p>;
    } else {
      loginStatus = (
        <button onClick={() => this.setState({ isLoggedIn: true })}>
          Log In
        </button>
      );
    }

    // Conditional operator
    const message =
      count === 0
        ? 'You have not clicked the button yet.'
        : `You clicked the button ${count} times.`;

    // Logical && operator
    const greeting = isLoggedIn && <p>Hello, user!</p>;

    // Preventing component from rendering
    const renderComponent =
      count % 2 === 0 ? (
        <div>Component will not render when count is odd.</div>
      ) : null;

    return (
      <div className="conditional-rendering-example">
        {loginStatus}
        {greeting}
        <p>{message}</p>
        <button onClick={this.handleClick}>Click me!</button>
        {renderComponent}
      </div>
    );
  }
}

/*--------------------Lists and Keys Example------------------------*/
interface StateOfList {
  items: { id: number; text: string }[];
  filter: string;
}

class ListsAndKeysExample extends React.Component<Props, StateOfList> {
  constructor(props: Props) {
    super(props);
    this.state = {
      items: [
        { id: 1, text: 'Learn JavaScript' },
        { id: 2, text: 'Learn TypeScript' },
        { id: 3, text: 'Learn React' },
      ],
      filter: '',
    };
  }

  render() {
    const filteredItems = this.state.items.filter((item) =>
      item.text.includes(this.state.filter)
    );

    return (
      <div className="lists-and-keys-example">
        <input onChange={this.handleFilterChange} />
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    );
  }

  handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ filter: event.target.value });
  };
}

/*--------------------Forms Example------------------------*/
type FormState = {
  value: string;
  textAreaValue: string;
  selectedOption: string;
  checkboxChecked: boolean;
};

type FormProps = {};

class Form extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      value: '',
      textAreaValue: '',
      selectedOption: 'option1',
      checkboxChecked: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  handleTextAreaChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ textAreaValue: event.target.value });
  }

  handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ selectedOption: event.target.value });
  }

  handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ checkboxChecked: event.target.checked });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    alert(
      `Value: ${this.state.value}, 
       TextArea Value: ${this.state.textAreaValue},
       Selected Option: ${this.state.selectedOption}, 
       Checkbox Checked: ${this.state.checkboxChecked}`
    );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="forms-example">
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Messages:
          <textarea
            value={this.state.textAreaValue}
            onChange={this.handleTextAreaChange}
          />
        </label>
        <br />
        <label>
          Pick your favorite flavor:
          <select
            value={this.state.selectedOption}
            onChange={this.handleSelectChange}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </label>
        <br />
        <label>
          Check me out:
          <input
            type="checkbox"
            checked={this.state.checkboxChecked}
            onChange={this.handleCheckboxChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function FormsExample() {
  return (
    <div>
      <Form />
    </div>
  );
}
export {
  ComponentsAndPropsExample,
  StateAndLifecycleExample,
  HandlingEventsExample,
  ConditionalRenderingExample,
  ListsAndKeysExample,
  FormsExample,
};
