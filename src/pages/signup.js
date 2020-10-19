import React, { useState, useContext } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { Header, Form } from "../components";
import logo from "../logo.svg";
import * as ROUTES from "../constants/routes";
import { FooterContainer } from "../containers";
import { authenticate, isAuth } from "../helpers/auth";

export const Signup = ({ props }) => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { email, password, name } = formData;

  const isInvalid = password === "" || email === "" || name === "";
  const handleChange = (text) => (e) => {
    setFormData({
      ...formData,
      [text]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: name,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then((res) => {
            authenticate(result, () => {
              //   isAuth();
              history.push(ROUTES.BROWSE);
            });
          });
      })
      .catch((error) => {
        setFormData({
          ...formData,
          email: "",
          name: "",
          password: "",
        });
        setError(error.message);
      });
  };

  return (
    <>
      {isAuth() ? <Redirect to="/browse" /> : null}
      <Header>
        <Header.Container>
          <Header.Logo src={logo} alt="logo" to={ROUTES.HOME} />
        </Header.Container>
        <Form>
          <Form.Title> Sign Up </Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base method="post" onSubmit={handleSubmit}>
            <Form.Input
              placeholder="First name"
              autocomplete="off"
              type="text"
              value={name}
              required
              onChange={handleChange("name")}
            />
            <Form.Input
              placeholder="Enter email address"
              autocomplete="off"
              type="email"
              value={email}
              required
              onChange={handleChange("email")}
            />
            <Form.Input
              placeholder="Password"
              autocomplete="off"
              required
              type="password"
              value={password}
              onChange={handleChange("password")}
            />
            <Form.Button type="submit" disabled={isInvalid}>
              {" "}
              Sign Up
            </Form.Button>
          </Form.Base>
          <Form.Text>
            {" "}
            Already a user? <Form.Link to="/signin"> Sign In Now</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn More
          </Form.TextSmall>
        </Form>
      </Header>
      <FooterContainer />
    </>
  );
};
