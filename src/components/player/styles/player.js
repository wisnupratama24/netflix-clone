import styled from "styled-components/macro";

export const Container = styled.div``;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: auto;

  video {
    height: 100%;
    width: 100%;
  }
`;

export const Close = styled.button``;

export const Button = styled.button`
  text-transform: uppercase;
  background-color: #ff0a16;
  border: 0;
  border-radius: 2px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 16px;
  margin-left: 50px;
  margin-bottom: 20px;

  &:hover {
    transform: scale(1.05);
    background-color: #ff0a16;
  }

  @media (max-width: 600px) {
    margin-left: 30px;
    padding: 10px;
    font-size: 12px;
  }
`;
