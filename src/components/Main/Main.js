import React, { useContext } from "react";
import GamesList from "./components/GamesList/GamesList";
import TotalStatistics from "./components/TotalStatistics/TotalStatistics";
import styled from "styled-components";
import { NewGameForm } from "./components/NewGameForm/NewGameForm";
import { Redirect } from "react-router-dom";
import * as paths from "../../routes/paths";
import { AuthContext } from "../../context/AuthContext";
import UserInfoContextProvider from "../../context/UserInfoContext";

const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: minmax(150px, auto) 1fr;
  grid-row-gap: 15px;
`;

const Main = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Redirect to={paths.LOGIN} />;
  }

  return (
    <GridContainer>
      <TotalStatistics />
      <GamesList />
      <NewGameForm />
    </GridContainer>
  );
};

export default Main;
