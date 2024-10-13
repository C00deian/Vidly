import React, { Component } from "react";
import Joi from "joi";
import Form from "../../common/Form";
import { login } from "../../services/authServices";
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
      const { data: jwt } = await login(data.username, data.password);
      localStorage.setItem("token", jwt);

      // Call the onLogin prop to update the user state in the parent
      this.props.onLogin(jwt); // Correctly call this.props.onLogin

      this.props.navigate("/"); // Redirect after successful login
    } catch (ex) {
      // Ensure errors object is initialized
      const errors = { ...this.state.errors }; // Clone current errors state
      if (ex.response) {
        if (ex.response.status === 400) {
          // Assuming the server returns an error message for each field
          for (const key in ex.response.data) {
            errors[key] = ex.response.data[key];
          }
          this.setState({ errors });
        } else if (ex.response.status === 404) {
          errors.username = "User already registered."; // Set custom error message
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
const LoginFormWrapper = ({ onLogin }) => {
  const navigate = useNavigate();
  return <LoginForm navigate={navigate} onLogin={onLogin} />;
};

export default LoginFormWrapper;
