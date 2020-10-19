import React from "react";
import { Container, Item, Title, Name, Picture, List } from "./styles/profile";
export default function Profile({ children, ...restProps }) {
  return <Container {...restProps}> {children} </Container>;
}

Profile.List = function ProfileList({ children, ...restProps }) {
  return <List {...restProps}> {children}</List>;
};

Profile.User = function ProfileUser({ children, ...restProps }) {
  return <Item {...restProps}> {children}</Item>;
};

Profile.Picture = function ProfilePicture({ src, ...restProps }) {
  return (
    <Picture
      {...restProps}
      src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`}
    />
  );
};

Profile.Title = function ProfileTitle({ children, ...restProps }) {
  return <Title {...restProps}> {children}</Title>;
};

Profile.Name = function ProfileName({ children, ...restProps }) {
  return <Name {...restProps}> {children}</Name>;
};
