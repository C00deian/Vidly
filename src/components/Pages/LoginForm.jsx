import React, { Component } from "react";

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
          <div className="form-group">
            <label htmlFor="username">Username</label>

            <input
              id="username"
              onChange={this.handleChange}
              value={account.username}
              name="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input
              type="text"
              className="form-control"
              onChange={this.handleChange}
              value={account.name}
              name="name"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
