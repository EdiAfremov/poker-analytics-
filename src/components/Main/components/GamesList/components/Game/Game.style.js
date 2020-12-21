import styled from "styled-components";

export const Game = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;
  &:hover {
    background: #fafafa;
  }
`;
export const GameContent = styled.div`
  display: flex;
  height: ${({ height }) => height}px;

  align-items: center;
  justify-content: space-between;
  flex: 1;
`;
export const GameDate = styled.div`
  div {
    margin-left: 20px;
  }
`;
