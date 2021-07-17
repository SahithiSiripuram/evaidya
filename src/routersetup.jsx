import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Aboutus from "./Aboutus";
import Book from "./Book";

import Navbar from "./Navbar";

const RouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/aboutus">
          <Aboutus />
        </Route>
        <Route path="/book">
          <Book />
        </Route>
        <Route path="*">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterSetup;
