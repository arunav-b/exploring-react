import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  // This method will validate the whole form when the Submit button is pressed
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    // If no error found then return null
    if (!error) return null;
    // If there are errors, iterate through Joi error.details and map the message into errors{} object. The first element of the `path` property for each of error.details.item refers to the target property
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  // This method will validate the property of the element for which the event is triggered
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value }; // This is using the ES6 Computed property. Essentially this boils down to >> let obj = {}; obj[name] = value
    const schema = { [name]: this.schema[name] }; // Getting the corresponding property from the schema object
    const { error } = Joi.validate(obj, schema);
    if (!error) return null;
    return error.details[0].message;
  };

  // This method will be triggered when the form submit button is pressed
  handleSubmit = (event) => {
    event.preventDefault(); // This prevents the automatic re-loading of the form
    const errors = this.validate();
    this.setState({ errors: errors || {} }); // If errors object is null, then setting the errors state to {}
    if (errors) return;
    this.doSubmit();
  };

  // This method will be triggered whenever the onChange/onBlur event is triggered
  handleChange = ({ currentTarget: input }) => {
    // error{} processing
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    // data processing
    const data = { ...this.state.data };
    data[input.name] = input.value;
    // updating the state with both data and errors
    this.setState({ data, errors });
  };

  renderButton = (label) => {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  };

  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        onBlur={this.handleChange}
        error={errors[name]}
        type={type}
      />
    );
  };

  renderSelect = (name, label, options) => {
    const { data, errors } = this.state;
    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };
}

export default Form;
