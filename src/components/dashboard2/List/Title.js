import React, { useState } from "react";
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

const Title = () => {
  const classes = useStyle();

  const [open, setOpen] = useState(false);

  return (
    <div>
      {open ? (
        <div>
          <InputBase
            value="Todo"
            inputProps={{
              className: classes.input,
            }}
            fullWidth
            autoFocus
            onBlur={() => setOpen(!open)}
          />
        </div>
      ) : (
        <div className={classes.editableTitleContainer}>
          <Typography
            onClick={() => setOpen(!open)}
            className={classes.editableTitle}
          >
            TODO
          </Typography>
          <MoreHorizIcon />
        </div>
      )}
    </div>
  );
};

export default Title;
