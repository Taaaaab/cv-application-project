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

    this.setState({
      infoArray: this.state.infoArray.concat(myArray),
      // infoArray: [...this.state.infoArray, myArray],
      fullName: "",
      email: "",
      phone: "",

    });
  };

  render() {
    const { fullName, email, phone, infoArray } = this.state;

    return (
      <div>
        <div className="returnDisplay">
          <Object infoArray={infoArray} />
        </div>
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
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default Create;