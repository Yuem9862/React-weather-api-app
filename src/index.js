import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { WeatherProvider } from "./context";

ReactDOM.render(
  <WeatherProvider>
    <App />
  </WeatherProvider>,
  document.getElementById("root")
);
