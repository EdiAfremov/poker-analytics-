import React, { useContext, useState } from "react";
import moment from "moment";
import Drawer from "@material-ui/core/Drawer";
import MomentUtils from "@date-io/moment";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import "rc-input-number/assets/index.css";
import Button from "@material-ui/core/Button";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { DrawerContext } from "../../../../context/DrawerContext";
import { FireBaseContext } from "../../../../context/FireBaseContext";
import { AuthContext } from "../../../../context/AuthContext";

import * as Styled from "./NewGameForm.style";

export const NewGameForm = () => {
  const { isDrawerOpen, toggleDrawer } = useContext(DrawerContext);
  const { userId } = useContext(AuthContext);
  const { createNewGame } = useContext(FireBaseContext);

  const [date, setDate] = useState(moment().startOf("day"));
  const [buyIn, setBuyIn] = useState("50");
  const [cashedOut, setCashedOut] = useState("0");

  function onAddGameHandler() {
    if (!cashedOut || !date || !buyIn) return;
    const profit = cashedOut - buyIn;

    createNewGame({
      buyIn,
      cashedOut: cashedOut,
      date: moment(date).valueOf(),
      userId,
      profit,
    });
    toggleDrawer(false);
    setDate(moment().startOf("day"));
    setBuyIn("50");
    setCashedOut("0");
    return;
  }

  return (
    <Drawer
      anchor="bottom"
      open={isDrawerOpen}
      onClose={() => toggleDrawer(false)}
    >
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Styled.NewGameForm>
          <Box mb={3}>
            <DatePicker
              fullWidth
              required
              autoOk
              error={!date}
              disableToolbar
              disableFuture
              variant="inline"
              inputVariant="outlined"
              format="DD.MM.YY"
              margin="normal"
              id="date-picker-inline"
              label="Date"
              value={date}
              onChange={(date) => setDate(date)}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Box>
          <Box mb={3}>
            <TextField
              label="Buy-in"
              fullWidth
              error={!buyIn}
              value={buyIn}
              onChange={(e) => setBuyIn(e.target.value)}
              name="buyIn"
              type="number"
              required
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              inputProps={{ inputmode: "numeric", pattern: "[0-9]*" }}
            />
          </Box>
          <Box mb={3}>
            <TextField
              error={!cashedOut}
              required
              label="Cashed out"
              fullWidth
              type="number"
              value={cashedOut}
              onChange={(e) => setCashedOut(e.target.value)}
              name="cashedOut"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              inputProps={{ inputmode: "numeric", pattern: "[0-9]*" }}
            />
          </Box>
          <Box mb={3}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              disableElevation
              fullWidth
              onClick={() => onAddGameHandler()}
            >
              ADD
            </Button>
          </Box>
        </Styled.NewGameForm>
      </MuiPickersUtilsProvider>
    </Drawer>
  );
};
