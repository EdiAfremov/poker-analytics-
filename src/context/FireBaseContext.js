import React from "react";
import PropTypes from "prop-types";
import * as Firebase from "../firebase";

Firebase.initialize();

export const FireBaseContext = React.createContext();

const FireBaseContextProvider = ({ children }) => {
  return (
    <FireBaseContext.Provider
      value={{
        signIn: Firebase.signIn,
        signOut: Firebase.signOut,
        auth: Firebase.auth,
        getLoggedInUser: Firebase.getLoggedInUser,
      }}
    >
      {children}
    </FireBaseContext.Provider>
  );
};

FireBaseContextProvider.deafultProps = {
  children: () => <div />,
};

FireBaseContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default FireBaseContextProvider;
