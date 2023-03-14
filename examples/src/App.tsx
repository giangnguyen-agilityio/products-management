import PropTypes from 'prop-types';
import React, {
  Component,
  ErrorInfo,
  FC,
  Fragment,
  Profiler,
  createRef,
  forwardRef,
  useCallback,
  useContext,
  useDebugValue,
  useDeferredValue,
  useEffect,
  useId,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  useTransition,
} from 'react';
import './App.css';
import ReactDOM from 'react-dom';

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

/*--------------------Lifting State Up Example------------------------*/
interface CalculatorProps {}
interface CalculatorState {
  temperature: number;
  scale: string;
}

interface CelsiusProps {
  temperature: number;
  onTemperatureChange: (temperature: number) => void;
}

interface FahrenheitProps {
  temperature: number;
  onTemperatureChange: (temperature: number) => void;
}

interface CelsiusState {
  temperature: number;
}

interface FahrenheitState {
  temperature: number;
}

class LiftingStateUpExample extends React.Component<
  CalculatorProps,
  CalculatorState
> {
  constructor(props: CalculatorProps) {
    super(props);
    this.state = {
      temperature: 0,
      scale: 'celsius',
    };
  }

  handleCelsiusChange = (temperature: number) => {
    this.setState({ scale: 'celsius', temperature });
  };

  handleFahrenheitChange = (temperature: number) => {
    this.setState({ scale: 'fahrenheit', temperature });
  };

  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === 'fahrenheit' ? toCelsius(temperature) : temperature;
    const fahrenheit =
      scale === 'celsius' ? toFahrenheit(temperature) : temperature;

    return (
      <div className="lifting-state-up-example">
        <Celsius
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <Fahrenheit
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
      </div>
    );
  }
}

class Celsius extends React.Component<CelsiusProps, CelsiusState> {
  constructor(props: CelsiusProps) {
    super(props);
    this.state = {
      temperature: props.temperature,
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onTemperatureChange(parseFloat(e.target.value));
  };

  render() {
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input value={this.props.temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Fahrenheit extends React.Component<FahrenheitProps, FahrenheitState> {
  constructor(props: FahrenheitProps) {
    super(props);
    this.state = {
      temperature: props.temperature,
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onTemperatureChange(parseFloat(e.target.value));
  };

  render() {
    return (
      <fieldset>
        <legend>Enter temperature in Fahrenheit:</legend>
        <input value={this.props.temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

function toCelsius(fahrenheit: number) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius: number) {
  return (celsius * 9) / 5 + 32;
}

/*--------------------Composition and Inheritance Example------------------------*/
interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

interface PageProps {
  title: string;
  content: string;
  buttonLabel: string;
  onButtonClick: () => void;
}

const CompositionExample: React.FC<PageProps> = ({
  title,
  content,
  buttonLabel,
  onButtonClick,
}) => {
  return (
    <div className="composition-example">
      <Card title={title} content={content} />
      <Button text={buttonLabel} onClick={onButtonClick} />
    </div>
  );
};

// Inheritance example
interface AnimalProps {
  name: string;
}

interface AnimalState {
  isHungry: boolean;
}

class Animal extends React.Component<AnimalProps, AnimalState> {
  constructor(props: AnimalProps) {
    super(props);
    this.state = {
      isHungry: true,
    };
  }

  eat = () => {
    this.setState({
      isHungry: false,
    });
  };

  render() {
    const { name } = this.props;
    const { isHungry } = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <p>{isHungry ? 'Hungry' : 'Full'}</p>
        <button onClick={this.eat}>Eat</button>
      </div>
    );
  }
}

interface CatProps extends AnimalProps {}

class Cat extends Animal {
  meow = () => {
    alert('Meow!');
  };

  render() {
    return (
      <div className="inheritance-example">
        {super.render()}
        <br />
        <button onClick={this.meow}>Meow</button>
      </div>
    );
  }
}

const InheritanceExample: React.FC = () => {
  return <Cat name="Benjamin" />;
};

/*--------------------ADVANCED GUIDES------------------------*/
/*--------------------Accessibility------------------------*/
// Keyboard navigation
function handleKeyPress(event: React.KeyboardEvent<HTMLButtonElement>) {
  if (event.key === 'Enter') {
    alert('You pressed Enter!');
  }
}

function KeyboardNavigationExample() {
  return (
    <div className="keyboard-navigation-example">
      <button
        onClick={() => {
          alert('You are clicking');
        }}
      >
        Click me
      </button>
      <br />
      <br />
      <button onKeyPress={handleKeyPress}>Press enter</button>
    </div>
  );
}
//Focus management
interface AppState {
  showModal: boolean;
}

class FocusManagementExample extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleButtonClick(): void {
    this.setState({ showModal: true });
  }

  handleCloseModal(): void {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="focus-management-example">
        <button onClick={this.handleButtonClick}>Show modal</button>
        {this.state.showModal && (
          <div role="dialog">
            <button onClick={this.handleCloseModal}>Close modal</button>
            <input type="text" />
          </div>
        )}
      </div>
    );
  }
}

/*--------------------Context------------------------*/
// Define a new context
interface ThemeContextProps {
  background: string;
  color: string;
}

const ThemeContext = React.createContext<ThemeContextProps>({
  background: 'white',
  color: 'black',
});

// Create a provider component
interface ThemeProviderProps {
  value: ThemeContextProps;
  children?: React.ReactNode;
}

class ThemeProvider extends Component<ThemeProviderProps> {
  render() {
    return (
      <ThemeContext.Provider value={this.props.value}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

// Create a consumer component
interface ThemeConsumerProps {
  children: (theme: ThemeContextProps) => React.ReactNode;
}

class ThemeConsumer extends Component<ThemeConsumerProps> {
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => this.props.children(theme)}
      </ThemeContext.Consumer>
    );
  }
}

// Example usage
const ContextExample = () => {
  return (
    <ThemeProvider value={{ background: 'black', color: 'white' }}>
      <div className="context-example">
        <h1>Hello, world!</h1>
        <ThemeConsumer>
          {(theme) => (
            <p style={{ background: theme.background, color: theme.color }}>
              This text has a {theme.background} background and {theme.color}{' '}
              text.
            </p>
          )}
        </ThemeConsumer>
      </div>
    </ThemeProvider>
  );
};

/*--------------------Error Boundaries------------------------*/
//How to use Error Boundaries in React
interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the error to an error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function ErrorBoundaryExample() {
  return (
    <div className="error-boundary-example">
      <h1>My App</h1>
      <ErrorBoundary>
        <BrokenComponent />
      </ErrorBoundary>
    </div>
  );
}

class BrokenComponent extends Component {
  render() {
    return <h1>Something went wrong</h1>;
  }
}
/*--------------------Forwarding Refs------------------------*/
interface ChildProps {
  value: string;
  ref?: React.RefObject<HTMLDivElement>;
}

// We define ChildComponent as a function component that takes a ref as its second argument.
const ChildComponent = React.forwardRef<HTMLDivElement, ChildProps>(
  (props, ref) => {
    return (
      <div ref={ref} className="forwarding-refs-example">
        {props.value}
      </div>
    );
  }
);

interface ParentProps {
  children: React.ReactNode;
}

// We define ParentComponent as a class component that renders its children and passes a ref down to the first child.
class ParentComponent extends React.Component<ParentProps> {
  private ref = React.createRef<HTMLDivElement>();

  componentDidMount() {
    // Access the child component's instance using the ref.
    console.log(this.ref.current);
  }

  render() {
    const { children } = this.props;
    // Pass the ref down to the first child.
    const child = React.Children.only(
      children
    ) as React.ReactElement<ChildProps>;
    return React.cloneElement(child, { ref: this.ref });
  }
}

// We can then use ParentComponent to render ChildComponent and pass a ref down to it.
function ForwardingRefs() {
  return (
    <ParentComponent>
      <ChildComponent value="Hello, world!" />
    </ParentComponent>
  );
}
/*--------------------Fragments------------------------*/
function FragmentsExample() {
  return (
    <>
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </>
  );
}

//Keyed Fragments
function KeyedFragmentsExample({
  items,
}: {
  items: Array<{ id: number; text: string }>;
}) {
  return (
    <>
      {items.map((item) => (
        <Fragment key={item.id}>
          <h2>{item.id}</h2>
          <p>{item.text}</p>
        </Fragment>
      ))}
    </>
  );
}
/*--------------------JSX In Depth------------------------*/
//Embedding Expressions in JSX
function EmbeddingExpressionsInJSX() {
  const name = 'Giang';
  return <div>Hello, {name}!</div>;
}

//Props in JSX
interface GreetingProps {
  name: string;
}

function GreetingExample(props: GreetingProps) {
  return <div>Hello, {props.name}!</div>;
}

function PropsInJSX() {
  return <GreetingExample name="Giang" />;
}

//Children in JSX
function List(props: { children: React.ReactNode }) {
  return <ul>{props.children}</ul>;
}

function Item(props: { children: React.ReactNode }) {
  return <li>{props.children}</li>;
}

function ChildrenInJSX() {
  return (
    <List>
      <Item>Apples</Item>
      <Item>Bananas</Item>
      <Item>Cherries</Item>
    </List>
  );
}

//JSX Prevents Injection Attacks
function JSXPreventsInjectionAttacks() {
  const name = '<script>alert("gotcha!");</script>';
  return <div>Hello, {name}!</div>; // Will display "<script>alert("gotcha!");</script>" as plain text
}

/*--------------------Portals------------------------*/
// Define a portal container
const portalContainer = document.createElement('div');
document.body.appendChild(portalContainer);

// Define a child component to be rendered in the portal
const ChildComponentPortalsExample = () => {
  return (
    <div className="portals-example">
      This is a child component rendered in a portal!
    </div>
  );
};

// Define a parent component that renders the child component in a portal
class ParentComponentPortalsExample extends React.Component {
  render() {
    return (
      <div className="portals-example">
        <h1>This is the parent component</h1>
        {ReactDOM.createPortal(
          <ChildComponentPortalsExample />,
          portalContainer
        )}
      </div>
    );
  }
}

/*--------------------Profiler------------------------*/
function ProfilerExample() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="profiler-example">
      <h1>Counter App</h1>
      <button onClick={handleClick}>Click me</button>
      <p>Count: {count}</p>
    </div>
  );
}

function onRenderCallback(
  id: string,
  phase: 'mount' | 'update',
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number,
  interactions: any
) {
  console.log({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions,
  });
}

function ProfilerExampleContainer() {
  return (
    <Profiler id="Counter" onRender={onRenderCallback}>
      <ProfilerExample />
    </Profiler>
  );
}

/*--------------------React without ES6------------------------*/
interface PropsReactWithoutES6Example {
  name: string;
}

interface StateReactWithoutES6Example {
  count: number;
}

class ReactWithoutES6Example extends React.Component<
  PropsReactWithoutES6Example,
  StateReactWithoutES6Example
> {
  constructor(props: PropsReactWithoutES6Example) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div className="react-without-es6-example">
        <h1>Hello, {this.props.name}!</h1>
        <p>You clicked the button {this.state.count} times.</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

/*--------------------React without JSX --------------------*/
const ReactWithoutJSXExample = () => {
  const greeting = React.createElement('h1', null, 'Hello, world!');
  const message = React.createElement(
    'p',
    null,
    'This is a React component created without JSX.'
  );

  return React.createElement('div', null, greeting, message);
};

/*--------------------Refs and the DOM------------------------*/
class RefsAndTheDomExample extends Component {
  private inputRef = createRef<HTMLInputElement>();

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(this.inputRef.current?.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="refs-and-dom-example">
        <label>
          Name:
          <input type="text" ref={this.inputRef} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

/*--------------------Render Props------------------------*/
type PropsOfRenderPropsExample = {
  render: (data: string) => React.ReactNode;
};

class RenderPropComponent extends Component<PropsOfRenderPropsExample> {
  state = {
    data: 'This is the data of the Render Props Example!',
  };

  render() {
    const { render } = this.props;
    const { data } = this.state;

    return <div>{render(data)}</div>;
  }
}

const RenderPropsExample = () => {
  return (
    <div className="render-props-example">
      <h1>Hello Giang. This is the Render Props Example</h1>
      <RenderPropComponent render={(data) => <p>{data}</p>} />
    </div>
  );
};

/*--------------------Typechecking with PropTypes------------------------*/
interface PropsOfPropTypesExample {
  name: string;
  age: number;
}

const TypecheckingWithPropTypesExample: FC<PropsOfPropTypesExample> = ({
  name,
  age,
}) => (
  <div className="typechecking-with-proptypes-example">
    <p>Full Name: {name}</p>
    <p>Age: {age}</p>
  </div>
);

TypecheckingWithPropTypesExample.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

/*--------------------Uncontrolled Components------------------------*/
function UncontrolledComponentsExample() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Input value: ${inputRef.current?.value}`);
  };

  return (
    <form onSubmit={handleSubmit} className="uncontrolled-components-example">
      <label>
        Name:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

/*--------------------Hook API Reference------------------------*/
// useState Hook
const UseStateHookExample = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="useState-hook-example">
      <h1>This is useState hook example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

// useEffect Hook
const UseEffectHookExample = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="useEffect-hook-example">
      <h1>This is the useEffect hook example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

// useContext Hook
interface UserContext {
  name: string;
  email: string;
  logout: () => void;
}

const user = {
  name: 'Giang Nguyen Truong',
  email: 'giang.nguyen@asnet.com.vn',
  logout: () => {
    console.log('Logged out');
  },
};

const UserContext = React.createContext<UserContext>(user);

const Profile: React.FC = () => {
  const { name, email } = useContext<UserContext>(UserContext);

  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

const Navigation: React.FC = () => {
  const { logout } = useContext<UserContext>(UserContext);

  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const UseContextHookExample: React.FC = () => {
  return (
    <div className="useContext-hook-example">
      <UserContext.Provider value={user}>
        <Profile />
        <Navigation />
      </UserContext.Provider>
    </div>
  );
};

//useReducer Hook
interface StateOfUseReducerHookExample {
  count: number;
}

interface Action {
  type: string;
}

function reducer(
  state: StateOfUseReducerHookExample,
  action: Action
): StateOfUseReducerHookExample {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const UseReducerHookExample = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="useReducer-hook-example">
      <h1>This is useReducer Hook Example</h1>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

// useCallback Hook
const UseCallbackHookExample: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  return (
    <div className="useCallback-hook-example">
      <h1>This is the useCallback Hook Example</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// useMemo Hook
interface PropsUseMemoHookExample {
  books: Array<string>;
}

const UseMemoHookExample: React.FC<PropsUseMemoHookExample> = ({ books }) => {
  const expensiveOperation = useMemo(() => {
    return books.map((book) => book.toUpperCase());
  }, [books]);

  return <div className="useMemo-hook-example">{expensiveOperation}</div>;
};

// useRef Hook
interface PropsUseRefHookExample {}

const UseRefHookExample: React.FC<PropsUseRefHookExample> = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="useRef-hook-example">
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus input</button>
    </div>
  );
};

// useImperativeHandle Hook
interface PropsUseImperativeHandleHookExample {
  initialCount: number;
}

export interface CounterRef {
  increment: () => void;
  decrement: () => void;
}

const UseImperativeHandleHookExample = forwardRef<
  CounterRef,
  PropsUseImperativeHandleHookExample
>((props, ref) => {
  const [count, setCount] = useState(props.initialCount);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);

  useImperativeHandle(ref, () => ({ increment, decrement }));

  return (
    <div className="useImperativeHandle-hook-example">
      <h1>This is useImperativeHandle Hook Example</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
});

// useLayoutEffect Hook
interface PropsUseLayoutEffectHookExample {}

const UseLayoutEffectHookExample: React.FC<
  PropsUseLayoutEffectHookExample
> = () => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    console.log(ref.current?.getBoundingClientRect());
  });

  return (
    <div className="useLayoutEffect-hook-example" ref={ref}>
      Hello, Nguyen Truong Giang!
    </div>
  );
};

// useDebugValue Hook
interface PropsUseDebugValueHookExample {}

const useCounter = () => {
  const [count, setCount] = useState(0);
  useDebugValue(count > 10 ? 'Greater than 10' : 'Less than or equal to 10');
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  return { count, increment, decrement };
};

const UseDebugValueHookExample: React.FC<Props> = () => {
  const { count, increment, decrement } = useCounter();
  return (
    <div className="useDebugValue-hook-example">
      <span>The current number is: {count}</span>
      <br />
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

// useDeferredValue Hook
interface PropsUseDeferredValueHookExample {}

const UseDeferredValueHookExample: React.FC<
  PropsUseDeferredValueHookExample
> = () => {
  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const deferredValue = useDeferredValue(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setValue(inputValue);
  };

  return (
    <div className="useDeferredValue-hook-example">
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
      <div>Deferred value: {deferredValue}</div>
    </div>
  );
};

// useTransition Hook
interface PropsUseTransitionHookExample {}

const UseTransitionHookExample: React.FC<
  PropsUseTransitionHookExample
> = () => {
  const [value, setValue] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      setValue('New Value');
    });
  };

  return (
    <div className="useTransition-hook-example">
      <button onClick={handleClick}>Update Value</button>
      {isPending ? <p>Loading...</p> : <p>Value: {value}</p>}
    </div>
  );
};

// useId Hook
interface PropsUseIdHookExample {}

const UseIdHookExample: React.FC<PropsUseIdHookExample> = () => {
  const inputId = useId();
  const email = useId();

  return (
    <div className="useId-hook-example">
      <div>
        <label htmlFor={inputId}>Input: </label>
        <input type="text" id={inputId} />
      </div>
      <br />
      <div>
        <label htmlFor={email}>Email: </label>
        <input type="text" id={email} />
      </div>
    </div>
  );
};

export {
  ComponentsAndPropsExample,
  StateAndLifecycleExample,
  HandlingEventsExample,
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
  ParentComponentPortalsExample,
  ProfilerExampleContainer,
  ReactWithoutES6Example,
  ReactWithoutJSXExample,
  RefsAndTheDomExample,
  RenderPropsExample,
  TypecheckingWithPropTypesExample,
  UncontrolledComponentsExample,
  UseStateHookExample,
  UseEffectHookExample,
  UseReducerHookExample,
  UseContextHookExample,
  UseCallbackHookExample,
  UseMemoHookExample,
  UseRefHookExample,
  UseImperativeHandleHookExample,
  UseLayoutEffectHookExample,
  UseDebugValueHookExample,
  UseDeferredValueHookExample,
  UseTransitionHookExample,
  UseIdHookExample,
};
