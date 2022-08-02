import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

const TodoCard = ({ text, id_post, index }) => {
  return (
    <Draggable draggableId={String(id_post)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card style={styles.cardContainer}>
            <CardContent>
              <Typography gutterBottom>{text}</Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

const styles = {
  cardContainer: {
    marginBottom: 8,
  },
};

export default TodoCard;
