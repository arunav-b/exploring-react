import React, { Component } from "react";

class Counter extends Component {
  // Maintaining a state that can be rendered
  // state = {
  //   value: value,
  // };

  // Applying Javascript styles
  styles = {
    fontSize: 25,
    fontWeight: "bold",
  };

  // The method that will render the output
  render() {
    const { onUp, onDelete, onDown } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
        </div>
        <div className="col">
          <button
            // Passing arguments to the handle events
            onClick={() => onUp(this.props.counter)}
            className="btn btn-secondary btn-lg m-2"
          >
            +
          </button>
          <button
            onClick={() => onDown(this.props.counter)}
            className="btn btn-secondary btn-lg m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => onDelete(this.props.counter.id)}
            className="btn btn-danger btn-lg ml-4"
          >
            Delete
          </button>
        </div>
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
