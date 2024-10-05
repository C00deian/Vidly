import React, { Component } from "react";
import Input from "../../common/Input";

export default class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };
  handleSubmit = (e) => {
    e.preventDefault();
     
      const errors = this.validate();
      console.log(errors) ;
      this.setState({ errors });
      if (errors) return;

      console.log('Submitted');

  };

  validate = () => {
    const errors = {};
const { account}  = this.state
    if (account.username.trim() === "")
      errors.username = "Username is required.";
    if (account.password.trim() === "")
      errors.password = "Password is required.";

    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            onChange={this.handleChange}
            label="Username"
          />
          <Input
            name="password"
            value={account.password}
            onChange={this.handleChange}
            label="Password"
          />

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
