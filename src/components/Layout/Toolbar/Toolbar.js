import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const AppToolbar = () => {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Typography variant="h6" color="primary">
          Analytics
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;
