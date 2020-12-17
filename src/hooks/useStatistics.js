import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FireBaseContext } from "../context/FireBaseContext";

const useStatistics = () => {
  const { listenForChanges } = useContext(FireBaseContext);
  const { userId } = useContext(AuthContext);
  const [total, setTotal] = useState([]);
  const [loading, setLoading] = useState(true);

  function onChangeHadnler(data) {
    const total = data.reduce((a, c) => a += c.profit, 0);

    setTotal(total);
    setLoading(false);
  }

  // useEffect(() => fetchGames(), []);
  useEffect(() => {
    listenForChanges(userId, onChangeHadnler);
  }, []);

  return { loading, total };
};

export default useStatistics;
