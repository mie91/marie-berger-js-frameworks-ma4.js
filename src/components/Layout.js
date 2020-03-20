import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../components/Home";


function Layout() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Container>
    </Router>
  );
}

export default Layout;