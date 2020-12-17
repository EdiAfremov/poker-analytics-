import React, { useState, useEffect, useContext } from "react";
import chunk from "lodash/chunk";
import { AuthContext } from "../context/AuthContext";
import { FireBaseContext } from "../context/FireBaseContext";
import { UserInfoContext } from "../context/UserInfoContext";

const useGamesData = () => {
  const { getGamesByUserId, listenForChanges } = useContext(FireBaseContext);
  const { userId } = useContext(AuthContext);
  const [gamesData, setGamesData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchGames() {
    try {
      const games = await getGamesByUserId(userId);
      // setGamesData(chunk(games, 5));
    } catch (error) {
      setGamesData([]);
    } finally {
      setLoading(false);
    }
  }

  function onChangeHadnler(data) {
    setGamesData(chunk(data, 5));
    setLoading(false);
  }

  // useEffect(() => fetchGames(), []);
  useEffect(() => {
    listenForChanges(userId, onChangeHadnler);
  }, []);

  return { loading, gamesData, setGamesData };
};

export default useGamesData;
