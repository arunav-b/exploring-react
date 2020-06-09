import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  // Ref:
  // Getting a value using `Ref`. The corresponding ref needs to be referenced in the specific DOM element using ref={}
  // Not recommended when the same can be replaced by state properties
  // username = React.createRef();

  // Null or undefined cannot be used for controlled elements. Hence initializing username and password with ""
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  // Defining the schema for Joi to validate the state properties. Note it has the same name as the state properties
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    // Call server
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
