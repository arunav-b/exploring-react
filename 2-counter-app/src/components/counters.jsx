import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-lg m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onUp={this.props.onUp}
            onDown={this.props.onDown}
            onDelete={this.props.onDelete}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
