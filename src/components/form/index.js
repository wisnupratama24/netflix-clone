import React from "react";
import {
  Container,
  Base,
  Title,
  Text,
  TextSmall,
  Error,
  Button,
  Link,
  Input,
} from "./styles/form";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}> {children}</Container>;
}

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}> {children} </Base>;
};

Form.Input = function FormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

Form.Link = function FormLink({ ...restProps }) {
  return <Link {...restProps} />;
};

Form.Button = function FormButton({ children, ...restProps }) {
  return <Button {...restProps}> {children} </Button>;
};

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}> {children} </Error>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}> {children} </Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}> {children} </Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}> {children} </TextSmall>;
};
