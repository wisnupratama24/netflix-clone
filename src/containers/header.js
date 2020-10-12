import React from "react";
import { Header } from "../components";
import logo from "../logo.svg";
import * as ROUTES from "../constants/routes";
export default function HeaderContainer() {
  return (
    <Header>
      <Header.Container>
        <Header.Logo src={logo} alt="logo" to={ROUTES.HOME} />
        <Header.Button> Sign In </Header.Button>
      </Header.Container>
    </Header>
  );
}
