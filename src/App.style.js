import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background: #fafafa;
  header,
  .MuiPaper-elevation1,
  .MuiPaper-elevation4 {
    box-shadow: rgba(0, 0, 0, 0.117647) 0 1px 3px !important;
  }
`;
export const Content = styled.div`
  box-sizing: border-box;
  overflow-y: hidden;
  padding: 10px 10px 20px 10px;
`;