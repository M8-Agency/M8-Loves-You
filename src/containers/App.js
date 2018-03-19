import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import "normalize.css/normalize.css";
import "../assets/app.css";
import Tools from "./Tools";

const Styleguide = () => (
  <div>
    <h2>Styleguide</h2>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/tools" />
          <Route exact path="/tools" component={Tools} />
          <Route exact path="/tools/email-signature" component={Styleguide} />
        </Switch>
      </Router>
    );
  }
}

export default App;
