import React from "react";
import ReactDOM from "react-dom";

import "./style.css";
import Table from "./table";

function App() {
  return (
    <div className="App">
      <Table />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
