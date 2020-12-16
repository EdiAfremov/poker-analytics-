import React, { useState, useContext, useEffect } from "react";
import { FireBaseContext } from "./FireBaseContext";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import * as paths from "../routes/paths";

export const UserInfoContext = React.createContext();

const UserInfoContextProvider = ({ children }) => {
  const { auth } = useContext(FireBaseContext);
  const [userInfo, setUserInfo] = useState({});
  const history = useHistory();

  auth().onAuthStateChanged(function (user) {
    if (!user) {
      history.push(paths.LOGIN);
    } else {
      if (userInfo.isAuthenticated) return;

      const { uid, displayName, email, providerData } = user;
      setUserInfo({
        uid,
        displayName,
        email,
        providerData,
        isAuthenticated: true,
      });
    }
  });

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};

UserInfoContextProvider.deafultProps = {
  children: () => <div />,
};

UserInfoContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default UserInfoContextProvider;
