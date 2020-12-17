import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { FireBaseContext } from "../context/FireBaseContext";

const useUserInfo = () => {
  const { userId } = useContext(AuthContext);
  const { getUserInfo } = useContext(FireBaseContext);
  const [user, setUser] = useState({});

  async function fetchUserInfo() {
    try {
      const userInfo = await getUserInfo(userId);
      setUser(userInfo);
    } catch (error) {
      setUser(false);
    }
  }

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return user;
};

export default useUserInfo;
