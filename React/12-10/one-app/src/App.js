import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    value: "Default",
    selectValue: "2",
    checked: true,
  };

  setValue = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  setSelectValue = (event) => {
    this.setState({
      setSelectValue: event.target.value,
    });
  };
  setCheckboxValue = (event) => {
    this.setState({
      checked: event.target.checked,
    });
  };

  render() {
    return (
      <div className="App">
        <input value={this.state.value} onChange={this.setValue} />
        <hr />

        <textarea value={this.state.value} onChange={this.setValue} />
        <hr />
        <select value={this.state.selectValue} onChange={this.setSelectValue}>
          <option value="1">one</option>
          <option value="2">two</option>
        </select>
        <hr />
        <label>Change checkbox</label>
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.setCheckboxValue}
        />
      </div>
    );
  }
}

export default App;
