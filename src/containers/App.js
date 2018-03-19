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
import EmailSignature from "./EmailSignature";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/tools" />
          <Route exact path="/tools" component={Tools} />
          <Route
            exact
            path="/tools/email-signature"
            component={EmailSignature}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
