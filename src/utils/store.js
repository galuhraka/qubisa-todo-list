const cards = [
  {
    id: "card-1",
    title: "Learning Javascript",
  },
  {
    id: "card-2",
    title: "Learning Phyton",
  },
  {
    id: "card-3",
    title: "Learning Flutter",
  },
];

const data = {
  lists: {
    "list-1": {
      id: "list-1",
      title: "Todo",
      cards,
    },
    "list-2": {
      id: "list-2",
      title: "Progress",
      cards: [],
    },
    "list-3": {
      id: "list-3",
      title: "Done",
      cards: [],
    },
  },
  listIds: ["list-1", "list-2", "list-3"],
};

export default data;
