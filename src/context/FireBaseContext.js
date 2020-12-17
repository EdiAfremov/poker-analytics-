import React, { useState } from "react";
import PropTypes from "prop-types";
import * as Firebase from "../firebase/auth";
import * as Firestore from "../firebase/db/firestore";

export const FireBaseContext = React.createContext();

const FireBaseContextProvider = ({ children }) => {
  return (
    <FireBaseContext.Provider
      value={{
        signIn: Firebase.signIn,
        signOut: Firebase.signOut,
        auth: Firebase.auth,
        getLoggedInUser: Firebase.getLoggedInUser,
        createNewGame: Firestore.createNewGame,
        getGamesByUserId: Firestore.getGamesByUserId,
        getUserInfo: Firestore.getUserInfo,
        listenForChanges: Firestore.listenForChanges,
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
