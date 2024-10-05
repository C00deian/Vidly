import React, { Component } from "react";
import Input from "../../common/Input";
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
    const { data, errors } = this.state;

    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={data.username}
            onChange={this.handleChange}
            label="Username"
            error={errors.username}
          />

          <Input
            name="password"
            value={data.password}
            onChange={this.handleChange}
            label="Password"
            error={errors.password}
          />

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
