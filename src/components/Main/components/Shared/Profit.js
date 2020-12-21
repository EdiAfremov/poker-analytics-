/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import styled from "styled-components";
import FormattedNumber from "./FormattedNumber";

function getProfitStyle(profit) {
  if (isNaN(profit)) {
    return "inherit";
  }
  if (profit === 0) {
    return "#00000042";
  }
  return profit > 0 ? "#4bc87d" : "#eb0f29";
}

const GameProfit = styled.div`
  color: ${({ profit = "0" }) => getProfitStyle(profit)};
  font-weight: 500;
  font-size: 18px;
  display: flex;
  align-items: center;
  border-radius: 4px;
`;

const getArrow = (p) => (p > 0 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />);

const Profit = ({ profit = 0 }) => {
  const icon = getArrow(profit);
  return useMemo(
    () => (
      <GameProfit profit={profit} className="GameProfit">
        {(profit && profit !== 0 && icon) || null}
        <FormattedNumber number={profit} />
      </GameProfit>
    ),
    [profit]
  );
};

export default Profit;
