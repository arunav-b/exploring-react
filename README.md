# Exploring ReactJS

> This README is split as -
>
> 1. Learning React
> 2. Topics covered by Mosh
> 3. Building projects

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
    <script type="text/babel">
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
    </script>
    ...
  ```

<br/>

## 5. Transferring Props

<br/>
<br/>

# Topics Covered from Mosh's course:

### Components:

- Introducing JSX
- Rendering classes & lists
- Handling events
- Updating the state

### Composing Components:

- Passing data to components
- Props vs State
- Lifting the state up
- Stateless functional components

### Lifecycle Hooks:

- Mounting phase
- Updating phase
- Unmounting phase

### Pagination:

- Displaying pages
- Handling page changes
- Paginating data

### Filtering:

- Handling Selection
- Implement filtering

### Sorting:

- Raising the sort event
- Implement sorting

### Routing:

- Introduction
- Switch
- Link
- Route Props
- Route Params
- Optional Params
- Query Params
- Redirects
- Programmatic Navigation
- Nested Routing

### Forms:

- Handling form submission
- Refs
- Controlled elements
- Handling multiple inputs
- Validation using Joi
- Implement Searching

### Calling Backend services:

- jsonplaceholder.com
- http GET, POST rest calls using axios
- Optimistic vs Pessimistic updates
- Error handling
- Displaying errors
- Logging errors

### Authentication & Authorization:

- Submitting a form
- Handling errors
- Storing JWT
- Displaying current user in Navbar
- Calling protected API endpoints
- Authorization
- Protecting routes
- Redirect after login

### Deployment:

- In Heroku

### Higher Order Components:

- Implement HO components

### Hooks:

- useState
- useEffect
- Custom Hooks

### Context:

- In class components
- In Functional components
- Updating the context
- Consuming multiple contexts

<br/>
<br/>

# Projects

> Learn &amp; explore React.js by building small projects. List of projects currently I am working on -
>
> 1. **hello-world** : Basic React JS app rendering a HTML tag
> 2. **counter-app** : A counter app exploring react components, state & props
> 3. **vidly-app** : A basic video library application
> 4. **to-do-app** : A basic To-Do application
