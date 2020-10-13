import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  margin: 60px auto;
  background-color: rgba(0, 0, 0, 0.65);
  max-width: 450px;
  min-height: 600px;
  padding: 50px 60px;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const Input = styled.input`
  background: #333;
  border: 0;
  color: white;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 20px;
`;

export const Link = styled(ReactRouterLink)`
  text-decoration: none;
  color: white;
`;

export const Button = styled.button`
  border: none;
  width: 100%;
  padding: 15px 10px;
  box-sizing: border-box;
  margin-top: 50px;
  border-radius: 4px;
  background: red;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  color: white;
  margin: 0 0 16px;
  padding: 15px 20px;
`;

export const Base = styled.form``;

export const Title = styled.h1`
  color: white;
`;

export const Text = styled.p`
  margin-top: 30px;
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;

export const TextSmall = styled.p`
  margin-top: 10px;
  color: #8c8c8c;
  line-height: normal;
  font-size: 13px;
`;
