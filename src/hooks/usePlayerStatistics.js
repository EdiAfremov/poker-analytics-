import React, { useState, useEffect, useContext, useCallback } from "react";
import { AuthContext } from "../context/AuthContext";
import { FireBaseContext } from "../context/FireBaseContext";

function getStatistics(data = []) {
  function getRevenue() {
    return data.reduce((a, c) => (a += Number(c.profit)), 0);
  }
  function getAvg(key) {
    const sum = data.reduce((a, c) => a + Number(c[key]), 0);
    return Math.round(sum / data.length);
  }

  return {
    totalRevenue: getRevenue(),
    avgRevenue: getAvg("profit"),
    avgBuyIn: getAvg("buyIn"),
    avgCashedOut: getAvg("cashedOut"),
  };
}

const usePlayerStatistics = () => {
  const { listenForChanges } = useContext(FireBaseContext);
  const { userId } = useContext(AuthContext);
  const [statistics, setStatistics] = useState({
    totalRevenue: 0,
    avgRevenue: 0,
    avgBuyIn: 0,
    avgCashedOut: 0,
  });
  const [loading, setLoading] = useState(true);

  const onChangeHadnler = useCallback((data) => {
    setStatistics(getStatistics(data));
    setLoading(false);
  }, []);

  useEffect(() => {
    listenForChanges(userId, onChangeHadnler);
  }, []);

  return { loading, ...statistics };
};

export default usePlayerStatistics;
