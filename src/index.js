import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

function tick() {
  const element = (
    <div>
      <h1>Hello, world! My name is Nguyen Minh An</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

setInterval(tick, 1000); // callback update every second

reportWebVitals();
