import React, { Component } from "react";
import Joi from "joi";
import Form from "../../common/Form";

export default class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = Joi.object({
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required()
      .label("Username"),

    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .label("Password"),
  });

  doSubmit = () => {
    //call the server
    console.log("submited");
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    //   [name]: to set property dynamically
    const { error } = this.schema.extract(name).validate(obj);
    return error ? error.details[0].message : null;
  };

  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password" , 'password')}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}
