import React, { useState } from "react";
import PropTypes from "prop-types";

export const GamesContext = React.createContext();

const GamesContextProvider = ({ children }) => {
  const [isDrawerOpen, toggleDrawer] = useState(false);

  return (
    <GamesContext.Provider value={{ toggleDrawer, isDrawerOpen }}>
      {children}
    </GamesContext.Provider>
  );
};

GamesContextProvider.deafultProps = {
  children: () => <div />,
};

GamesContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default GamesContextProvider;
