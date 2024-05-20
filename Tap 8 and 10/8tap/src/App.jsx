// src/App.js
import React from "react";
import CustomButton from "./CustomButton";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Custom Buttons with React</h1>
      <CustomButton text="Button 1" alertMessage="Alert from Button 1!" tooltip="Tooltip for Button 1" />
      <CustomButton text="Button 2" alertMessage="Alert from Button 2!" />
      <CustomButton text="Button 3" alertMessage="Alert from Button 3!" tooltip="Tooltip for Button 3" />
    </div>
  );
}

export default App;
