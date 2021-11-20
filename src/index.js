import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import reportWebVitals from "./reportWebVitals";
import List from "./List";
import ListKey from "./Key";

const listNumber = [1, 15, 10, 5, 12, 6];

ReactDOM.render(<List numbers={listNumber} />, document.getElementById("root"));

ReactDOM.render(
  <ListKey numbers={listNumber} />,
  document.getElementById("root")
);

reportWebVitals();
