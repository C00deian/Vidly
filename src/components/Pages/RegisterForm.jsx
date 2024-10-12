import React from "react";
import Joi from "joi";
import Form from "../../common/Form";
import { toast } from "react-toastify";
import * as userService from '../../services/userService'
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
      // .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .min(5)
      .label("Password"),

    name: Joi.string().required().label("Name"),
  });
  doSubmit = async () => {
    try {
      await userService.register(this.state.data);
      toast.success("Registration successful!");
      // Redirect or reset form here
    } catch (ex) {
      if (ex.response) {
        if (ex.response.status === 404) {
          // Display the toast notification for the user already registered
          toast.error("User already registered.");
        } else {
          // Handle other errors
          toast.error("An unexpected error occurred.");
        }
      } else {
        toast.error("Network error: Unable to connect to the server.");
      }
    }
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
