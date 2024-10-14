import React, { Component } from "react";
import Joi from "joi";
import Form from "../../common/Form";
import  auth  from "../../services/authServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = Joi.object({
    username: Joi.string().min(3).required().label("Username"),
    password: Joi.string().label("Password"),
  });

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);
      window.location = '/';
    } catch (ex) {

      const errors = { ...this.state.errors }; 
      if (ex.response) {
        if (ex.response.status === 400) {
       
          for (const key in ex.response.data) {
            errors[key] = ex.response.data[key];
          }
          this.setState({ errors });
        } else if (ex.response.status === 404) {
          errors.username = "User already registered."; 
          this.setState({ errors });
        } else {
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

// Wrapper functional component
const LoginFormWrapper = () => {
  const navigate = useNavigate();
  return <LoginForm navigate={navigate}/>;
};

export default LoginFormWrapper;
