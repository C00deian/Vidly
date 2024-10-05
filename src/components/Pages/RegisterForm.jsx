import React from "react";
import Joi from "joi";
import Form from "../../common/Form";

export default class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: "",
    },
    errors: {},
  };

  schema = Joi.object({
    username: Joi.string().min(3).email({tlds:false}).required().label("Username"),

    password: Joi.string()
      .required()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .min(5)
      .label("Password"),

    name: Joi.string().required().label("Name"),
  });

  doSubmit = () => {
    //call the server
    console.log("submited Register");
    };
    
 
  render() {
    return (
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}
