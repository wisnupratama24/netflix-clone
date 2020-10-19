import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  Background,
  Logo,
  Container,
  Button,
  Feature,
  Text,
  Group,
  Title,
  TextLink,
  Dropdown,
  Profile,
  Picture,
  Search,
  SearchInput,
  SearchIcon,
  PlayButton,
} from "./styles/header";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}> {children}</Background> : children;
}

Header.Container = function HeaderContainer({ children, ...restProps }) {
  return <Container {...restProps}> {children} </Container>;
};
Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}> {children}</Feature>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}> {children}</Text>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive(!searchActive)}>
        <img src="/images/icons/search.png" alt="search" />
      </SearchIcon>
      <SearchInput
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films or series"
        value={searchTerm}
        active={searchActive}
      />
    </Search>
  );
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}> {children}</Dropdown>;
};
Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}> {children}</Profile>;
};
Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}> {children}</Group>;
};
Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}> {children}</PlayButton>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}> {children}</TextLink>;
};

Header.Title = function HeaderTitle({ children, ...restProps }) {
  return <Title {...restProps}> {children}</Title>;
};

Header.Button = function HeaderButton({ children, ...restProps }) {
  return <Button {...restProps}> {children}</Button>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};
