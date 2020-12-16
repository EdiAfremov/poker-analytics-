import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import GoogleIconSvg from "../../assets/icons/google-icon.svg";
import FacebookIconSvg from "../../assets/icons/facebook-icon.svg";

export const FormContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background: #fafafa;
  justify-content: center;
`;
export const Form = styled.div`
  height: 100%;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 100px;
  box-sizing: border-box;
  .MuiPaper-root {
    padding: 20px;
  }
`;

export const IconWrapper = styled.span`
  box-sizing: border-box;
  img {
    border: none;
    display: inline-block;
    height: 100%;
    width: 18px;
  }
`;

export const GoogleButton = withStyles((theme) => ({
  root: {
    color: "#5f6368",
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
}))(Button);

export const FacebookButton = withStyles((theme) => ({
  root: {
    color: "#fff",
    backgroundColor: "#3b5998",
    "&:hover": {
      backgroundColor: "#3b5998",
    },
  },
}))(Button);

const getIconSrc = (provider) => {
  return provider === "google" ? GoogleIconSvg : FacebookIconSvg;
};

export const ProviderIcon = ({ provider }) => (
  <IconWrapper>
    <img src={getIconSrc(provider)} alt="" />
  </IconWrapper>
);
