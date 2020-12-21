import styled from "styled-components";
import React from "react";
import NoDataIcon from "../../../../assets/icons/no-data.svg";

export const GameList = styled.div`
  height: 100%;
  .MuiPaper-root {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr 80px;
  }
  .MuiCardContent-root {
    padding-top: unset;
    padding-bottom: unset;
  }
  .MuiCardActions-root {
    justify-content: center;
    padding: 8px 0;
  }
  .FadeInList {
    position: relative;
    height: 100%;
    width: 100%;
  }
`;

export const Game = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;
  &:hover {
    background: #fafafa;
  }
`;
export const GameContent = styled.div`
  display: flex;
  height: ${({ height }) => height}px;

  align-items: center;
  justify-content: space-between;
  flex: 1;
`;
export const GameDate = styled.div`
  div {
    margin-left: 20px;
  }
`;
export const PaginationLoader = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  svg {
    border: none;
    display: inline-block;
    height: 40px;
    width: auto;
  }
  .simple-ellipse {
    fill: #f5f5f5;
  }
  .simple-g {
    stroke: #d9d9d9;
  }
  .simple-path {
    fill: #fafafa;
  }
  .simple-text {
    color: rgba(0, 0, 0, 0.25);
  }
`;

export const NoDataMarkup = () => (
  <IconWrapper>
    <svg
      width="64"
      height="41"
      viewBox="0 0 64 41"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
        <ellipse
          class="img-simple-ellipse"
          cx="32"
          cy="33"
          rx="32"
          ry="7"
        ></ellipse>
        <g class="simple-g" fill-rule="nonzero">
          <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
          <path
            d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
            class="img-simple-path"
          ></path>
        </g>
      </g>
    </svg>
    <div className="simple-text">No Games Found</div>
  </IconWrapper>
);
