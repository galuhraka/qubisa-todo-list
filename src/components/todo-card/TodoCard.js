import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const TodoCard = ({ text }) => {
  return (
    <>
      <Card style={styles.cardContainer}>
        <CardContent>
          <Typography gutterBottom>{text}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

const styles = {
  cardContainer: {
    marginBottom: 8,
  },
};

export default TodoCard;
