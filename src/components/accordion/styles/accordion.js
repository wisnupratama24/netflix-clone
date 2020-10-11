import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
  max-width: 815px;
  margin: auto;
  color: white;
  padding: 70px 45px;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 50px;
  margin-top: 0;
  line-height: 1.1;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Body = styled.div`
  padding: 20px;
  font-size: 20px;
  line-height: 1.5;
  max-height: 1200px;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  user-select: none;
  white-space: pre-wrap;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Header = styled.div`
  display: flex;
  user-select: none;
  justify-content: space-between;
  align-items: center;
  font-weight: normal;
  font-size: 25px;
  padding: 1rem;
  border-bottom: 1px solid black;
  cursor: pointer;

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const Item = styled.div`
  background-color: #222;
  margin-bottom: 8px;
  max-width: 670px;
  &:first-of-type {
    margin-top: 3em;
  }
`;
