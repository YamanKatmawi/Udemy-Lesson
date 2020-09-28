import React from "react";
import Welcome from "./ components /welcome";
import Hello from "./ components /hello";
import "./App.css";

function App() {
  return (
    <div className="App">
      welcome yaman React
      <Welcome name="yaman" lastName="katmawi">
        Description
      </Welcome>
      <Hello name="yaman" />
    </div>
  );
}

export default App;
