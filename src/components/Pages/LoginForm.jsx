import React, { Component } from "react";
import Input from "../../common/Input";

export default class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
  };
  handleSubmit = (e) => {
    e.preventDefault();
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
