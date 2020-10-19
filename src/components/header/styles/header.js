import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 40px 0;
  background: url(${({ src }) =>
      src ? `../images/misc/${src}.jpg` : `../images/misc/home-bg.jpg`})
    top left / cover no-repeat;

  @media (max-width: 1100px) {
    ${({ dontShowBackgroundOnSmallView }) =>
      dontShowBackgroundOnSmallView && `background:none;`}
  }
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

export const TextLink = styled.p`
  color: white;
  max-width: 100px;
  text-transform: capitalize;
  font-weight: ${({ active }) => (active === "true" ? "bold" : 500)};
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
  margin-left: 50px;
`;
export const Group = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
`;
export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 1px solid white;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 20px;
  width: 100px;
  top: 32px;
  right: 10px;

  ${Group}:last-of-type ${TextLink} {
    cursor: pointer;
    margin-left: 0;
    margin-top: 20px;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }
    ${TextLink}, ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 10px;
    position: absolute;
  }

  p {
    font-size: 16px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;
export const Search = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 700px) {
    display: none;
  }
`;
export const SearchIcon = styled.div`
  cursor: pointer;
  img {
    width: 18px;
    filter: brightness(0) invert(1);
  }
`;

export const PlayButton = styled.button`
  font-weight: bold;
  margin-top: 30px;
  cursor: pointer;
  padding: 10px 0;
  max-width: 150px;
  font-size: 16px;
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  transition: background-color 0.5s;
  border: 0;
  border-radius: 4px;
  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
`;
export const SearchInput = styled.input`
  height: 32px;
  color: white;
  font-size: 14px;
  padding: 0 10px;
  transition: all 0.5s;
  border-radius: 2px;
  border: 0;
  background: #44444459;\
  margin: ${({ active }) => (active === true ? "0 10px" : 0)};
  opacity: ${({ active }) => (active === true ? 1 : 0)};
  width: ${({ active }) => (active === true ? "200px" : "0")};
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

export const Feature = styled(Container)`
  padding: 150px 0 200px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Text = styled.p`
  max-width: 70%;
  color: white;
  margin: 0;
  font-size: 22px;
  line-heigt: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const Title = styled.h2`
  font-size: 48px;
  color: white;
  margin-bottom: 20px;
  line-heigt: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;
