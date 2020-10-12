import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  padding: 0 0 40px 0;
  background: url(${({ src }) =>
      src ? `../images/misc/${src}.jpg` : `../images/misc/home-bg.jpg`})
    top left / cover no-repeat;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 25px;
  margin: 0 45px;
  @media (max-width: 600px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img`
  width: 120px;

  @media (max-width: 600px) {
    width: 80px;
  }
`;
export const Button = styled(ReactRouterLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  color: white;
  padding: 0 20px;
  font-size: 16px;
  border-radius: 4px;
  max-width: 70px;
  font-weight: medium;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 0 10px;
    border-radius: 2px;
  }
`;
