import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import JobsContextProvider from "./store/JobsContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <JobsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </JobsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
