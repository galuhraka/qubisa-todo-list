const cards = [
  {
    id: "card-1",
    content: "Learning Javascript",
  },
  {
    id: "card-2",
    content: "Learning Phyton",
  },
  {
    id: "card-3",
    content: "Learning Flutter",
  },
];

const data = {
  lists: {
    "list-1": {
      id: "list-1",
      title: "Todo",
      cards,
    },
  },
  listIds: ["list-1"],
};

export default data;
