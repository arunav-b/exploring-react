import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
  state = {
    items: [],
  };

  addItem = (e) => {
    if (this._inputElement.value !== "") {
      const newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };
      this.setState({ items: this.state.items.concat(newItem) });
    }
    this._inputElement.value = "";
    console.log(this.state.items);
    e.preventDefault();
  };

  handleDelete = (key) => {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({ items: filteredItems });
  };

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              ref={(a) => (this._inputElement = a)}
              placeholder="enter task"
            ></input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.handleDelete} />
      </div>
    );
  }
}

export default TodoList;
