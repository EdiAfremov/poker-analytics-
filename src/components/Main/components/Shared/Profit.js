import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import styled from "styled-components";

function getProfitStyle(profit) {
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

const Profit = ({ profit }) => {
  const icon = getArrow(profit);
  return (
    <GameProfit profit={profit}>
      {profit !== 0 && icon}
      <span>{profit.toString().replace("-", "")}</span>
    </GameProfit>
  );
};

export default Profit;
