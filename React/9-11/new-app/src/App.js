import React, { Component } from "react";
import { Formik, Field } from "formik";

class App extends Component {
  onSubmit = (values) => {
    console.log(values);
  };

  form = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <field name="name" />
        <field name="email" />
        <button type="submit">Send</button>
      </form>
    );
  };
  render() {
    return (
      <div className="App">
        <Formik
          initialValues={{ name: "", email: "" }}
          onSubmit={this.onSubmit}
          render={this.form}
        />
      </div>
    );
  }
}

export default App;
