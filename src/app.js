import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages";
import * as ROUTES from "./constants/routes";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.HOME} exact render={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}
