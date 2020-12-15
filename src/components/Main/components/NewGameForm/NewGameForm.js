import React, { useContext, useState } from "react";
import moment from "moment";
import { GamesContext } from "../../../../context/GamesContext";
import Drawer from "@material-ui/core/Drawer";
import MomentUtils from "@date-io/moment";
import InputNumber from "rc-input-number";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import "rc-input-number/assets/index.css";
import Button from "@material-ui/core/Button";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import * as Styled from "./NewGameForm.style";

export const NewGameForm = () => {
  const { isDrawerOpen, toggleDrawer } = useContext(GamesContext);
  const [date, setDate] = useState(moment().startOf("day"));
  const [buyIn, setBuyIn] = useState(50);
  const [cashOut, setCashOut] = useState(0);
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
              autoOk
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
              value={buyIn}
              onChange={(v) => setBuyIn(v)}
              name="buyIn"
              type="number"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              inputProps={{ inputmode: "numeric", pattern: "[0-9]*" }}
            />
          </Box>
          <Box mb={3}>
            <TextField
              label="Cashed out"
              fullWidth
              type="number"
              value={cashOut}
              onChange={(v) => setCashOut(v)}
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
            >
              ADD
            </Button>
          </Box>
        </Styled.NewGameForm>
      </MuiPickersUtilsProvider>
    </Drawer>
  );
};
