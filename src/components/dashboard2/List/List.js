import { CssBaseline, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Card from "../Card";
import InputContainer from "../Input/InputContainer";
import Title from "./Title";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "300px",
    backgroundColor: "#CEE5D0",
    marginLeft: theme.spacing(1),
  },
}));

const List = ({ list }) => {
  const classes = useStyle();

  return (
    <div>
      <Paper className={classes.root}>
        <CssBaseline />
        <Title title={list.title} />
        {list.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
        <InputContainer listId={list.id} type="card" />
      </Paper>
    </div>
  );
};

export default List;
