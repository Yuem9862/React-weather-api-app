import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  SingleWeather,
  Error,
  About,
  Login,
  PrivateRoute,
  AuthWrapper,
} from "./pages";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRoute path='/' exact={true}>
            <Home />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/city/:id'>
            <SingleWeather />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  );
}

export default App;
