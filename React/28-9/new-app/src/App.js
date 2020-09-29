import React from "react";
import Welcome from "./ components /welcome";
import Hello from "./ components /hello";
import List from "./ components /lists";
import Conditions from "./ components /conditions";
import LifeCycleExample from "./ components /LifeCycleExample";
import "./App.css";

function App() {
  return (
    <div className="App">
      welcome yaman React
      <hr />
      <Welcome name="yaman" lastName="katmawi">
        Description
      </Welcome>
      <hr />
      <Hello name="yaman" />
      <hr />
      <List />
      <hr />
      <Conditions />
      <hr />
      <LifeCycleExample />
    </div>
  );
}

export default App;
