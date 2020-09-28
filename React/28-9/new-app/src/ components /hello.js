import React, { Component } from "react";

class Hello extends Component {
  state = {
    age: 15,
    user: {
      name: "yaman",
      lastName: "katmawi",
    },
    socialLinks: ["facebook", "Twitter"],
  };

  render() {
    return (
      <div>
        Hello {this.props.name} from class Component
        <p>
          {this.state.user.name}Age:{this.state.age}
        </p>
      </div>
    );
  }
}

export default Hello;
