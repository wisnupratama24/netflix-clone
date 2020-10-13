import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Signin } from "./pages";
import * as ROUTES from "./constants/routes";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.HOME} exact render={Home}></Route>
        <Route
          path={ROUTES.SIGN_IN}
          exact
          render={(props) => <Signin {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}
