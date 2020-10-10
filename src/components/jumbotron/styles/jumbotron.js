import styled from "styled-components/macro";

export const Item = styled.div`
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  display: flex;
  overflow: hidden;
  color: white;
`;

export const Inner = styled.div`
  max-width: 1100px;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  } ;
`;

export const Container = styled.div``;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;
export const SubTitle = styled.h2`
  font-size: 26px;
  max-width: 500px;
  line-height: normal;
  font-weight: normal;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;
