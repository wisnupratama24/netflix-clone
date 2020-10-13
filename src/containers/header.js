import React from "react";
import { Header, OptForm, Feature } from "../components";
import logo from "../logo.svg";
import * as ROUTES from "../constants/routes";

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Container>
        <Header.Logo src={logo} alt="logo" to={ROUTES.HOME} />
        <Header.Button to={ROUTES.SIGN_IN}> Sign In </Header.Button>
      </Header.Container>
      <Feature>
        <Feature.Title>
          {" "}
          Unlimited entertainment. 50% off your first 2 months.{" "}
        </Feature.Title>
        <Feature.SubTitle> Watch anywhere. Cancel anytime.</Feature.SubTitle>
        <Feature.Text>
          {" "}
          Ready to watch? Enter your email to create or restart your membership.
        </Feature.Text>
      </Feature>
      <OptForm style={{ marginTop: 0 }}>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button> Try for 50% off </OptForm.Button>
      </OptForm>
      <OptForm.Text>Only new members are eligible for this offer.</OptForm.Text>
    </Header>
  );
}
