import { createGlobalStyle, css } from "styled-components";
export const scrollBar = css`
  overflow: overlay;
  scrollbar-width: thin; // for firefox
  &::-webkit-scrollbar-thumb {
    background-color: #dbdbdbd1;
    border-radius: 20px;
  }
  &::-webkit-scrollbar {
    width: 8px;
    height: 42px;
    border-radius: 20px;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: #dadada;
    }
  }

  @-moz-document url-prefix() {
    overflow: auto;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body,html,#root {
    font-family: Roboto, sans-serif ;
    height: 100%;
    width:100% ;
    margin:0;
    padding:0;
  };
  ${scrollBar}
`;
