/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import Box from "@material-ui/core/Box";
import * as Styled from "./LoginForm.style";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import { useHistory, Redirect } from "react-router-dom";
import * as paths from "./../../routes/paths";
import { FireBaseContext } from "../../context/FireBaseContext";
import { AuthContext } from "../../context/AuthContext";

export default function LoginForm() {
  const { signIn } = useContext(FireBaseContext);
  const { isAuthenticated } = useContext(AuthContext);

  const history = useHistory();

  const signInHandler = async (provider) => {
    try {
      const { profile = {}, uid } = await signIn(provider);
      // await setUserInfo({ ...profile, uid, authenticated: true });
      history.push(paths.HOME);
      return;
    } catch (error) {
      return error;
    }
  };

  if (isAuthenticated) {
    return <Redirect to={paths.HOME} />;
  }

  return (
    <Styled.FormContainer>
      <Styled.Form>
        <Paper elevation={0} variant="outlined">
          <Box mb={3}>
            <Typography variant="h5" align="center">
              Sign in
            </Typography>
            <Box mt={2}>
              <Divider />
            </Box>
          </Box>
          <Box mb={3}>
            <Styled.GoogleButton
              fullWidth
              variant="contained"
              size="large"
              onClick={() => signInHandler("google")}
              startIcon={<Styled.ProviderIcon provider="google" />}
            >
              Sign in with Google
            </Styled.GoogleButton>
          </Box>
          <Box mb={3}>
            <Styled.FacebookButton
              fullWidth
              onClick={() => signInHandler("facebook")}
              variant="contained"
              size="large"
              startIcon={<Styled.ProviderIcon provider="facebook" />}
            >
              Sign in with Facebook
            </Styled.FacebookButton>
          </Box>
        </Paper>
      </Styled.Form>
    </Styled.FormContainer>
  );
}
