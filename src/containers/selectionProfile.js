import React from "react";
import { Header, Profile } from "../components";
import logo from "../logo.svg";
import * as ROUTES from "../constants/routes";
export default function SelectionProfile({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Container>
          <Header.Logo src={logo} alt="logo" to={ROUTES.HOME} />
        </Header.Container>
      </Header>
      <Profile>
        <Profile.Title> Who's watching?</Profile.Title>
        <Profile.List>
          <Profile.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profile.Picture src={user.photoURL} alt="photo-url" />
            <Profile.Name> {user.displayName}</Profile.Name>
          </Profile.User>
        </Profile.List>
      </Profile>
    </>
  );
}
