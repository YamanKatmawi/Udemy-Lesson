import React, { Component } from "react";
import AgeComponent from "./components/Age";
import UsersList from "./components/UsersList";
import "./App.css";

class App extends Component {
  render() {
    let age = 10;

    let users = [
      { id: 1, name: "yaman", age: 32 },
      { id: 2, name: "Ahmad", age: 27 },
      { id: 3, name: "Homam", age: 20 },
    ];

    let guests = [
      { id: 1, name: "tony", age: 5 },
      { id: 2, name: "Abdo", age: 8 },
    ];

    return (
      <div className="App">
        <AgeComponent age={age} />
        <AgeComponent age={3} />
        <UsersList users={users} />
        <UsersList users={guests} />
      </div>
    );
  }
}

export default App;
