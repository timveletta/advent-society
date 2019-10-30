import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <a-scene arjs="sourceType: webcam; debugUIEnabled: true">
        <a-marker preset="hiro">
          <a-box
            position="0 0 0.5"
            material="opacity: 0.7; color: yellow;"
          ></a-box>
        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}

export default App;
