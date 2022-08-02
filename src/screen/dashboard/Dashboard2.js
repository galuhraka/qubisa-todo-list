import { Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import { ActionButton } from "../../components/rootcomponents";

const data = [
  {
    id: 1,
    title: "TODO",
    cards: [
      {
        id_cards: 1,
        text: "nonton drakor",
      },
      {
        id_cards: 2,
        text: "nonton drakor",
      },
    ],
  },
  {
    id: 2,
    title: "PROGRESS",
    cards: [
      {
        id_cards: 1,
        text: "nonton drakor",
      },
    ],
  },
  {
    id: 3,
    title: "DONE",
    cards: [
      {
        id_cards: 1,
        text: "nonton drakor",
      },
    ],
  },
];

const Dashboard2 = () => {
  return (
    <>
      <div style={styles.listContainer}>
        {data.map((item) => (
          <div style={styles.container}>
            <h4>{item.title}</h4>
            {item.cards.map((index) => (
              <Card style={styles.cardContainer}>
                <CardContent>
                  <Typography gutterBottom>{index.text}</Typography>
                </CardContent>
              </Card>
            ))}
            <ActionButton />
          </div>
        ))}
      </div>
    </>
  );
};

const styles = {
  listContainer: {
    display: "flex",
    flexDirection: "row",
  },
  container: {
    backgroundColor: "#98DDCA",
    borderRadius: 3,
    width: 300,
    padding: 8,
    marginRight: 10,
    height: "100%",
  },
  cardContainer: {
    marginBottom: 8,
  },
};

export default Dashboard2;
