// App.js

import React, { Component } from "react";
import Create from "./components/Create";
import Experience from "./components/Experience";
import Education from "./components/Education";
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Project: CV Application</h1>
        </div>
        <div className="container">
          <Create />
          <Experience />
          <Education />
        </div>
      </div>
    )
  }
}

export default App;
