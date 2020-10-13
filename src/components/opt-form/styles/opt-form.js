import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  margin-top: 60px;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
  @media (max-width) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  padding: 20px 10px;
  width: 480px;
  border-radius: 4px 0 0 4px;
  border: none;
  @media (max-width: 600px) {
    border-radius: 4px;
    width: 85%;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: red;
  border: none;
  text-transform: uppercase;
  color: white;
  max-width: 30%;
  display: flex;
  font-size: 20px;
  font-weight: medium;
  align-items: center;
  padding-left: 10px;
  border-radius: 0 4px 4px 0;

  img {
    margin-left: 10px;
    width: 24px;
    filter: brightness(0) invert(1);

    @media (max-width: 600px) {
      border-radius: 4px;
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    border-radius: 1px;
    margin-top: 10px;
    font-size: 16px;
    max-width: 100%;
    height: 40px;
    padding: 0 25px;
  }
`;

export const Text = styled.p`
  margin-top: 30px;
  text-align: center;
  color: white;
  padding-bottom: 40px;
`;
