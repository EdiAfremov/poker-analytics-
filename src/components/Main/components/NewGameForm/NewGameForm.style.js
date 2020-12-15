import styled from "styled-components";

export const NewGameForm = styled.div`
  height: 100%;
  /* max-width: 400px;
  margin: 0 auto; */
  padding: 20px;
  box-sizing: border-box;

  .rc-input-number-input {
    width: calc(100% - 60px);
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.87);
    font: inherit;
  }
  .rc-input-number-handler-wrap {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 60px;
  }
  .rc-input-number-handler {
    height: calc(50% - 1px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .rc-input-number-handler-down-disabled:hover,
  .rc-input-number-handler-up-disabled:hover {
    color: #999;
    border-color: inherit;
  }
  .rc-input-number-disabled .rc-input-number-handler:hover {
    color: #999;
    border-color: inherit;
  }
  .rc-input-number:hover {
    border-color: inherit;
  }
  .rc-input-number:hover .rc-input-number-handler-up,
  .rc-input-number:hover .rc-input-number-handler-wrap {
    border-color: inherit;
  }
  .rc-input-number-disabled:hover {
    border-color: inherit;
  }
  .rc-input-number-disabled:hover .rc-input-number-handler-up,
  .rc-input-number-disabled:hover .rc-input-number-handler-wrap {
    border-color: inherit;
  }
  .rc-input-number-focused {
    border-color: inherit;
    box-shadow: inherit;
  }
`;
