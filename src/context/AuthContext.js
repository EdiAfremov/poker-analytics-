/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from "react";
import { FireBaseContext } from "./FireBaseContext";
import PropTypes from "prop-types";
import { useHistory, Redirect } from "react-router-dom";
import * as paths from "../routes/paths";

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const { auth } = useContext(FireBaseContext);
  const [userInfo, setUserInfo] = useState({
    isLoading: true,
  });
  const { isLoading, isAuthenticated } = userInfo;

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      setUserInfo({
        isAuthenticated: Boolean(user),
        userId: user?.uid,
        isLoading: false,
      });
    });
  }, []);

  return (
    <AuthContext.Provider value={{ ...userInfo }}>
      {isLoading ? <div /> : children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.deafultProps = {
  children: () => <div />,
};

AuthContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AuthContextProvider;

// auth().onAuthStateChanged(function (user) {
//   if (!user) {
//     history.push(paths.LOGIN);
//   } else {
//     if (userInfo.isAuthenticated) return;

//     const { uid, displayName, email, providerData } = user;
//     setUserInfo({
//       uid,
//       displayName,
//       email,
//       providerData,
//       isAuthenticated: true,
//     });
//   }
// });
