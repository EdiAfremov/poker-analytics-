import React, { useMemo } from "react";
import * as Styled from "./Game.style";
import moment from "moment";
import Divider from "@material-ui/core/Divider";
import Skeleton from "@material-ui/lab/Skeleton";
import Profit from "../../../Shared/Profit";

const Game = ({ height, details }) => {
  const { date, profit } = details;
  return useMemo(
    () => (
      <>
        <Styled.GameContent height={height}>
          {moment(date).format("DD.MM.YY")}
          <Profit profit={profit} />
        </Styled.GameContent>
        <Divider />
      </>
    ),
    [height, date, profit]
  );
};

export default Game;
