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
  decrement = () => {
    /// ARO FUNCTION
    this.setState({ age: this.state.age - 1 });
  };

  render() {
    return (
      <div>
        Hello {this.props.name} from class Component
        <p>
          {this.state.user.name} {this.state.user.lastName} Age:{this.state.age}
        </p>
        <button
          onClick={() => {
            this.setState({ age: this.state.age + 1 });
          }}
        >
          Increase
        </button>
        <button onClick={this.decrement}>Decrease</button>
      </div>
    );
  }
}

export default Hello;
