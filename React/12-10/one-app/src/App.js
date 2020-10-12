import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    value: "Default",
    selectValue: "2",
    checked: true,
    radioValue: "2",
  };

  setValue = (event) => {
    const name = event.target.name;
    const type = event.target.type;
    let value = "";
    if (type == "checkbox") value = event.target.checked;
    else value = event.target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="App">
        <input name="value" value={this.state.value} onChange={this.setValue} />
        <hr />
        <textarea
          name="value"
          value={this.state.value}
          onChange={this.setValue}
        />
        <hr />
        <select
          name="selectValue"
          value={this.state.selectValue}
          onChange={this.setValue}
        >
          <option value="1">one</option>
          <option value="2">two</option>
        </select>
        <hr />
        <label>
          Change checkbox
          <input
            name="checked"
            type="checkbox"
            checked={this.state.checked}
            onChange={this.setValue}
          />
        </label>
        <hr />
        <div onChange={this.setValue}>
          <input
            name="radioValue"
            type="radio"
            value="1"
            checked={this.state.radioValue == "1"}
          />
          one
          <input
            name="radioValue"
            type="radio"
            value="2"
            checked={this.state.radioValue == "2"}
          />
          two
        </div>
      </div>
    );
  }
}

export default App;
