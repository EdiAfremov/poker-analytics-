import React, { useState } from "react";
import PropTypes from "prop-types";

export const DrawerContext = React.createContext();

const DrawerContextProvider = ({ children }) => {
  const [isDrawerOpen, toggleDrawer] = useState(false);

  return (
    <DrawerContext.Provider value={{ toggleDrawer, isDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};

DrawerContextProvider.deafultProps = {
  children: () => <div />,
};

DrawerContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default DrawerContextProvider;
