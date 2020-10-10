import styled from "styled-components/macro";

export const Container = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  padding: 70px 50px;
  margin: auto;

  @media (max-width: 1000px) {
    padding: 70px 30px;
    width: 100%;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
`;

export const Link = styled.a`
  font-size: 13px;
  color: #757575;
  text-decoration: none;
  margin-bottom: 20px;
`;

export const Break = styled.p`
  margin: 10px 0;
  height: 0;
`;
