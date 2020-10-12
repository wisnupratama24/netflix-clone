import styled from "styled-components/macro";

export const Container = styled.div`
  padding-top: 60px;
  display: flex;
  justify-content: center;
  color: white;
  margin: auto;
  text-align: center;
  flex-direction: column;

  @media (max-width: 600px) {
    padding-top: 90px;
  }
`;

export const Title = styled.h1`
  max-width: 640px;
  font-size: 50px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 30px;
    max-width: 400px;
    margin: auto;
  }
`;

export const SubTitle = styled.p`
  font-size: 25px;
  margin: -10px 0 14px 0;
  font-weight: 500;
  @media (max-width: 600px) {
    margin-top: 20px;
    font-size: 18px;
  }
`;

export const Text = styled.p`
  font-size: 20px;

  @media (max-width: 600px) {
    margin: auto;
    padding-bottom: 20px;
    max-width: 300px;
    font-size: 16px;
  }
`;
