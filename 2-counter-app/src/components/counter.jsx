import React, { Component } from "react";

class Counter extends Component {
  // Maintaining a state that can be rendered
  // state = {
  //   value: this.props.value,
  // };

  // Applying Javascript styles
  styles = {
    fontSize: 25,
    fontWeight: "bold",
  };

  // The method that will render the output
  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          // Passing arguments to the handle events
          onClick={() => this.props.onUp(this.props.counter)}
          className="btn btn-primary btn-lg m-2"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDown(this.props.counter)}
          className="btn btn-primary btn-lg m-2"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-lg m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <h5>0</h5> : <h5>{value}</h5>;
  }
}

export default Counter;
