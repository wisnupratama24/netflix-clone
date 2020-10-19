import styled from "styled-components/macro";

export const Container = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16px;
  text-transform: capitalize;
`;

export const Picture = styled.img`
  margin-top: 2rem;
  max-width: 150px;
  width: 100%;
  cursor: pointer;
  height: auto;
`;

export const Item = styled.li`
  max-width: 200px;
  text-align: center;
  &:hover > ${Picture} {
    border: 3px solid white;
  }

  &:hover > ${Name} {
    font-weight: bold;
    color: white;
  }

  &:last-of-type {
    margin-top: 0;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h1`
  color: white;
  margin: auto;
  font-weight: 500;
  font-size: 48px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;
