import React from "react";
import { default as BottomNavigationMui } from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components";
import { DrawerContext } from "../../context/DrawerContext";

const StyledBottomNavigation = styled.div`
  .MuiBottomNavigation-root {
    border-top: 1px solid #e5e9ed;
    align-items: center;
    position: relative;
    .MuiFab-root {
      position: absolute;
      top: -10px;
    }
  }
`;

const BottomNavigation = () => {
  const { toggleDrawer } = React.useContext(DrawerContext);
  return (
    <StyledBottomNavigation>
      <BottomNavigationMui
        value={""}
        onChange={(event, newValue) => {}}
        showLabels
      >
        <Fab
          onClick={() => toggleDrawer((prev) => !prev)}
          size="medium"
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </BottomNavigationMui>
    </StyledBottomNavigation>
  );
};

export default BottomNavigation;
