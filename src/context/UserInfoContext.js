import React from "react";
import PropTypes from "prop-types";
import useUserInfo from "../hooks/useUserInfo";

export const UserInfoContext = React.createContext();

const UserInfoContextProvider = ({ children }) => {
  const user = useUserInfo();

  return (
    <UserInfoContext.Provider value={{ ...user }}>
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
