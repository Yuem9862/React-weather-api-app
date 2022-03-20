import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { WeatherProvider } from "./context";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_AUTH_CLIENTID}
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    >
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
