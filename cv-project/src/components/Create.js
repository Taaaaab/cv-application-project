import React, { Component } from "react";
import Object from "./Object";
import "../App.css";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      phone: "",
      infoArray: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const myArray = [
      `${this.state.fullName}`,
      `${this.state.email}`,
      `${this.state.phone}`,
    ];
    console.log(myArray);

    this.setState((state) => {
      // const infoArray = state.infoArray.concat(state.fullName);
      const infoArray = [...state.infoArray, state.fullName, state.email, state.phone];
      return {
        infoArray,
        fullName: "",
        email: "",
        phone: "",
      };
    });
  };

  render() {
    const { fullName, email, phone, infoArray } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChange}
            name="fullName"
            type="text"
            value={fullName}
            placeholder="Name"
          />
          <input
            onChange={this.handleInputChange}
            name="email"
            type="text"
            value={email}
            placeholder="Email"
          />
          <input
            onChange={this.handleInputChange}
            name="phone"
            type="text"
            value={phone}
            placeholder="Phone"
          />
          <button type="submit">Submit</button>
        </form>
        <Object infoArray={infoArray} />
      </div>
    );
  }
}

export default Create;