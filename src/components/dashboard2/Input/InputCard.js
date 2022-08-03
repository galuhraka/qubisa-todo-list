import { Button, IconButton, InputBase, Paper } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@mui/icons-material/Clear";
import React, { useContext, useState } from "react";
import storeApi from "../../../utils/storeApi";

const useStyle = makeStyles((theme) => ({
  card: {
    width: '280px',
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottom: theme.spacing(4),
  },
  input: {
    margin: theme.spacing(1),
  },
  btnConfirm: {
    background: "#395B64",
    color: "#ebebeb",
    "&:hover": {
      background: fade("#395B64", 0.75),
    },
  },
  confirm: {
    margin: theme.spacing(0, 1, 1, 1),
  },
}));

const InputCard = ({ setOpen, listId, type }) => {
  const classes = useStyle();
  const { addMoreCard, addMoreList } = useContext(storeApi);

  const [title, setTitle] = useState(null);

  const handleOnchange = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const handleBtnConfirm = () => {
    if (type === "card") {
      addMoreCard(title, listId);
      setTitle("");
      setOpen(false);
    } else {
      addMoreList(title);
      setTitle("");
      setOpen(false);
    }
  };

  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
            onChange={handleOnchange}
            multiline
            fullWidth
            onBlur={() => setOpen(false)}
            inputProps={{
              className: classes.input,
            }}
            value={title}
            placeholder={
              type === "card"
                ? "Enter a title of this card..."
                : "Enter list title..."
            }
          />
        </Paper>
      </div>
      <div className={classes.confirm}>
        <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>
          {type === "card" ? "Add Card" : "Add List"}
        </Button>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default InputCard;
