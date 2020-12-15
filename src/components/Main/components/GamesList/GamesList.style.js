import styled from "styled-components";

export const GameList = styled.div`
  height: 100%;
  .MuiPaper-root {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr 80px;
  }
  .MuiCardContent-root {
    padding-top: unset;
    padding-bottom: unset;
  }
  .MuiCardActions-root {
    justify-content: center;
    padding: 8px 0;
  }
`;

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
