import React, { useContext, useEffect, useCallback } from "react";
import { GlobalStyle } from "./styles";
import BottomNavigation from "./components/Navigation/BottomNavigation";
import { ThemeProvider } from "@material-ui/styles";
import Main from "./components/Main/Main";
import DrawerContextProvider from "./context/DrawerContext";
import { FireBaseContext } from "./context/FireBaseContext";
import { UserInfoContext } from "./context/UserInfoContext";
import { Switch, Route } from "react-router-dom";
import * as paths from "./routes/paths";
import * as Styled from "./App.style";
import LoginForm from "./components/Login/LoginForm";
import AppToolbar from "./components/Layout/Toolbar/Toolbar";
import { MuiTheme } from "./styles/theme";
import { useHistory } from "react-router-dom";

function App() {
  const { userInfo } = useContext(UserInfoContext);
  const { isAuthenticated } = userInfo;

  return (
    <ThemeProvider theme={MuiTheme}>
      <GlobalStyle />
      <Switch>
        <Route exact path={paths.LOGIN}>
          <LoginForm />
        </Route>
        <Route path={paths.HOME}>
          <Styled.Container>
            <AppToolbar />
            <DrawerContextProvider>
              <Styled.Content>
                <Main />
              </Styled.Content>
              <BottomNavigation />
            </DrawerContextProvider>
          </Styled.Container>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
