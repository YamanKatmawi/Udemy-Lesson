import React, { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    let age = 10;
    let ageTemplate = "";
    if (age > 5) {
      ageTemplate = <h1>you are older than 5</h1>;
    } else {
      ageTemplate = <p>you are smaller than 5</p>;
    }
    return <div className="App">{ageTemplate}</div>;
  }
}

export default App;
