import { Component } from "react";

export default class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const { data } = this.state;
    const options = { abortEarly: false };
    const { error } = this.schema.validate(data, options);

    //   check if result is falsy
    if (!error) return null;

    //   check if result is truthy
    const errors = {};

    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
    };
    

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    // console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
    };
    

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorsMessage = this.validateProperty(input);
    if (errorsMessage) errors[input.name] = errorsMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };
}
