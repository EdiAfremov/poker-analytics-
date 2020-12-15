import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { GlobalStyle } from "./styles";
import BottomNavigation from "./components/Navigation/BottomNavigation";
import styled from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Main from "./components/Main/Main";
import GamesContextProvider from "./context/GamesContext";

const Container = styled.div`
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
const Content = styled.div`
  box-sizing: border-box;
  overflow-y: hidden;
  padding: 10px 10px 20px 10px;
`;

const theme = createMuiTheme({
  palette: {
    primary: {
      contrastText: "#fff",
      main: "#00cf8d",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <Typography variant="h6" color="primary">
              Analytics
            </Typography>
          </Toolbar>
        </AppBar>
        <GamesContextProvider>
          <Content>
            <Main />
          </Content>
          <BottomNavigation />
        </GamesContextProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
