import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ReactModal from "react-modal";

ReactModal.setAppElement("#app");
ReactDOM.render(<App />, document.getElementById("app"));
