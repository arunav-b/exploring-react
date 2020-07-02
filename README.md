# Exploring ReactJS

> This README is split as -
>
> 1. Learning React
> 2. Building projects

<br/>

# Learning React

<br/>

## 1. Getting Started

- In the below example a simple hello-react app is built using React. We can get started with a simple .html file. A few `<script>` tags are added in the `<head>` section to import the necessary packages to run the React app -
  - React library to run the app as a React app
  - React-dom library to update and manage the DOM
  - Babel is used here to transpile the React code to plain JS code
- The react code is written inside another `<script>` tag inside `<body>`

  ```
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>React - Getting Started</title>
            <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
            <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
            <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
        </head>
        <body>
            <script type="text/babel">
                ReactDOM.render(<h1>Hello React !</h1>, document.body);
            </script>
        </body>
    </html>
  ```

- Inside the `ReactDOM.render()` method we need to specify 2 things - the first parameter is the **_WHAT_**, i.e., what React element needs to be rendered and the second parameter is the **_WHERE_**, where in the browser DOM the React element needs to be rendered.
- React maintains this virtual DOM that compares the browser DOM and the Virtual DOM and renders only the items that are changed in the DOM.

<br/>

## 2. Components

### 2A. Building the first `Component`

- **Component** : React `Component`s are basically JavaScript classes that takes in inputs, i.e. properties (props) and returns a React element, that defines how a particular section in the UI will look like. In the below example we see how a `Component` is built -

  ```
    ...
    <body>
        <script type="text/babel">
            class HelloWorld extends React.Component {
                render() {
                    return <h1>Hello React </h1>;
                }
            }
            ReactDOM.render(<HelloWorld />, document.body);
        </script>
    </body>
    ...
  ```

### 2B. Passing `props` to a `Component`

- One thing React does is that it reduces the redundancy of rendering similarly styled elements by abstracting the same type of elements in Components.
- Different values can be passed to the same `Component` using Properties (`props`) to render different values or styles.
- Using the `this.props.propertyName`, the React `Component` can accept `props` as a JSX expression enclosed in {}. React evaluates the expression inside {} as JavaScript and anything outside it as XML. Hence the name JSX (JavaScript + XML).
- The `render()` method in React Component outputs the JSX. Let's take a look at how all of it works -

  ```
    ...
    <body>
        <script type="text/babel">
            class HelloWorld extends React.Component {
                render() {
                    return <h1>Hello {this.props.greet} !</h1>;
                }
            }
            ReactDOM.render(
                <div>
                <HelloWorld greet="Batman"/>
                <HelloWorld greet="Superman"/>
                <HelloWorld greet="Ironman"/>
                </div>,
            document.body);
        </script>
    </body>
    ...
  ```

### 2C. Passing `children` to a `Component`

- A React Component can accept any data passed via children using `this.props.children`

  ```
    ...
    <body>
        <script type="text/babel">
            ...
            class MyButton extends React.Component {
            render() {
                return (
                    <div>
                        <button type={this.props.behavior}>{this.props.children}</button>
                    </div>
                );
            }
            }
            ReactDOM.render(
            <div>
                ...
                <MyButton behavior="submit">Welcome Super Heroes !</MyButton>
            </div>,
            document.body
            );
        </script>
    </body>
    ...
  ```

<br/>

## 3. Basic Styling

- Basic styling in React apps can be done by defining styles under the `<style>` tag.
- Styling can also be done by specifying the `style` property inside a JSX element. Properties can be specified in a JavaScript style variable and the same can be passed as a JSX expression in the `style` property. The JS style variable can also refer to `this.props`

  ```
    ...
    <head>
        ...
        <style>
            #container {
                padding: 50px;
                font-family: sans-serif;
                background-color: #ffffff;
                text-align: center;
            }
        </style>
    </head>
    ...
    <body>
        <div id="container">
            <script type="text/babel">
            class Letter extends React.Component {
                render() {
                    const letterStyle = {
                        padding: 10,
                        margin: 10,
                        backgroundColor: this.props.bgColor,
                        ...
                    };
                    return <div style={letterStyle}>{this.props.children}</div>;
                }
            }
            ReactDOM.render(
                <div>
                <Letter bgColor="#58b3ff">A</Letter>
                <Letter bgColor="#ff605f">E</Letter>
                ...
                </div>,
                document.querySelector("#container")
            );
            </script>
        </div>
    </body>
    ...
  ```

<br/>

## 4. Composing Components

- We can build Components in React that uses multiple other Components.
- The general rule is that our components should do just one thing.

  ```
    ...
    class Square extends React.Component {
        render() {
            var squareStyle = {
                ...
            };
            return (
                <div style={squareStyle}>
                <br />
                </div>
            );
        }
    }
    class Label extends React.Component {
        render() {
            var labelStyle = {
                ...
            };
            return (
                <div>
                <p style={labelStyle}>{this.props.color}</p>
                </div>
            );
        }
    }
    class Card extends React.Component {
        render() {
            var cardStyle = {
                ...
            };
            return (
                <div style={cardStyle}>
                <Square color={this.props.color} />
                <Label color={this.props.color} />
                </div>
            );
        }
    }
    ReactDOM.render(
        <div>
            <Card color="#FF6663" />
        </div>,
        document.querySelector("#container")
    );
    ...
  ```

<br/>

## 5. Transferring Props using ES6 Spread (...) operator

- Using the ES6 Spread Operator multiple properties can be passed between components

  ```
    ...
    class Display extends React.Component {
        render() {
        return (
            <div>
                <p>{this.props.color}</p>
                <p>{this.props.num}</p>
                ...
            </div>
        );
        }
    }
    class Label extends React.Component {
        render() {
            return <Display {...this.props} />;
        }
    }
    class Shirt extends React.Component {
        render() {
            return (
                <div>
                    <Label {...this.props} />
                </div>
            );
        }
    }
    ReactDOM.render(
        <div>
            <Shirt
                availability="true"
                color="steelblue"
                num="3.14"
                size="medium"
            />
        </div>,
        document.querySelector("#container")
    );
    ...
  ```

<br/>

> ### **Some Key Things about JSX** -
>
> 1. Evaluating Expressions: JSX is treated like JavaScript and has to be wrapped in {}
> 2. Returning Multiple Elements: Use React.Fragment
> 3. No Inline CSS is allowed
> 4. Can't use reserved JavaScript keywords
> 5. Comments should be defined in {} in JSX expressions -> /_ Comments will be written here _/
> 6. HTML elements should be lower-case and React components should be upper-case
> 7. Your JSX Can Be Anywhere

<br/>

## 6. React Lifecycle Methods

- Lifecycle methods are special methods that automatically get called as our component achieves certain milestones.
- A React Component has 3 phases -
  1. Mounting : The phase where a component attaches itself to the browser DOM.
  2. Updating : The phase where the component updates because of new props or state changes.
  3. Unmounting : This phase kicks in when a component is about to be destroyed.
- In each of these phases a lifecycle method is triggered. The below diagram shows some of the important lifecycle methods that are triggered as a part of the lifecycle of a React component.

<img src="./images/lifecycle.png" width="60%">.

## 7. Dealing with State:

- React components has a built-in `state` object. The state object is where property values of the component is stored.
- When the state object changes, the component re-renders.
- In the below example, the `setState()` method is invoked whenever the `setInterval()` method is called after a fixed interval of time. The `setState()` method modifies the state object which causes React to re-render the Component.

  ```
  class AutoCounter extends React.Component {
      state = {
          count: 0,
      };
      componentDidMount() {
          setInterval(this.timerTick, 1000);
      }
      timerTick = () => {
          this.setState((prevState) => {
          return { count: prevState.count + 100 };
          });
      };
      render() {
          return <h1>{this.state.count}</h1>;
      }
  }
  class CounterDisplay extends React.Component {
      render() {
          return (
              <div>
                  <AutoCounter />
              </div>
          );
      }
  }
  ReactDOM.render(
      <CounterDisplay />,
      document.querySelector("#container")
  );
  ```

  > **Note** :
  >
  > - The `timerTick()` is an arrow function because it uses the `this` context from the `this` of `componentDidMount()`. This is because arrow functions use lexical scoping. Hence arrow function looks for the context of `this` in its calling function as `this` is undefined in timerTick().
  >
  > - Alternatively, the timerTick() function can be bound to the Component using the `bind()` method before calling the `setInterval()` method or preferrably inside the `constructor`.
  >
  >   ```
  >     componentDidMount() {
  >         this.timerTick = this.timerTick.bind(this);
  >         setInterval(this.timerTick, 1000);
  >     }
  >   ```
  >
  >   Or,
  >
  >   ```
  >     constructor() {
  >         super();
  >         this.state = {
  >             count: 0
  >         };
  >         this.timerTick = this.timerTick.bind(this);
  >     }
  >
  >   ```

<br/>

- ### **Props vs State**

  - `props` and `state` are both **plain JavaScript objects**. While both hold information that influences the output of render, they are different in one important way: `props` get passed to the component (similar to function parameters) whereas `state` is managed within the component (similar to variables declared within a function).

  - [Additional Reference](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md)

<br/>

## 8. Rendering Lists:

<br/>

## 9. Conditional Rendering:

<br/>

## 10. Accessing DOM elements in React:

<br/>

## 11. Events in React:

<br/>

## 12. Using the `create-react-app`:

<br/>

## 13. Forms:

<br/>

## 14. Lifting the State up:

<br/>

## 15. Stateless Functional Components:

<br/>

## 16. Try Implementing -

- Pagination
- Searching
- Sorting
- Filtering
- Forms using Formik/Joi

<br/>

## 17. React Router

- Switch & Link
- Route Props
- Route Params - Optional & Query
- Redirects
- Programmatic Navigation
- Nested Routing

<br/>

## 18. Calling Backend Services

- Using `axios`

<br/>

## 19. Some Advanced Concepts

- Context
- Higher Order Components
- Render Props
- Refs
- Error Boundaries
- Portals

<br/>

## 20. React Hooks

- useState
- useEffect
- useContext
- useReducer
- useRef
- useMemo
- useCallback
- Custom Hooks

<br/>
<br/>

# Projects

> Learn &amp; explore React.js by building small projects. List of projects currently I am working on -
>
> 1. **hello-world** : Basic React JS app rendering a HTML tag
> 2. **counter-app** : A counter app exploring react components, state & props
> 3. **vidly-app** : A basic video library application
> 4. **to-do-app** : A basic To-Do application

<br/>
<br/>

# References

- [React JS Documentation](https://reactjs.org/docs/getting-started.html)
- [React for Beginners](https://www.kirupa.com/react/index.htm)
- [Mastering React with Mosh](https://codewithmosh.com/p/mastering-react)
