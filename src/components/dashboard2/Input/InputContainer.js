import { Collapse, Paper, Typography } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import InputCard from "./InputCard";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    width: "300px",
  },
  addCard: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(0, 1, 1, 1),
    backgroundColor: "#CEE5D0",
    "&:hover": {
      backgroundColor: fade("#94B49F", 0.25),
    },
  },
}));

const InputContainer = ({ listId, type }) => {
  const classes = useStyle();

  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} type={type} />
      </Collapse>
      <Collapse in={!open}>
        <Paper
          className={classes.addCard}
          elevation={0}
          onClick={() => setOpen(!open)}
        >
          <Typography>
            {type === "card" ? "+ Add a card" : "+ Add another list"}
          </Typography>
        </Paper>
      </Collapse>
    </div>
  );
};

export default InputContainer;
