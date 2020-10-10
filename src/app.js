import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}
