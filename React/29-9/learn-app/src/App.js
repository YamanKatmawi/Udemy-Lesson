import React, { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    let age = 10;
    let ageTemplate = "";
    let users = [
      { id: 1, name: "yaman", age: 32 },
      { id: 2, name: "Ahmad", age: 27 },
      { id: 3, name: "Homam", age: 20 },
    ];
    if (age > 5) {
      ageTemplate = <h1>you are older than 5</h1>;
    } else {
      ageTemplate = <p>you are smaller than 5</p>;
    }
    return (
      <div className="App">
        {ageTemplate}
        <ul>
          {users.map((
            user,
            index //we used index for the number automatic
          ) => (
            <li key={user.id}>
              {index}-{user.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
