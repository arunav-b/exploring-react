import React, { Component } from "react";

class Form extends Component {
  initialState = {
    name2: "",
    job: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log("event.target: ", event.target);
    console.log("event.currentTarget: ", event.currentTarget);
    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  state = this.initialState;
  render() {
    const { name2, job } = this.state;

    return (
      <form>
        <label htmlFor="name3">Name</label>
        <input
          type="text"
          name="name2"
          id="name3"
          value={name2}
          onChange={this.handleChange}
        />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange}
        />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
