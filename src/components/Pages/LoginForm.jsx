import React, { Component } from "react";
import Joi from "joi";
import Form from "../../common/Form";
import { login } from "../../services/authServices";

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
     
      .min(3)
      .max(30)
      .required()
      .label("Username"),

    password: Joi.string()
      // .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .label("Password"),
  });

  doSubmit = async() => {
    //call the server
    const { data } = this.state;
   await  login(data.username, data.password)
    console.log("submited");
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
