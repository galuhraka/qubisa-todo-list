import { CssBaseline, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Card from "../Card";
import InputContainer from "../Input/InputContainer";
import Title from "./Title";

const useStyle = makeStyles((theme) => ({
  root: {
    minWidth: "300px",
    backgroundColor: "#CEE5D0",
    marginLeft: theme.spacing(1),
  },
  cardContainer: {
    marginTop: theme.spacing(4),
  },
}));

const List = ({ list, index }) => {
  const classes = useStyle();

  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps}>
          <Paper className={classes.root} {...provided.dragHandleProps}>
            <CssBaseline />
            <Title title={list.title} listId={list.id} />
            <Droppable droppableId={list.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={classes.cardContainer}
                >
                  {list.cards.map((card, index) => (
                    <Card key={card.id} card={card} index={index} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <InputContainer listId={list.id} type="card" />
          </Paper>
        </div>
      )}
    </Draggable>
  );
};

export default List;
