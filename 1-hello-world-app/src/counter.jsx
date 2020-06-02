import React, { Component } from "react";

class Counter extends Component {
  // Maintaining a state that can be rendered
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
    //tags: []
  };

  // Not recommended
  // Optional way of binding the handleClick() to this, if arrow function is used for defining handleClick()
  constructor() {
    super();
    this.handleClick1 = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  // Applying Javascript styles
  styles = {
    fontSize: 50,
    fontWeight: "bold",
  };

  // The method that will render the output
  render() {
    return (
      // Using React.Fragement helps to render the page on the 'root' div
      <React.Fragment>
        {/* Image url passed as a state */}
        <img src={this.state.imageUrl} />
        {/* Bootstrap classes are referred as className in JSX files  */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        {/* Rendering a button */}
        <br></br>
        <button
          // Passing arguments to the handle events
          onClick={() => this.handleClickUp(this.state.count)}
          className="btn btn-primary btn-sm"
        >
          +
        </button>
        <br></br>
        <button
          onClick={this.handleClickDown}
          className="btn btn-primary btn-sm"
        >
          -
        </button>
        <ul>
          {/* Rendering a list of elements. You need to pass a unique key in the list */}
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {/* Rendering based on a condition */}
        {this.state.tags.length === 0 && "Please create a new Tag !"}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  // Since arrow function is used the state it refers to is the current object on which the handleClick() is called
  // Passing arguments to the handle events
  handleClickUp = (count) => {
    this.setState({ count: count + 1 });
  };
  handleClickDown = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // Render tags conditionally
  renderTags() {
    if (this.state.tags.length === 0)
      return <p> There are no tags to render</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
