import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { Header, Form } from "../components";
import logo from "../logo.svg";
import * as ROUTES from "../constants/routes";
import { FooterContainer } from "../containers";

export const Signin = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { email, password } = formData;

  const isInvalid = password === "" || email === "";
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
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setFormData({
          ...formData,
          email: "",
          password: "",
        });

        setError(error.message);
      });
  };
  return (
    <>
      <Header>
        <Header.Container>
          <Header.Logo src={logo} alt="logo" to={ROUTES.HOME} />
        </Header.Container>
        <Form>
          <Form.Title> Sign In </Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base method="post" onSubmit={handleSubmit}>
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
              Sign In
            </Form.Button>
          </Form.Base>
          <Form.Text>
            {" "}
            New to netflix? <Form.Link to="/signup"> Sign Up Now</Form.Link>
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
