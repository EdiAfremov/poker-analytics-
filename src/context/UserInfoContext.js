import React, { useState } from "react";
import PropTypes from "prop-types";

export const UserInfoContext = React.createContext();

const UserInfoContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

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
