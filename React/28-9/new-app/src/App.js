import React from "react";
import Welcome from "./ components /welcome";
import Hello from "./ components /hello";
import Lists from "./ components /lists";
import "./App.css";

function App() {
  return (
    <div className="App">
      welcome yaman React
      <Welcome name="yaman" lastName="katmawi">
        Description
      </Welcome>
      <Hello name="yaman" />
      <Lists />
    </div>
  );
}

export default App;
