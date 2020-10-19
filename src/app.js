import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Signin, Signup, Browse } from "./pages";
import * as ROUTES from "./constants/routes";
export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.HOME} exact render={Home}></Route>
        <Route
          path={ROUTES.BROWSE}
          exact
          render={(props) => <Browse {...props} />}
        />

        <Route
          path={ROUTES.SIGN_IN}
          exact
          render={(props) => <Signin {...props} />}
        />
        <Route
          exact
          path={ROUTES.SIGN_UP}
          render={(props) => <Signup {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}
