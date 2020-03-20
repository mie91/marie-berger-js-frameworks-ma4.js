import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import RecipeItem from "../components/RecipeItem";


function Layout() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/" exact component={RecipeItem} />
        </Switch>
      </Container>
    </Router>
  );
}

export default Layout;