import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";

class LoginForm extends Component {
  // Getting the value using `Ref`. The ref needs to be referenced in the specific DOM element using ref={}
  // Not recommended when the same can be replaced by state properties
  // username = React.createRef();

  // Null or undefined cannot be used for controlled elements. Hence initializing username and password with ""
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  // Defining the schema for Joi to validate the state properties. Note it has the same name as the state properties
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  // This method will validate the whole form when the Submit button is pressed
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);
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

  handleSubmit = (event) => {
    event.preventDefault(); // This prevents the automatic re-loading of the form
    const errors = this.validate();
    this.setState({ errors: errors || {} }); // If errors object is null, then setting the errors state to {}
    if (errors) return;

    // Call server
    console.log("Submitted");
  };

  handleChange = ({ target: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name={"username"}
            label={"Username"}
            value={account.username}
            onChange={this.handleChange}
            onBlur={this.handleChange}
            error={errors.username}
          />
          <Input
            name={"password"}
            label={"Password"}
            value={account.password}
            onChange={this.handleChange}
            onBlur={this.handleChange}
            error={errors.password}
            type={"password"}
          />
          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
