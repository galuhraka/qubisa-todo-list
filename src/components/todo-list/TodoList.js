import React from "react";
import { TodoCard, ActionButton } from "../rootcomponents";
import { Droppable } from "react-beautiful-dnd";

const TodoList = ({ title, cards }) => {
  return (
    <Droppable droppableId="">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={styles.container}
        >
          <h4>{title}</h4>
          {cards.map((card, index) => (
            <TodoCard key={card.id_card} index={index} text={card.text} id={card.id_post} />
          ))}
          <ActionButton />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

const styles = {
  container: {
    backgroundColor: "#98DDCA",
    borderRadius: 3,
    width: 300,
    padding: 8,
    marginRight: 10,
    height: "100%",
  },
};

export default TodoList;
