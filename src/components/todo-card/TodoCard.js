import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const TodoCard = ({ text }) => {
  return (
    <>
      <Card style={styles.cardCOntainer}>
        <CardContent>
          <Typography gutterBottom>{text}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

const styles = {
  cardCOntainer: {
    marginBottom: 8,
  }
}

export default TodoCard;
