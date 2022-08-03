import React, { useContext, useState } from "react";
import storeApi from "../../../utils/storeApi";
import { InputBase, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const useStyle = makeStyles((theme) => ({
  editableTitleContainer: {
    margin: theme.spacing(1),
    display: "flex",
  },
  editableTitle: {
    flexGrow: 1,
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  input: {
    margin: theme.spacing(1),
    "&:focus": {
      background: "#FCF8E8",
    },
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
}));

const Title = ({ title, listId }) => {
  const classes = useStyle();

  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const { updateListTitle } = useContext(storeApi);

  const handleOnchange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleOnBlur = () => {
    updateListTitle(newTitle, listId);
    setOpen(false);
  };

  return (
    <div>
      {open ? (
        <div>
          <InputBase
            value={newTitle}
            inputProps={{
              className: classes.input,
            }}
            fullWidth
            autoFocus
            onBlur={handleOnBlur}
            onChange={handleOnchange}
          />
        </div>
      ) : (
        <div className={classes.editableTitleContainer}>
          <Typography
            onClick={() => setOpen(!open)}
            className={classes.editableTitle}
          >
            {title}
          </Typography>
          <MoreHorizIcon />
        </div>
      )}
    </div>
  );
};

export default Title;
