import React from "react";
import { Home } from "../index";
import { About } from "./Champions";
import { NavBar } from "./components/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="../Champions" component={Champions} />
      </Switch>
    </div>
  );
};
