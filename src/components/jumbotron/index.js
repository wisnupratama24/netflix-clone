import React from "react";
import {
  Item,
  Title,
  Container,
  Inner,
  Image,
  Pane,
  SubTitle,
} from "./styles/jumbotron";

export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <Item>
      <Inner direction={direction} {...restProps}>
        {children}
      </Inner>{" "}
    </Item>
  );
}

Jumbotron.Container = function JumbtronContainer({ children, ...restProps }) {
  return <Container {...restProps}> {children} </Container>;
};

Jumbotron.Pane = function JumbtronPane({ children, ...restProps }) {
  return <Pane {...restProps}> {children} </Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}> {children} </Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}> {children} </SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};
