import { Button, IconButton, InputBase, Paper } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@mui/icons-material/Clear";
import React, { useContext, useState } from "react";
import storeApi from "../../../utils/storeApi";

const useStyle = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(0, 1, 1, 1),
    padding: theme.spacing(1, 1, 1, 1),
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

const InputCard = ({ setOpen, listId }) => {
  const classes = useStyle();
  const { addMoreCard } = useContext(storeApi);

  const [cardTitle, setCardTitle] = useState(null);

  const handleOnchange = (e) => {
    setCardTitle(e.target.value);
  };

  const handleBtnConfirm = () => {
    addMoreCard(cardTitle, listId);
    setCardTitle("");
    setOpen(false);
  };

  const handleBlur = () => {
    setCardTitle("");
    setOpen(false);
  };

  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
            onChange={handleOnchange}
            multiline
            fullWidth
            onBlur={handleBlur}
            inputProps={{
              className: classes.input,
            }}
            value={cardTitle}
            placeholder="Enter a title of this card..."
          />
        </Paper>
      </div>
      <div className={classes.confirm}>
        <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>
          Add Card
        </Button>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default InputCard;
