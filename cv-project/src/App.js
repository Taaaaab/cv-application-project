// App.js

import React, { Component } from "react";
import uniqid from "uniqid";
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: {
        text: '',
        id: uniqid()
      },
      inputs: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      input : {
        text: e.target.value,
        id: this.state.input.id,
      },
    });
  };

  onSubmitFunc = (e) => {
    e.preventDefault();
    this.setState({
      inputs: this.state.inputs.concat(this.state.input),
      input: {
        text: '',
        id: uniqid()
      },
    });
  };

  render() {
    const { input, inputs } = this.state;

    return (
      <div className="App">
        <div className="container">
          <div className="header">
            <form onSubmit={this.onSubmitFunc}>
              <label htmlFor="nameInput">Enter Your Name</label>
              <input
              onChange={this.handleChange}
              value={input.text}
              type="text"
              id="nameInput" />
              <button type="submit">
                Add Name
              </button>
            </form>
          </div>
          <div className="body">

          </div>
          <div className="footer"></div>
        </div>
      </div>
    );
  }
  
}

export default App;
